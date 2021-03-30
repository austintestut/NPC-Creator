import React from 'react';
import styled from 'styled-components';
import AddNewNPCButton from './AddNewNPCButton';


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
      </>
    )
  }
}





export default App;