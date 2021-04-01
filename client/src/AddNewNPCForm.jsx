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
        <h3> ADD NEW NPC </h3>
        <div>
          <button onClick={generateNPC}>Generate Random NPC</button>
        </div>
        <StyledInnerTextboxes>
          <label>
            Name:<br />
            <StyledInput type="text" id="nameInput" onChange={(e) => updateNameForm(e)} />
          </label>
          {'  '}
          <label>
            Race:<br />
            <StyledInput type="text" id="raceInput" onChange={(e) => updateRaceForm(e)} />
          </label>
          {'  '}
          <label>
            Demeanor:<br />
            <StyledInput type="text" id="demeanorInput" onChange={(e) => updateDemeanorForm(e)} />
          </label>
          {'  '}
          <label>
            Quality:<br />
            <StyledInput type="text" id="qualityInput" onChange={(e) => updateQualityForm(e)} />
          </label>
        </StyledInnerTextboxes>
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

const StyledInnerTextboxes = styled.div`
display: grid;
grid-template-rows:  1fr 1fr 1fr 1fr auto;
`;

const StyledInput = styled.input`
height: 25px;
width: 400px;
font-size: 15px;
font-family: Calibri(body);
`;