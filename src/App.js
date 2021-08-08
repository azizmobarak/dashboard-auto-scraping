import logo from './logo.svg';
import './App.css';
import User from './app/components/user';
import Login from './app/components/login/login'
import Register from './app/components/register/register'
import Dashboard from './app/components/user/';
import React from 'react'
import {io} from 'socket.io-client';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import RouteRole from './app/routes/'

const endpoint = 'http://127.0.1.1:3000'
const socket = io(endpoint);



function App() {

  const [role,setrole] = React.useState('user')

  return (
    <Router>
    <Switch>
      <Route path={`/login`} component={Login} />
      <Route path={`/register`} component={Register} />
      <RouteRole role={role} />
    </Switch>
</Router>
  );
}

export default App;
