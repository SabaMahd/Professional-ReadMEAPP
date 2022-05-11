// Sign-up form component
import React from 'react';
// Checks to make sure user's email address and password are both unique
// Validate email address using the RegEx in the helpers.js file in the utils folder
import { validateEmail } from '../../utils/helpers';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function SignupForm() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { username, email, password } = formState;
  const [signup] = useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signup({ variables: { ...formState } });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.log(error);
    }

    setFormState({
      username: '',
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
    <Form id="signup-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter username"
          name="username"
          defaultValue={username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          defaultValue={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          defaultValue={password}
          onChange={handleChange}
        />
      </Form.Group>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
    // <section>
    //     <form id="signin-form" onSubmit={handleSubmit}>
    //         <div>
    //             <label htmlFor='email'>Email address:</label>
    //             <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
    //         </div>
    //         <div>
    //             <label htmlFor='password'>Password:</label>
    //             <input type="password" name='password' defaultValue={password} onBlur={handleChange} />
    //         </div>
    //         {errorMessage && (
    //             <div>
    //                 <p className='error-text'>{errorMessage}</p>
    //             </div>
    //         )}
    //         <button type="submit">Sign-up</button>
    //     </form>
    // </section>
  );
}

export default SignupForm;
