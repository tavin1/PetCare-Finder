import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contato from './components/Contato/Contato.jsx'
import Sobre from './components/Sobre/Sobre.jsx';
import Finder from './components/Finder/Finder.jsx';
import Header from './components/Header/Header.jsx';
import HomePage from './components/HomePage/Home.jsx';


function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <hr />
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Finder" element={<Finder />} />
        </Routes>
      </div>
    </Router>
  ); 
}

export default App;
