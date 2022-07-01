import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/:id" element={<Movie />}/>
        </Routes>
        <Footer/> 
      </Router>
  );
}

export default App;
