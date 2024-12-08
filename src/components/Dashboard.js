import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  if (!user) return <p>Please log in to view the dashboard.</p>;

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Dashboard;
