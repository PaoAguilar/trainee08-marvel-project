import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Stories from './pages/Stories';
import Layout from './components/Layout';
import HeaderProvider from './context/GlobalContext';
import CharacterInfo from './pages/CharacterInfo';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <HeaderProvider>
            <Route exact path="/characters">
              <Characters />
            </Route>
            <Route exact path="/characters/:characterId">
              <CharacterInfo />
            </Route>
            <Route exact path="/comics">
              <Comics />
            </Route>
            <Route exact path="/stories">
              <Stories />
            </Route>
          </HeaderProvider>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
