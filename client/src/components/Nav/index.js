import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-warning mb-4 py-2 flex-row align-center justify-space-between-lg">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Professional-Readme</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/home">README Generator</Link>
          </li>
          {Auth.loggedIn() ? (
            <li>
              {' '}
              <a href="/" onClick={logout}>
                Logout
              </a>{' '}
            </li>
          ) : (
            <>
              <li className="mx-1">
                <Link to="/login">Login</Link>
              </li>
              <li className="mx-1">
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
    </header>
  );
};

export default Header;