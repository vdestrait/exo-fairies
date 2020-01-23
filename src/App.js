import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/homepage/Home';
import Creatures from './components/creatures/Creatures';
import Imprint from './components/imprint/Imprint';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/creatures">Creatures</Link>
            </li>
            <li>
              <Link to="/imprint">Imprint</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/creatures">
            <Creatures />
          </Route>
          <Route path="/imprint">
            <Imprint />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
  