import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import ContentCards from './pages/ContentCards';
import * as braze from "@braze/web-sdk";

function App() {
  const [cards, setCards] = useState([]);

  // TODO: initialize the SDK
  braze.initialize('180b8a79-3097-4bdb-920c-4feb78f1a2ac', {
    baseUrl: "sondheim.braze.com",
    enableLogging: true
  });

  // TODO: register for push
  braze.requestPushPermission()

  useEffect(() => {
    // TODO: set the user's External ID
    braze.changeUser('1');

    // TODO: subscribe to Content Cards using the cards hook
    braze.subscribeToContentCardsUpdates(function (event) {
      setCards(event.cards);
    });
    braze.requestContentCardsRefresh();

    // TODO: subscribe to In-App Messages and only display them if a KVP 'display' is 'homepage' 
    braze.subscribeToInAppMessage(function (inAppMessage) {
      if (inAppMessage instanceof braze.InAppMessage) {
        const extras = inAppMessage.extras;
        if (extras) {
          for (const key in extras) {
            if (key == 'display' && extras[key] == 'homepage') {
              braze.showInAppMessage(inAppMessage);
            }
          }
        }
      }
    });

    // TODO: open session
    braze.openSession();
  }, [setCards]);

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