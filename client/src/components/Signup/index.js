// Sign-up form component
import React from "react";
// Checks to make sure user's email address and password are both unique
// Validate email address using the RegEx in the helpers.js file in the utils folder
import { validateEmail } from "../../utils/helpers";
import { useState } from 'react'

function SignupForm() {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { email, password } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
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
                setErrorMessage(`${e.target.name}`)
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section>
            <form id="signin-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name='password' defaultValue={password} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Sign-up</button>
            </form>
        </section>
    );
}

export default SignupForm;