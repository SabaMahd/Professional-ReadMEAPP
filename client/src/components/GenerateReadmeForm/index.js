import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ADD_README } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

  let tech = [];

function ReadMeForm() {
  const [addReadMe] = useMutation(ADD_README);

  const technologies = [
    'JavaScript',
    'NodeJS',
    'ReactJS',
    'MongoDB',
    'GraphQL',
    'Bootstrap',
    'CSS',
    'HTML',
  ];

  const [formState, setFormState] = useState({
    title: '',
    description: '',
    technologies: [],
    installation: '',
    usage: '',
  });

  // let tech = [];

  const checkBoxValue = (event) => {
    const { name, value } = event.target;
    if (document.getElementById(`${name}`).checked === true) {
      tech.push(value);
      console.log(tech)
      return tech
    } else if (document.getElementById(`${name}`).checked === false) {
      let index = tech.findIndex((element) => element === name);
      tech.splice(index, 1);
      console.log(tech)
      return tech
    }
  };

  const handleChange = (event) => {
    console.log(tech)
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    console.log(formState);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const formData = { ...formState, technologies: tech }

      if (Auth.loggedIn()) {
        const { data } = await addReadMe({
          variables: { input: formData },
        });
      }
    } catch (e) {
      console.error(e);
    }

    setFormState({
      title: '',
      description: '',
      technologies: [],
      installation: '',
      usage: '',
    });
  };

  console.log(formState);

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="readMeForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="readMeForm.ControlTextarea1">
        <Form.Label>Decsciption</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          onChange={handleChange}
        />
      </Form.Group>
      <div key="inline-checkbox" className="mb-3">
        {technologies.map((technology) => (
          <Form.Check
            key={technology}
            inline
            label={technology}
            // name='technologies'
            name={technology}
            type="checkbox"
            value={technology}
            // id={`inline-checkbox-${technology}`}
            id={technology}
            onChange={checkBoxValue}
          />
        ))}
      </div>
      <Form.Group className="mb-3" controlId="readMeForm.ControlTextarea2">
        <Form.Label>Installation</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="installation"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="readMeForm.ControlTextarea3">
        <Form.Label>Usage</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="usage"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="outline-warning" type="submit">
        Submit
      </Button>{' '}
    </Form>
  );
}

export default ReadMeForm;
