import React from 'react';
import xButton from '../../public/images/xicon.png';

const EditNPCForm = ({
  cancelEdit,
  updateNPC,
  deleteNPC
}) => {
  return (
    <div className="form-container">
      <div className="styled-form">
      <img className="form-x" src={xButton} onClick={cancelEdit}/>
      <h3> EDIT NPC </h3>
        <div>
          <button onClick={deleteNPC}>Delete</button>
        </div>
        <div className="form-boxes">
          <label>
            Name:<br />
            <input className="form-input" type="text" id="editNameInput" />
          </label>
          {'  '}
          <label>
            Race:<br />
            <input className="form-input" type="text" id="editRaceInput" />
          </label>
          {'  '}
          <label>
            Demeanor:<br />
            <input className="form-input" type="text" id="editDemeanorInput" />
          </label>
          {'  '}
          <label>
            Quality:<br />
            <input className="form-input" type="text" id="editQualityInput" />
          </label>
          {'  '}
          <label>
            Notes:<br />
            <textarea className="form-input" type="text" id="editNotesInput" />
          </label>

        </div>
        <div>
          <button onClick={cancelEdit}>Cancel</button>
          {'  '}
          <button onClick={updateNPC}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default EditNPCForm;