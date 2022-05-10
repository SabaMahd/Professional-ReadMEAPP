import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { GET_ME, COMPOSE_README } from '../../utils/queries';
import { DELETE_READ_ME } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ReadMeList() {
  const { loading, data } = useQuery(GET_ME);
  // const { loadingReadMeData, readmeData } = useQuery(COMPOSE_README);
  const [deleteReadMe] = useMutation(DELETE_READ_ME);

  const me = data?.me || {};
  console.log(me.files);

  const handleDeleteReadme = async (readMeId) => {
    try {
      if (Auth.loggedIn()) {
        const { data } = await deleteReadMe({
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
            <DropdownButton as={ButtonGroup} title={element.title}>
              <Dropdown.Item eventKey="1">Genereate README</Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                onClick={() => handleDeleteReadme(element._id)}
                id={`${element._id}`}
              >
                Delete README
              </Dropdown.Item>
              <Dropdown.Item eventKey="3">Download</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </Col>
      ))}
    </Row>
  );
}

export default ReadMeList;
