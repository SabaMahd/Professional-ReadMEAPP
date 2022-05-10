// Generate README Form page
// Will contain GenerateReadmeForm component

import React from 'react';
import ReadMeForm from '../../components/GenerateReadmeForm';
import Auth from '../../utils/auth';
import ReadMeList from '../ReadMeList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ReadmeGenerator() {
  const loggedIn = Auth.loggedIn();
  return loggedIn ? (
    <Row>
      <Col>
        <ReadMeForm />
      </Col>
      <Col>
        <ReadMeList />
      </Col>
    </Row>
  ) : (
    window.location.replace('/login')
  );
}

export default ReadmeGenerator;
