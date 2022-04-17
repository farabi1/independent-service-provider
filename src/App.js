import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/footer" element={<Footer></Footer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
