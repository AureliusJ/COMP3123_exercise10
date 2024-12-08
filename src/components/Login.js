import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { login } from '../services/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const { user, token } = login(email, password);
    dispatch(setUser({ user, token }));
  };

  return (
    <div className="container login">
  <h2>Login</h2>
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <button onClick={handleLogin}>Login</button>
</div>

  );
};

export default Login;
