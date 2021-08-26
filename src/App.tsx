import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Current from './components/Current'
import HistorySelect from './components/History'
import HistoryResult from './components/Result'
import About from './components/About'


function App() {
  return (
    <Router>

      <Navbar />

      <Switch>

      <Route exact path="/"><Current /></Route>
      <Route path="/current"><Current /></Route>
      <Route path="/history/select"><HistorySelect /></Route>
      <Route path="/history/result"><HistoryResult /></Route>
      <Route path="/about"><About /></Route>

      </Switch>

    </Router>
  );
}

export default App;
