import React from 'react';
import xButton from '../../public/images/xicon.png';

const AddNewNPCForm = ({
  generateNPC,
  addNPC,
  cancelAdd
}) => {
  return (
    <div className="form-container">
      <div className="styled-form">
        <img className="form-x" src={xButton} onClick={cancelAdd}/>
        <h3> ADD NEW NPC </h3>
        <div>
          <button id="gen-npc-btn" onClick={generateNPC}>Generate Random NPC</button>
        </div>
        <div className="form-boxes">
          <label>
            Name:<br />
            <input className="form-input" type="text" id="nameInput" />
          </label>
          {'  '}
          <label>
            Race:<br />
            <input className="form-input" type="text" id="raceInput" />
          </label>
          {'  '}
          <label>
            Demeanor:<br />
            <input className="form-input" type="text" id="demeanorInput" />
          </label>
          {'  '}
          <label>
            Quality:<br />
            <input className="form-input" type="text" id="qualityInput" />
          </label>
        </div>
        <div>
          <button className="cancel-npc-btn" onClick={cancelAdd}>Cancel</button>
          {'  '}
          <button className="save-npc-btn" onClick={addNPC}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddNewNPCForm;

