import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddNewNPCButton from './AddNewNPCButton';
import AddNewNPCForm from './AddNewNPCForm';
import NPCCardContainer from './NPCCardContainer';
import EditNPCForm from './EditNPCForm';
import helpers from './helperData';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      npcData: [],
      npcFormName: '',
      npcFormRace: '',
      npcFormDemeanor: '',
      addFormShowing: false,
      editFormShowing: false,
      editID: null
    }
    this.getAllNPCs = this.getAllNPCs.bind(this);
    this.generateNPC = this.generateNPC.bind(this);
    this.updateNameForm = this.updateNameForm.bind(this);
    this.updateRaceForm = this.updateRaceForm.bind(this);
    this.updateDemeanorForm = this.updateDemeanorForm.bind(this);
    this.addNPC = this.addNPC.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.updateNPC = this.updateNPC.bind(this);
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

  addNPC() {
    if (
      this.state.npcFormName === '' ||
      this.state.npcFormRace === '' ||
      this.state.npcFormDemeanor === ''
    ) {
      window.alert('Cannot submit blank NPC!\nThat defeats the purpose of this app!');
      return;
    }

    axios.post('/npcs', {
      name: this.state.npcFormName,
      race: this.state.npcFormRace,
      demeanor: this.state.npcFormDemeanor
    })
      .then((res) => {
        document.getElementById('nameInput').value = '';
        document.getElementById('raceInput').value = '';
        document.getElementById('demeanorInput').value = '';
        this.setState({
          npcFormName: '',
          npcFormRace: '',
          npcFormDemeanor: ''
        });
        this.getAllNPCs();
      })
      .catch((err) => {
        console.log('err saving NPC --client');
      })
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
        this.setState({
          npcFormName: name.data,
          npcFormRace: randomRace,
          npcFormDemeanor: randomDemeanor
        })
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

  updateNPC() {
    if (
      this.state.npcFormName === '' ||
      this.state.npcFormRace === '' ||
      this.state.npcFormDemeanor === ''
    ) {
      window.alert('Cannot submit blank NPC!\nThat defeats the purpose of this app!');
      return;
    }

    axios.put('/npcs', {
      id: this.state.editID,
      name: this.state.npcFormName,
      race: this.state.npcFormRace,
      demeanor: this.state.npcFormDemeanor
    })
    .then((response) => {
      this.setState({
        editFormShowing: false,
        npcFormName: '',
        npcFormRace: '',
        npcFormDemeanor: ''
      });
      this.getAllNPCs();
    })
  }

  updateNameForm(e) {
    this.setState({
      npcFormName: e.target.value
    });
  }

  updateRaceForm(e) {
    this.setState({
      npcFormRace: e.target.value
    });
  }

  updateDemeanorForm(e) {
    console.log('hello from demeanor')
    this.setState({
      npcFormDemeanor: e.target.value
    });
  }

  showAddForm() {
    this.setState({
      addFormShowing: true
    });
  }

  showEditForm(id, name, race, demeanor) {
    this.setState({
      editFormShowing: true,
      editID: id,
      npcFormName: name,
      npcFormRace: race,
      npcFormDemeanor: demeanor
    }, () => {
      document.getElementById('editNameInput').value = name;
      document.getElementById('editRaceInput').value = race;
      document.getElementById('editDemeanorInput').value = demeanor;
    })
  }

  cancelEdit() {
    this.setState({
      editFormShowing: false,
      editID: null,
      npcFormName: '',
      npcFormRace: '',
      npcFormDemeanor: ''
    })
  }

  cancelAdd() {
    this.setState({
      addFormShowing: false,
      npcFormName: '',
      npcFormRace: '',
      npcFormDemeanor: ''
    })
  }

  render() {
    return (
      <>
        <h2>NPC Creator</h2>
        <h4><i>Stop naming your NPCs Bob!</i></h4>
        <AddNewNPCButton
          showAddForm={this.showAddForm}
        />
        {this.state.addFormShowing && <AddNewNPCForm
          generateNPC={this.generateNPC}
          updateNameForm={this.updateNameForm}
          updateRaceForm={this.updateRaceForm}
          updateDemeanorForm={this.updateDemeanorForm}
          addNPC={this.addNPC}
          cancelAdd={this.cancelAdd}
        />}
        <h2>My NPCs</h2>
        <NPCCardContainer
          npcData={this.state.npcData}
          showEditForm={this.showEditForm}
        />
        {this.state.editFormShowing && <EditNPCForm
          updateNameForm={this.updateNameForm}
          updateRaceForm={this.updateRaceForm}
          updateDemeanorForm={this.updateDemeanorForm}
          cancelEdit={this.cancelEdit}
          updateNPC={this.updateNPC}
        />}
      </>
    )
  }
}

export default App;