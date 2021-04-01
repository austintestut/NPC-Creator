import React from 'react';
import styled from 'styled-components';

const NPCCard = ({ npc, showEditForm }) => {
  return (
    <StyledCard onClick={() => showEditForm(npc.id, npc.name, npc.race, npc.demeanor, npc.notes, npc.quality)}>
      <StyledTitle>Name: </StyledTitle>
      <div>{npc.name}</div>
      <br />
      <StyledTitle>Race: </StyledTitle>
      <div>{npc.race}</div>
      <br />
      <StyledTitle>Demeanor: </StyledTitle>
      <div>{npc.demeanor}</div>
      <br />
      <StyledTitle>Quality: </StyledTitle>
      <div>{npc.quality}</div>
      <br />
      <StyledTitle>Notes: </StyledTitle>
      <div>{npc.notes}</div>
    </StyledCard>
  )
};

export default NPCCard;

const StyledCard = styled.div`
  border: solid;
  border-width: 2px;
  border-radius: 5px;
  height: 300px;
  width: 300px;
  margin: 10px;
  padding: 5px;
`;
const StyledTitle = styled.div`
font-weight: 900;
`;