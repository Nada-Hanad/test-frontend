import './App.css';
import Home from './components/home';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [currentPost, setCurrentPost] = useState({});
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home setCurrentPost={setCurrentPost} />
        </Route>
        <Route path='/posts/:id'>
          <div className='post-page'>
            <div className='display-post'>
              <h1>{currentPost.title}</h1>
              <h4>{currentPost.caption}</h4>
              <p>{currentPost.details}</p>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
