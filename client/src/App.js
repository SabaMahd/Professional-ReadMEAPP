import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from '../src/components/About';
import SigninForm from '../src/components/Signin';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : '' },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <Nav />
      <About />
      <SigninForm />
    </div>

    //   <ApolloProvider client={client}>

    //       <div className='flex-column justify-flex-start min-100-vh'>
    //           <Nav />
    //           <div className='container'>
    //               <About />
    //           </div>
    //               <Footer />
    //       </div>

    // </ApolloProvider>
  );
}

export default App;
