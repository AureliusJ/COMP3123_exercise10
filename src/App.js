import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div>
      <h1>React Redux & JWT Demo</h1>
      <Login />
      <Dashboard />
    </div>
  );
};

export default App;
