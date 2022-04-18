import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/Checkout/Checkout';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import About from './components/AboutMe/About';






function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
