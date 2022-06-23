import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
        {/* <BrowserRouter>
        <Routes>
        <h1>Hello, React Router!</h1>
        <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
