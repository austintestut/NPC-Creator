import React from 'react';
import styled from 'styled-components';

const AddNewNPCForm = ({
  generateNPC,
  updateNameForm,
  updateRaceForm,
  updateDemeanorForm
}) => {
  return (
    <div>
      <button onClick={generateNPC}>Generate Random NPC</button> {/* will run the main axios call and functions!*/}
      <label>
        Name:
      <input type="text" id="nameInput" onChange={(e) => updateNameForm(e)}></input>
      </label>
      <label>
        Race:
      <input type="text" id="raceInput" onChange={(e) => updateRaceForm(e)}></input>
      </label>
      <label>
        Demeanor:
      <input type="text" id="demeanorInput" onChange={(e) => updateDemeanorForm(e)}></input>
      </label>
    </div>
  )
}

export default AddNewNPCForm;