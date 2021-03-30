import React from 'react';
import styled from 'styled-components';

const AddNewNPCForm = (/* props */) => {
  return (
    <div>
      <button>Generate NPC</button> {/* will run the main axios call and functions!*/}
      <label>
        Name:
      <input type="text"></input>
      </label>
      <label>
        Race:
      <input type="text"></input>
      </label>
      <label>
        Demeanor:
      <input type="text"></input>
      </label>
    </div>
  )
}

export default AddNewNPCForm;