import React from 'react';
import styled from 'styled-components';

const AddNewNPCForm = ({
  generateNPC,
  updateNameForm,
  updateRaceForm,
  updateDemeanorForm,
  addNPC,
  cancelAdd
}) => {
  return (
    <div>
      <button onClick={generateNPC}>Generate Random NPC</button>
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
      <button onClick={cancelAdd}>Cancel</button>
      <button onClick={addNPC}>Save</button>
    </div>
  )
}

export default AddNewNPCForm;