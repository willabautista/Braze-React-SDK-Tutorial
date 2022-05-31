import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import ContentCards from './pages/ContentCards';
import * as braze from "@braze/web-sdk";

function App() {

  useEffect(() => {
    // TODO: initialize the SDK
    braze.initialize('180b8a79-3097-4bdb-920c-4feb78f1a2ac', {
      baseUrl: "sondheim.braze.com",
      enableLogging: true
    });

    // TODO: set the user's External ID
    braze.changeUser('1');

    braze.subscribeToContentCardsUpdates(function (cards) {
      // cards have been updated
    });

    // TODO: implement this function so that In App Messages only display if they key 'display' is true
    braze.subscribeToInAppMessage(function (inAppMessage) {
      if (inAppMessage instanceof braze.InAppMessage) {
        const extras = inAppMessage.extras;
        if (extras) {
          for (const key in extras) {
            if (key == 'display' && extras[key] == true) {
              braze.showInAppMessage(inAppMessage);
            }
          }
        }
      }
    });

    braze.openSession();

  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/contentcards' element={<ContentCards />} />
      </Routes>
    </Router>
  );
}

export default App;