import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      email
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
