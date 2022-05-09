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
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>Professional-Readme</h1>
      </div>
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <a href="#about">
              About me
            </a>
          </li>
          <li className="mx-1">
            <a href="#ReadmeGenerator">
              ReadmeGenerator
            </a>
          </li>
          <li className="mx-1">
            <a href="#signin">
              Sign in
            </a>
          </li>
          <li className="mx-1">
            <a href="#signup">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
};


export default Header;