import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Page/Shared/Navbar';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer';
import Blogs from './Page/Home/Blogs';
import Contact from './Page/Home/Contact';


function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
