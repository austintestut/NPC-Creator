import React from 'react';
import styled from 'styled-components';

const EditNPCForm = ({
  updateNameForm,
  updateRaceForm,
  updateDemeanorForm,
  cancelEdit,
  updateNPC,
  deleteNPC
}) => {
  return (
    <StyledFormContainer>
      <StyledForm>
        <div>
          <button onClick={deleteNPC}>Delete</button>
        </div>
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
        </div>
        <div>
          <button onClick={cancelEdit}>Cancel</button>
          <button onClick={updateNPC}>Update</button>
        </div>
      </StyledForm>
    </StyledFormContainer>
  )
}

export default EditNPCForm;

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