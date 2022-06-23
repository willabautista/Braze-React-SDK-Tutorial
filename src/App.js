import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import ContentCards from './pages/ContentCards';

/* TODO:
    - Initialize the SDK
    - Set the user's External ID
    - Subscribe to In-App Messages
    - Subscribe to Content Cards and pass the cards to the ContentCards component
    - Register for Push
*/

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/contentcards' element={<ContentCards cards={cards} />} />
      </Routes>
    </Router>
  );
}

export default App;