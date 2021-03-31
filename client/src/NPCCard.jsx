import React from 'react';
import styled from 'styled-components';

const NPCCard = ({ npc, showEditForm }) => {
  return (
    <StyledCard onClick={() => showEditForm(npc.id, npc.name, npc.race, npc.demeanor)}>
      <StyledTitle>Name: </StyledTitle>
      <div>{npc.name}</div>
      <br />
      <StyledTitle>Race: </StyledTitle>
      <div>{npc.race}</div>
      <br />
      <StyledTitle>Demeanor: </StyledTitle>
      <div>{npc.demeanor}</div>
      <br />
    </StyledCard>
  )
};

export default NPCCard;

const StyledCard = styled.div`
  border: solid;
  border-width: 2px;
  border-radius: 5px;
  height: 250px;
  width: 230px;
  margin: 10px;
`;
const StyledTitle = styled.div`
font-weight: 900;
`;