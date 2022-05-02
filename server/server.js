const express = require('express');
const db = require('./config/connection');

// import apollo server
const { ApolloServer } = require('apollo-server-express');

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
