import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const GenerateReadme = () => { 
    const tech = [
        'JavaScript',
        'NodeJS',
        'ReactJS',
        'MongoDB',
        'Bootstrap',
        'GraphQL',
        'HTML',
        'CSS',
      ];    
    return(<form> 


<select>
    <option value={tech[0]}></option>
    <option value={tech[1]}></option>
    <option value={tech[2]}></option>
    <option value={tech[3]}></option>
    <option value={tech[4]}></option>
    <option value={tech[5]}></option>
    <option value={tech[6]}></option>
    <option value={tech[7]}></option>
</select>





    </form>)


  
};

// export
export default GenerateReadme
