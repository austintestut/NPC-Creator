import React from 'react';
import styled from 'styled-components';
import NPCCard from './NPCCard';

const NPCCardContainer = ({ npcData, toggleEditForm }) => {
  // for each NPC in DB:
  return (
    npcData.map((npc) => {
      return <NPCCard key={npc.name} npc={npc} toggleEditForm={toggleEditForm}/>
    })
  )};

export default NPCCardContainer;