import React from 'react';
import styled from 'styled-components';
import xButton from '../../public/images/xicon.png';

const AddNewNPCForm = ({
  generateNPC,
  addNPC,
  cancelAdd
}) => {
  return (
    <StyledFormContainer>
      <StyledForm>
        <StyledX src={xButton} />
        <h3> ADD NEW NPC </h3>
        <div>
          <button onClick={generateNPC}>Generate Random NPC</button>
        </div>
        <StyledInnerTextboxes>
          <label>
            Name:<br />
            <StyledInput type="text" id="nameInput" />
          </label>
          {'  '}
          <label>
            Race:<br />
            <StyledInput type="text" id="raceInput" />
          </label>
          {'  '}
          <label>
            Demeanor:<br />
            <StyledInput type="text" id="demeanorInput" />
          </label>
          {'  '}
          <label>
            Quality:<br />
            <StyledInput type="text" id="qualityInput" />
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

const StyledX = styled.img`
position: absolute;
top: 2%;
right: 2%;
width: 50px;
height: 50px;
`;