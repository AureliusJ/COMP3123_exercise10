import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Redux JWT Demo</h1>
      </div>
      <div className="navbar-links">
        {user ? (
          <>
            <span>Welcome, {user.name}!</span>
            <button
              className="logout-button"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </>
        ) : (
          <span>Please log in</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
