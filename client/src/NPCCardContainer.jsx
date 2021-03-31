import React from 'react';
import styled from 'styled-components';
import NPCCard from './NPCCard';

const NPCCardContainer = ({ npcData, showEditForm }) => {
  return (
    <StyledCardContainer>
    {npcData.map((npc) => {
      return <NPCCard key={npc.name} npc={npc} showEditForm={showEditForm}/>
    })}
    </StyledCardContainer>
  )};

export default NPCCardContainer;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 5% 0 5%;
`;