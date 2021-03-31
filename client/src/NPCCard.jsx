import React from 'react';
import styled from 'styled-components';

const NPCCard = ({ npc, toggleEditForm }) => {
  return (
    <div onClick={toggleEditForm}>
      <div>Name: {npc.name}</div>
      <div>Race: {npc.race}</div>
      <div>Demeanor: {npc.demeanor}</div>
    </div>
  )
};

export default NPCCard;