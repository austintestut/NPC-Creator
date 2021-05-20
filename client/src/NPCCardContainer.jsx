import React from 'react';
import NPCCard from './NPCCard';

const NPCCardContainer = ({ npcData, showEditForm }) => {
  return (
    <div id="card-container">
    {npcData.reverse().map((npc) => {
      return <NPCCard key={npc.name} npc={npc} showEditForm={showEditForm}/>
    })}
    </div>
  )};

export default NPCCardContainer;
