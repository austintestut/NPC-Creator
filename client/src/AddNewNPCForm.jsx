import React from 'react';
import styled from 'styled-components';

const AddNewNPCForm = ({ generateNPC }) => {
  return (
    <div>
      <button onClick={generateNPC}>Generate Random NPC</button> {/* will run the main axios call and functions!*/}
      <label>
        Name:
      <input type="text" id="nameInput"></input>
      </label>
      <label>
        Race:
      <input type="text" id="raceInput"></input>
      </label>
      <label>
        Demeanor:
      <input type="text" id="demeanorInput"></input>
      </label>
    </div>
  )
}

export default AddNewNPCForm;