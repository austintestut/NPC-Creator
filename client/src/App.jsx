import React from 'react';
import styled from 'styled-components';
import AddNewNPCButton from './AddNewNPCButton';
import AddNewNPCForm from './AddNewNPCForm';
import NPCCardContainer from './NPCCardContainer';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h2>NPC Creator</h2>
        <h4><i>Stop naming your NPCs Bob!</i></h4>
        <AddNewNPCButton></AddNewNPCButton>
        <h2>My NPCs</h2>
        <AddNewNPCForm /> {/* added temporarily to view*/}
        <NPCCardContainer />
      </>
    )
  }
}





export default App;