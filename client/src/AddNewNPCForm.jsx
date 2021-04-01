import React from 'react';
import styled from 'styled-components';

const AddNewNPCForm = ({
  generateNPC,
  updateNameForm,
  updateRaceForm,
  updateDemeanorForm,
  updateQualityForm,
  addNPC,
  cancelAdd,
}) => {
  return (
    <StyledFormContainer>
      <StyledForm>
        <div>
          <button onClick={generateNPC}>Generate Random NPC</button>
        </div>
        <div>
          <label>
            Name:{' '}
      <StyledInput type="text" id="nameInput" onChange={(e) => updateNameForm(e)} />
          </label>
          {'  '}
          <label>
            Race:{' '}
      <StyledInput type="text" id="raceInput" onChange={(e) => updateRaceForm(e)} />
          </label>
          {'  '}
          <label>
            Demeanor:{' '}
      <StyledInput type="text" id="demeanorInput" onChange={(e) => updateDemeanorForm(e)} />
          </label>
          {'  '}
          <label>
            Quality:{' '}
      <StyledInput type="text" id="qualityInput" onChange={(e) => updateQualityForm(e)} />
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

const StyledInput = styled.input`
height: auto;
font-size: 15px;
`;