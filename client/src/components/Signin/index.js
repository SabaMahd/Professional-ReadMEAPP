// Sign-in form component
import React, { useState } from 'react';

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
