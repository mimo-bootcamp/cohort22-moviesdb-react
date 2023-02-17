import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/movie-details" element={<MovieDetails />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
