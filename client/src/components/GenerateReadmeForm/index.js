import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_README } from '../../utils/mutations';
import { COMPOSE_README, GET_ME } from '../../utils/queries';

const GenerateReadMeForm = () => {

  const handleFormSubmit = async event => {
    event.preventDefault();

  };
    return (
      <div>
        <h2>Create your README</h2>
        <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}>
          <label>User Name:</label>
          <input
          type= 'string'
          className="form-input col-12 col-md-9"
          required
          />
          <label>Give a title to your README:</label>
          <input
          type= 'string'
          className="form-input col-12 col-md-9"
          required
          />
          <textarea
            placeholder="Here's a description..."
            required
            className="form-input col-12 col-md-9"
            onChange={handleChange}>
        </textarea>
        
          <label>Technologies used:</label>
          <select className="form-input col-12 col-md-9">
            <option value="React">React</option>
            <option value="Node js">Node</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Express">Express</option>
            <option value="SQL">SQL</option>
          </select>
          <label>Installation:</label>
          <input
          type= 'string'
          className="form-input col-12 col-md-9"
          />
          <label>Usage:</label>
          <input
          type= 'string'
          className="form-input col-12 col-md-9"
          />

      
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>

      </div>
    )
};


export default GenerateReadMeForm;