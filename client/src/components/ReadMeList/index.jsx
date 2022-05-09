import React from 'react';

import { GET_ME, COMPOSE_READ_ME } from '../../utils/queries';
import { DELETE_READ_ME } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';

function ReadMeList() {
  const { loading, data } = useQuery(GET_ME);
  const [deleteReadMe] = useMutation(DELETE_READ_ME);
  return <div>ReadMeList</div>;
}

export default ReadMeList;
