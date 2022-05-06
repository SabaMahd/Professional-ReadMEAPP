import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51KwGjhD1YvbIoAvE6Pimog4ly0Hm3qzZWQL5Fj6kGmjjXaNP93anNcFbZsr5Ee4KuMen6HnWXKB2n4x9hsBXjy4n00NSPzi5IJ');

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;