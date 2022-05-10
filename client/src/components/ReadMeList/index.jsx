import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import { GET_ME, COMPOSE_README } from '../../utils/queries';
import { DELETE_READ_ME } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';

function ReadMeList() {
  const { loadingUserData, Userdata } = useQuery(GET_ME);
  // const { loadingReadMeData, readmeData } = useQuery(COMPOSE_README);
  const [deleteReadMe] = useMutation(DELETE_READ_ME);

  return (
    <ButtonGroup className="d-grid gap-2" >
      <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown" >
        <Dropdown.Item eventKey="1" >Genereate README</Dropdown.Item>
        <Dropdown.Item eventKey="2">Delete README</Dropdown.Item>
        <Dropdown.Item eventKey="3">Download</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
}

export default ReadMeList;
