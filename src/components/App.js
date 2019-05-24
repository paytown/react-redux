import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from '../containers/posts/HomePage';

export default function App() {
  return (
    <>
    <Router>
      <Route exact path ="/" component={HomePage} />
    </Router>
    </>
  );
}
