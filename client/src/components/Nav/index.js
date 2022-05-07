import React from 'react';
//import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
//import SigninForm from '../src/components/Signup';
//import SigninForm from '../src/components/Signin';

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1><a href="/">Professional-Readme</a></h1>
      </div>
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <a href="client\src\components\GenerateReadmeForm">
              ReadmeGenerator
            </a>
          </li>
          <li className="mx-1">
            <a href="#signin">
              Login/Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>

  );
};


export default Header;