import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_BASEURL;

const getMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/popular?&api_key=${apiKey}`);
  return movie.data.results;
};

const getplayingMovieList1 = async () => {
  const movie = await axios.get(
    `${baseURL}/movie/now_playing?&api_key=${apiKey}`
  );
  return movie.data.results;
};

const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseURL}/search/movie?query=${q}&api_key=${apiKey}`
  );
  return search.data;
};

const generateRequestToken = async () => {
  const requestToken = await axios
    .get(`${baseURL}/authentication/token/new?api_key=${apiKey}`)
    .then((res) => res)
    .catch((error) => error);
  return requestToken.data;
};

const validateRequestToken = async (data) => {
  const validate = await axios
    .post(
      `${baseURL}/authentication/token/validate_with_login?api_key=${apiKey}`,
      data
    )
    .then((res) => res)
    .catch((error) => error);
  return validate.data;
};

const generateSessionId = async (data) => {
  const session = await axios
    .post(`${baseURL}/authentication/session/new?api_key=${apiKey}`, data)
    .then((res) => res)
    .catch((error) => error);
  return session.data;
};

const getAccount = async (sessionId) => {
  const account = await axios
    .get(`${baseURL}/account?api_key=${apiKey}&session_id=${sessionId}`)
    .then((res) => res)
    .catch((error) => error);
  return account.data;
};

const deleteSessionId = async (data) => {
  const session = await axios
    .delete(`${baseURL}/authentication/session?api_key=${apiKey}`, {
      data,
    })
    .then((res) => res)
    .catch((error) => error);
  return session.data;
};

export {
  getMovieList,
  getplayingMovieList1,
  searchMovie,
  generateRequestToken,
  validateRequestToken,
  generateSessionId,
  getAccount,
  deleteSessionId,
};
