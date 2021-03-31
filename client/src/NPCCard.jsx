import React from 'react';
import styled from 'styled-components';

const NPCCard = ({ npc }) => {
  return (
    <div>
      <div>Name: {npc.name}</div>
      <div>Race: {npc.race}</div>
      <div>Demeanor: {npc.demeanor}</div>
    </div>
  )
};

export default NPCCard;