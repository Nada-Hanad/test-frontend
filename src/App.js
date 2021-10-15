import './App.css';
import Home from './components/home';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './components/postPage';

function App() {
  const [currentPost, setCurrentPost] = useState({});
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home setCurrentPost={setCurrentPost} />
        </Route>
        <Route path='/posts/:id'>
          <Post post={currentPost}></Post>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
