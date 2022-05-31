import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Subpage from './pages/Subpage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<User title={"User"} />} />
        <Route path='/messaging' element={<Subpage title={"Messages"} />} />
      </Routes>
    </Router>
  );
}

export default App;