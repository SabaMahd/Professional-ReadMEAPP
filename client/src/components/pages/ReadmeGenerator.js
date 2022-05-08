// Generate README Form page
// Will contain GenerateReadmeForm component

import React from 'react';
import ReadMeForm from '../../components/GenerateReadmeForm';
import { GET_ME, COMPOSE_READ_ME } from '../../utils/queries';
import { ADD_README, DELETE_READ_ME } from '../../utils/mutations';
import Auth from '../../utils/auth';
import '../../App.css';

function ReadmeGenerator() {
  return <ReadMeForm />;
}

export default ReadmeGenerator;
