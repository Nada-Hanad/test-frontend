import './App.css';
import Home from './components/home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './components/postPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/posts/:id'>
          <Post></Post>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
