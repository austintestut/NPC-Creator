import React from 'react';
import styled from 'styled-components';
import NPCCard from './NPCCard';

const NPCCardContainer = ({ npcData }) => {
  // for each NPC in DB:
  return (
npcData.map((npc) => {
  return (
      <NPCCard npc={npc}/>
  )
})
  )
};

export default NPCCardContainer;