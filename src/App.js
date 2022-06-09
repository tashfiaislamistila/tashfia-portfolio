import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Page/Shared/Navbar';
import Home from './Page/Home/Home';
import About from './Page/Home/About';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
