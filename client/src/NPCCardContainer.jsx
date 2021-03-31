import React from 'react';
import styled from 'styled-components';
import NPCCard from './NPCCard';

const NPCCardContainer = ({ npcData, showEditForm }) => {
  // for each NPC in DB:
  return (
    npcData.map((npc) => {
      return <NPCCard key={npc.name} npc={npc} showEditForm={showEditForm}/>
    })
  )};

export default NPCCardContainer;