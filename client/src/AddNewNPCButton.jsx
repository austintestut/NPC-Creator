import React from 'react';
import styled from 'styled-components';

const AddNewNPCButton = ({ toggleAddForm }) => {
  return (
    <button onClick={toggleAddForm}>Add New NPC!</button>
  )
}

export default AddNewNPCButton;