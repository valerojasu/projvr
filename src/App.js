import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/Paginas/About';
import Mainp from './Components/Paginas/Mainp';
import Home from './Components/Paginas/Home';
import Navb from './Components/Navegacion/Navb';


const App = () => {
  return ( 
<Router>
<Routes>
<Route path="/navb" element={<Navb />}/>
<Route path="/" element={<Mainp />} />
<Route path="/mainp" element={<Mainp />} />
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
</Routes>
</Router>

  );
}

export default App;
