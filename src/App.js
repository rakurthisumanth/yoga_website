import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Cources from './components/Cources';
import Coumminity from './components/Coumminity';

function App() {
  return (
<BrowserRouter>
    <Routes>
    <Route path="/" element={< Home/>}/> 
    <Route path="/about" element={< Aboutus/>}/> 
    <Route path="/contact" element={< Contact/>}/> 
    <Route path="/cources" element={< Cources/>}/> 
    <Route path="/coumminity" element={< Coumminity/>}/> 

    </Routes>
    </BrowserRouter>
  )
}

export default App;
