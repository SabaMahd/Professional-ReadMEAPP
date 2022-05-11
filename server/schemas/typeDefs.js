const { gql } = require('apollo-server-express');

// create our type defs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    fileCount: Int
    files: [ReadMe]
  }

  type ReadMe {
    username: String
    _id: ID
    title: String
    description: String
    technologies: [String]
    installation: String
    usage: String
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
    allReadmes: [ReadMe]
    userReadmes(username: String!): [ReadMe]
    composeReadMe(readMeId: ID!): ReadMe
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReadMe(input: ReadMeInput!): User
    deleteReadMe(readMeId: ID!): User
    composeReadMe(readMeId: ID!): ReadMe
  }
`;

module.exports = typeDefs;
