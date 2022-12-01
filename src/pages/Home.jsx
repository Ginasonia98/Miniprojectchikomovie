import { getMovieList, searchMovie } from "../api";
import { useEffect, useState } from "react";
import NavbarSection from "../components/Navbar";
import Footer from "../components/Footer";
import ModalSection from "../components/Modal";
import Carousel from "react-bootstrap/Carousel";

import {
  generateRequestToken,
  validateRequestToken,
  generateSessionId,
  getAccount,
  deleteSessionId,
} from "../api";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  const [session, setSession] = useState("");
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (session || localStorage.getItem("session")) {
      setSession(session ? session : localStorage.getItem("session"));
    }
  }, [session]);

  useEffect(() => {
    if (account || localStorage.getItem("account")) {
      setAccount(
        account ? account : JSON.parse(localStorage.getItem("account"))
      );
    }
  }, [account]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Masukkan username dan password");
      return;
    }
    const requestToken = await generateRequestToken();
    if (requestToken === undefined) {
      setError("Kesalahan server");
      return;
    }
    if (!requestToken.success) {
      setError("Kesalahan server");
      return;
    }
    const data = {
      username,
      password,
      request_token: requestToken.request_token,
    };
    const validate = await validateRequestToken(data);
    if (validate === undefined) {
      setError("Kesalahan server");
      return;
    }
    if (!validate.success) {
      setError("Kesalahan server");
      return;
    }
    const requestSessionBody = {
      request_token: validate.request_token,
    };
    const session = await generateSessionId(requestSessionBody);
    if (session === undefined) {
      setError("Kesalahan server");
      return;
    }
    if (!session.success) {
      setError("Kesalahan server");
      return;
    }
    const account = await getAccount(session.session_id);

    if (account === undefined) {
      setError("Kesalahan server");
      return;
    }
    localStorage.setItem("session", session.session_id);
    setSession(session.session_id);
    localStorage.setItem("account", JSON.stringify(account));
    setAccount(account);
    handleClose();
    setError("");
  };

  const handleSignOut = async () => {
    const body = {
      session_id: session,
    };
    await deleteSessionId(body);
    localStorage.removeItem("session");
    localStorage.removeItem("account");
    window.location.reload();
  };

  const handleUsername = (value) => {
    setUsername(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="col-3 mb-4" key={i}>
          <div className="Movie-wrapper rounded-3">
            <div className="Movie-id pt-2 fs-6">{movie.id}</div>
            <div className="Movie-title pb-2 fs-5">{movie.title}</div>
            <div className="px-2">
              <img
                className="Movie-image rounded-4"
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                alt="Movie"
              />
            </div>
            <div className="px-4">
              <div className="position-relative bg-white h-200px wrapper top-card rounded-3">
                <div className="Movie-popularity pt-2 fs-6">{movie.popularity}</div>
                <div className="Movie-overview p-2 fs-6">{movie.overview}</div>
              </div>
            </div>
            <br />
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <>
      <NavbarSection
        session={session}
        handleShow={handleShow}
        handleSignOut={handleSignOut}
        account={account}
      />
      <ModalSection
        error={error}
        show={show}
        handleClose={handleClose}
        username={username}
        password={password}
        handleSignIn={handleSignIn}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
      />
      <div className="App">
        <header className="App-header">
          <div className="Carousel">
            <Carousel>
              <Carousel.Item>
                <img
                  className="carousel"
                  src="https://www.blackadammovie.net/images/share.jpg"
                  alt="Black Adam"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel"
                  src="https://www.dca.org.uk/assets/ce-cache/made/assets/media-carousel/blackpanther_630_300_70.jpg"
                  alt="Wakanda"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel"
                  src="https://s1.dmcdn.net/v/UG-5g1ZGaXzmCnrkM/x1080"
                  alt="Blues Big City Adventure"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <input
            placeholder="search your favorite film"
            className="Movie-search"
            onChange={({ target }) => search(target.value)}
          />
          <div className="Container_wrapper">
            <h3 className="Explanation px-2 py-4">Popular</h3>
            <div className="container">
              <div className="row">
                <PopularMovieList />
              </div>
            </div>
          </div>
        </header>
      </div>
      <Footer />
    </>
  );
};

export default Home;
