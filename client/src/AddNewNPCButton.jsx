import React from 'react';
import styled from 'styled-components';

const AddNewNPCButton = ({ showAddForm }) => {
  return (
    <button onClick={showAddForm}>Add New NPC!</button>
  )
}

export default AddNewNPCButton;