import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Pages/Checkout/Checkout'
import Blogs from './Pages/Blogs/Blogs'
import Contact from './components/Contact/Contact';
import About from './Pages/AboutMe/About';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFund from './Pages/NotFound/NotFound';







function App() {
  return (
    <div className="App">



      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFund></NotFund>}></Route>
      </Routes>
    </div>
  );
}

export default App;
