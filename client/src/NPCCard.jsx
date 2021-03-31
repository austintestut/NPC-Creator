import React from 'react';
import styled from 'styled-components';

const NPCCard = ({ npc, showEditForm }) => {
  return (
    <div onClick={() => showEditForm(npc.id, npc.name, npc.race, npc.demeanor)}>
      <div>Name: {npc.name}</div>
      <div>Race: {npc.race}</div>
      <div>Demeanor: {npc.demeanor}</div>
    </div>
  )
};

export default NPCCard;