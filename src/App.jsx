import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playing from "./pages/NowPlaying";
import Rating from "./pages/Rating";
import Discussion from "./pages/Discussion";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playing" element={<Playing />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/discussion" element={<Discussion />} />
      </Routes>
    </Router>
  );
};

export default App;
