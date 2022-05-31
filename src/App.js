import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Subpage from './pages/Subpage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/attributes' element={<Subpage title={"Attributes"} />} />
          <Route path='/events' element={<Subpage title={"Events"} />} />
          <Route path='/purchases' element={<Subpage title={"Purchases"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;