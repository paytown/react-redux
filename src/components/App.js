import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from '../containers/posts/HomePage';
import PostId from '../containers/posts/PostId';

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path ="/" component={HomePage} />
        <Route exact path ="/posts/:id" component={PostId}></Route>
      </Switch>
    </Router>
    </>
  );
}
