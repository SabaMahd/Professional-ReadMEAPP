import { gql } from '@apollo/client';

export const QUERY_READMES = gql`
  query readmes($username: String) {
    readmes(username: $username) {
      _id
      username
      title
      description
      technologies
      installation
      Usage
      createdAt
      
    }
  }
`;