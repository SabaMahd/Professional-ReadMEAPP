// Sign-in/Sign-up page
// Will contain Sign-in and Sign-up components
// Sign-in component will be main component that shows up when user opens page
// Sign-up component will appear if user clicks on a link that reads "Don't have an account? Create one here"

// Sign-in page will render initially based on the Navigation link
// Sign-up page will render only based on a "Create Account" link, user cannot access sign-up page through Navigation normally 

import React from "react";
import '../../App.cs';
import SigninForm from "../Signin";

function SigninPage() {
    return (
        <div>
            <h1>Sign In</h1>
            <SigninForm />
        </div>
    );
}

export default SigninPage;