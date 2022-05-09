import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signin from './pages/SigninPage';

//import NoMatch from './pages/NoMatch';

import Profile from './pages/Profile';

import Signup from './pages/Signup';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

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
    // <div>
    //   <Nav />
    //   <About />
    //   <SigninForm />
    //   <Footer />
    // </div>

    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
            <Route
      path="/"
      element={<Home />}
    />
    <Route
      path="/signin"
      element={<Signin />}
    />
    <Route
      path="/signup"
      element={<Signup />}
    />
    <Route
      path="/profile/:username?"
      element={<Profile />}
    />
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;