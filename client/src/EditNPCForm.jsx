import React from 'react';
import styled from 'styled-components';

const EditNPCForm = ({
  updateNameForm,
  updateRaceForm,
  updateDemeanorForm,
  cancelEdit,
  updateNPC
}) => {
  return (
    <div>
      <label>
        Name:
      <input type="text" id="editNameInput" onChange={(e) => updateNameForm(e)}></input>
      </label>
      <label>
        Race:
      <input type="text" id="editRaceInput" onChange={(e) => updateRaceForm(e)}></input>
      </label>
      <label>
        Demeanor:
      <input type="text" id="editDemeanorInput" onChange={(e) => updateDemeanorForm(e)}></input>
      </label>
      <button onClick={cancelEdit}>Cancel</button>
      <button onClick={updateNPC}>Update</button>
    </div>
  )
}

export default EditNPCForm;