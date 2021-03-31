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
    <StyledFormContainer>
      <StyledForm>
        <div>
          <button onClick={generateNPC}>Generate Random NPC</button>
        </div>
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
        </div>
        <div>
          <button onClick={cancelAdd}>Cancel</button>
          {'  '}
          <button onClick={addNPC}>Save</button>
        </div>
      </StyledForm>
    </StyledFormContainer>
  )
}

export default AddNewNPCForm;

const StyledFormContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
`;

const StyledForm = styled.div`
  position: relative;
  border: solid;
  border-width: 2px;
  border-radius: 5px;
  background-color: white;
  width: auto;
  padding: 5%;
  margin: 10% 10% 10% 10%;
  display: grid;
  grid-template-rows: auto auto auto;
  font-size: 25px;
`;