import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playing from "./pages/NowPlaying";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Playing />} />
      </Routes>
    </Router>
  );
};

export default App;
