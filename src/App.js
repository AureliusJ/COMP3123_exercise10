import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <h1>React Redux & JWT Demo</h1>
      <Navbar />
      <Login />
      <Dashboard />
    </div>
  );
};

export default App;
