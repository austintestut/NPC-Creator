import React from 'react';
import styled from 'styled-components';

const EditNPCForm = ({
  updateNameForm,
  updateRaceForm,
  updateDemeanorForm
}) => {
  return (
    <div>
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
      <button>Update</button>
    </div>
  )
}

export default EditNPCForm;