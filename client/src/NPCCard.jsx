import React from 'react';

const NPCCard = ({ npc, showEditForm }) => {
  return (
    <div className="card" onClick={() => showEditForm(npc.id, npc.name, npc.race, npc.demeanor, npc.notes, npc.quality)}>
      <div className="card-title">Name: </div>
      <div>{npc.name}</div>
      <br />
      <div className="card-title">Race: </div>
      <div>{npc.race}</div>
      <br />
      <div className="card-title">Demeanor: </div>
      <div>{npc.demeanor}</div>
      <br />
      <div className="card-title">Quality: </div>
      <div>{npc.quality}</div>
      <br />
      <div className="card-title">Notes: </div>
      <div>{npc.notes}</div>
    </div>
  )
};

export default NPCCard;