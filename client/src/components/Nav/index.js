import React from 'react';
//import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import NavTabs from '../NavTabs';
//import SigninForm from '../src/components/Signup';
//import SigninForm from '../src/components/Signin';

function Header({ 
  currentPage, handlePageChange
}) {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center justify-space-between-lg">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Professional-Readme</h1>
        </Link>
        {/* <h1><a href="/">Professional-Readme</a></h1> */}
      </div>
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/home">README Generator</Link>
            {/* <a href="client\src\components\GenerateReadmeForm">
              ReadmeGenerator
            </a> */}
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
            {/* <a href="#signin">
              Login/Sign Up
            </a> */}
          </li>
          <li className="mx-1">
            <Link to="/signup">Sign-Up</Link>
            {/* <a href="#signin">
              Login/Sign Up
            </a> */}
          </li>
        </ul>
      </nav>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
};

export default Header;
