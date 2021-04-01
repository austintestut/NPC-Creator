import React from 'react';
import styled from 'styled-components';

const EditNPCForm = ({
  updateNameForm,
  updateRaceForm,
  updateDemeanorForm,
  cancelEdit,
  updateNPC,
  deleteNPC,
  updateNotesForm
}) => {
  return (
    <StyledFormContainer>
      <StyledForm>
        <div>
          <button onClick={deleteNPC}>Delete</button>
        </div>
        <StyledInnerTextboxes>
          <label>
            Name:<br />
            <StyledInput type="text" id="editNameInput" onChange={(e) => updateNameForm(e)} />
          </label>
          {'  '}
          <label>
            Race:<br />
            <StyledInput type="text" id="editRaceInput" onChange={(e) => updateRaceForm(e)} />
          </label>
          {'  '}
          <label>
            Demeanor:<br />
            <StyledInput type="text" id="editDemeanorInput" onChange={(e) => updateDemeanorForm(e)} />
          </label>
          {'  '}
          <label>
            Quality:<br />
            <StyledInput type="text" id="editQualityInput" onChange={(e) => updateDemeanorForm(e)} />
          </label>
          {'  '}
          <label>
            Notes:<br />
            <StyledNotes type="text" id="editNotesInput" onChange={(e) => updateNotesForm(e)} />
          </label>

        </StyledInnerTextboxes>
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

const StyledNotes = styled.textarea`
font-size: 15px;
width: 400px;
`;