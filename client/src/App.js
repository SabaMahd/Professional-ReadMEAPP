import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import About from '../src/components/About';
import SigninForm from '../src/components/Signin';
import Nav from './components/Nav';
import Footer from './components/Footer'
import './App.css';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <About />
      <SigninForm />
      <Footer />
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
