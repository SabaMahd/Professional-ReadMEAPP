import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users($username: String) {
    users(username: $username) {
      _id
      username
      email
      files {
        _id
        title
        description
        technologies
        installation
        Usage
        createdAt
      }
    }
  }
`;