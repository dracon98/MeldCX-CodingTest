import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Login} />
    </React.Fragment>
  );
}

export default App;
