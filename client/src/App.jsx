import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddNewNPCButton from './AddNewNPCButton';
import AddNewNPCForm from './AddNewNPCForm';
import NPCCardContainer from './NPCCardContainer';
import helpers from './helperData';


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
    console.log(helpers);
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

  addNPC() {

  }

  generateNPC() {
    let randomRace = helpers.races[this.randomNumberGenerator(0, 8)];
    let raceAPIParam = helpers.raceAPIStyle[randomRace];
    let randomDemeanor = helpers.demeanors[this.randomNumberGenerator(0, 39)];

    axios.get(`/name/${raceAPIParam}`)
    .then((name) => {
      document.getElementById('nameInput').value = name.data;
      document.getElementById('raceInput').value = randomRace;
      document.getElementById('demeanorInput').value = randomDemeanor;
    })
    .catch((err) => {
      console.log('err generating NPC');
    })
  }

  randomNumberGenerator(min, max) {
    // inclusive of min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
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