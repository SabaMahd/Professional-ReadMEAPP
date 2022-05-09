import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_README = gql`
  mutation addReadMe($input: ReadMeInput!) {
    addReadMe(input: $input) {
      _id
      username
      fileCount
      files {
        _id
        title
        description
        technologies
        installation
        usage
        createdAt
      }
    }
  }
`;

export const DELETE_READ_ME = gql`
  mutation deleteReadMe($readMeId: ID!) {
    deleteReadMe(readMeId: $readMeId) {
      _id
      username
      fileCount
      files {
        _id
        title
        description
        technologies
        installation
        usage
        createdAt
      }
    }
  }
`;
