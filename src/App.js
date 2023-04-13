import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import ContentCards from './pages/ContentCards';

function App() {
  const [cards, setCards] = useState([]);
  const [pushRequested, setPushRequested] = useState(true);

  useEffect(() => {

  }, []);

  return (
    <Router>
      <Navbar />
      <PushPermissionContainer>
        <PushPermissionButton onClick={requestPushPermission} disabled={pushRequested}>Request Push Permission</PushPermissionButton>
      </PushPermissionContainer>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/contentcards' element={<ContentCards cards={cards} />} />
      </Routes>
    </Router>
  );
}

const PushPermissionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`;

const PushPermissionButton = styled.button`
    margin-top: 20px;
    margin-right: 20px;
`;

export default App;