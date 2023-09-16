import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      
        <Route path = "/" element = {<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
