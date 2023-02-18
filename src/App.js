import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import Error from './pages/Error';

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/movie-details/:MovieID" element={<MovieDetails />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </main>
>>>>>>> Stashed changes
  );
}

export default App;
