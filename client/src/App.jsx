import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddNewNPCButton from './AddNewNPCButton';
import AddNewNPCForm from './AddNewNPCForm';
import NPCCardContainer from './NPCCardContainer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      npcData: [],
    }
    this.getAllNPCs = this.getAllNPCs.bind(this);
  }

  componentDidMount() {
    this.getAllNPCs();
  }

  getAllNPCs() {
    axios.get('/npcs')
      .then((data) => {
        this.setState({
          npcData: data.data
        });
      })
      .catch((err) => {
        console.log('err getting NPCs --client');
      })
  }

  render() {
    return (
      <>
        <h2>NPC Creator</h2>
        <h4><i>Stop naming your NPCs Bob!</i></h4>
        <AddNewNPCButton></AddNewNPCButton>
        <h2>My NPCs</h2>
        <AddNewNPCForm /> {/* added temporarily to view*/}
        <NPCCardContainer npcData={this.state.npcData}/>
      </>
    )
  }
}





export default App;