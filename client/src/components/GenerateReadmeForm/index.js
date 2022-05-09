import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Multiselect from 'multiselect-react-dropdown';
// import Select from 'react-select';


const GenerateReadme = () => { 
    const tech = [{
        value:1,
       label:"JavaScript"

    },

       {
        value:2,
       label:"Nodejs"
    },

       {
        value:4,
       label:"React"
    },

       {
       value:5,
       label:"MongoDB"
    },
    {
    value:6,
    label:"Bootstrap"
},
{
    value:7,
    label:"GraphQL",},
{
         value:8,
       label:"HTML",},
{
       value:9,
       label:"CSS",},

      ];    
    return(
  
<form> 

    {/* title */}
<Form.Group className="mb-2" controlId="readMeForm.ControlInput1">
    <Form.label>Title</Form.label>
    <Form.control type="text"></Form.control>
</Form.Group>

{/* description */}
<Form.group className="mb-2" controlId="readMeForm.ControlTextarea1">
<Form.Control as="textarea" rows={4} />
</Form.group>
{/* technogolgies */}

    <Form.Group className='mb-2' key="readMeForm.ControlInput1"> 
    <Form.label>Select technologies used</Form.label>
    <Multiselect
  displayValue="key"
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  options={tech}
  showCheckbox
/>

    </Form.Group>
   

{/* installation  */}
<Form.Group className="mb-2" controlId="readMeForm.ControlTextarea2">
        <Form.Label>Installation</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
{/* Usage */}
<Form.Group className="mb-2" contorlID="readMeForm.ControlTextarea3">
<Form.Label>Usage</Form.Label>
<Form.Control as="textarea" rows={4}/>
</Form.Group>

{/* Credits */}
<Form.Group>
    <Form.Label>Credits</Form.Label>
    <Form.Control as="textarea" rows={1}/>

</Form.Group>



<Button variant="outline-damger">Submit</Button>{' '}
    
    </form>)


  
};

// export
export default GenerateReadme
