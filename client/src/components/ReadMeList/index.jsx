import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { GET_ME } from '../../utils/queries';
import { DELETE_READ_ME, COMPOSE_README } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function ReadMeList() {
  const { loading, data } = useQuery(GET_ME);
  const [deleteReadMe] = useMutation(DELETE_READ_ME);
  const [composeReadMe] = useMutation(COMPOSE_README);

  const me = data?.me || {};

  const handleDeleteReadMe = async (readMeId) => {
    try {
      if (Auth.loggedIn()) {
        const { data } = await deleteReadMe({
          variables: { readMeId },
        });
      }
    } catch (error) {}
  };

  const handleComposeReadMe = async (readMeId) => {
    console.log(readMeId)
    try {
      if (Auth.loggedIn()) {
        const { data } = await composeReadMe({
          variables: { readMeId },
        });
      }
    } catch (error) {}
  };

  if (loading) {
    return <h2>Loading README Files...</h2>;
  }
  return (
    <Row>
      <h1>{me.username}'s files</h1>

      {me.files.map((element) => (
        <Col sm={6} key={element.title}>
          <ButtonGroup>
            <DropdownButton
              as={ButtonGroup}
              title={element.title}
              onClick={() => handleComposeReadMe(element._id)}
            >
              <Dropdown.Item
                eventKey="2"
                onClick={() => handleDeleteReadMe(element._id)}
                id={`${element._id}`}
              >
                Delete README
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" href={require('../../dist/README.md')} download>
                Download README
              </Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </Col>
      ))}
    </Row>
  );
}

export default ReadMeList;
