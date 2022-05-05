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
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input ReadMeInput {
    title: String
    description: String
    technologies: [String]
    installation: String
    usage: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    readmes(username: String): [ReadMe]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReadMe(input: ReadMeInput!): User
  }
`;

module.exports = typeDefs;
