import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Tenth Assignment</h1>
      <Button variant="danger" >Button</Button>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
