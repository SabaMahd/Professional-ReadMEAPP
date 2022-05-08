// Sign-in/Sign-up page
// Will contain Sign-in and Sign-up components
// Sign-in component will be main component that shows up when user opens page
// Sign-up component will appear if user clicks on a link that reads "Don't have an account? Create one here"

// Sign-in page will render initially based on the Navigation link
// Sign-up page will render only based on a "Create Account" link, user cannot access sign-up page through Navigation normally 

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signin = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [Signin, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      const { data } = await Signin({
        variables: { ...formState }
      });
    
      Auth.Signin(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
              {error && <div>Signin failed</div>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signin;
