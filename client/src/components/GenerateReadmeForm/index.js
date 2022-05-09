import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ReadMeForm() {
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

  return (
    <Form>
      <Form.Group className="mb-3" controlId="readMeForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="readMeForm.ControlTextarea1">
        <Form.Label>Decsciption</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div key="inline-checkbox" className="mb-3">
        {technologies.map((technology) => (
          <Form.Check
            key={technology}
            inline
            label={technology}
            name={technology}
            type="checkbox"
            id={`inline-checkbox-${technology}`}
          />
        ))}
      </div>
      <Form.Group className="mb-3" controlId="readMeForm.ControlTextarea2">
        <Form.Label>Installation</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="readMeForm.ControlTextarea3">
        <Form.Label>Usage</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="outline-warning">Submit</Button>{' '}
    </Form>
  );
}

export default ReadMeForm;