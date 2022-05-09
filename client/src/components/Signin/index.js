// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';

import { LOGIN_USER } from '/Users/oharr/OneDrive/Desktop/projects2/Professional-ReadMEAPP/client/src/utils/mutations';
import Auth from '/Users/oharr/OneDrive/Desktop/projects2/Professional-ReadMEAPP/client/src/utils/auth';

const LoginForm = () => {
  const [login, { error }] = useMutation(LOGIN_USER);
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData }
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
        {error && <div>Login failed</div>}
      </Form>
    </>
  );
};

export default LoginForm;
// Checks to make sure that the user's email address and password match
// Validate email address using the RegEx in the helpers.js file in the utils folder
import { validateEmail } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function SigninForm() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { email, password } = formState;
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({ variables: { ...formState } });
      Auth.login(data.login.token);
    } catch (error) {
      console.log(error);
    }

    setFormState({
      email: '',
      password: '',
    });

    // if (!errorMessage) {
    //   setFormState({ [e.target.name]: e.target.value });
    //   console.log('Form', formState);
    // }
  };

  // Validates email address
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name}`);
      } else {
        setErrorMessage('');
      }
    }

    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    console.log(formState);
  };

  return (
    <section>
      <form id="signin-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            // onBlur={handleChange}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            defaultValue={password}
            // onBlur={handleChange}
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Sign-in</button>
      </form>

      <nav>
        <span>Don't have an account yet?</span>

        <a href="/signup">Create one here</a>
      </nav>
    </section>
  );
}

export default SigninForm;
