const { gql } = require('apollo-server-express');

// create our type defs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    files: [ReadMe]
  }

  type ReadMe {
    _id: ID
    title: String
    description: String
    technologies: [String]
    installation: String
    Usage: String
    createAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  
`;

module.exports = typeDefs;
