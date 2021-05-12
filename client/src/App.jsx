import React from 'react';
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
      addFormShowing: false,
      editFormShowing: false,
      editID: null,
      userID: null,
      userName: null,
    }
    this.getAllNPCs = this.getAllNPCs.bind(this);
    this.generateNPC = this.generateNPC.bind(this);
    this.addNPC = this.addNPC.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.updateNPC = this.updateNPC.bind(this);
    this.deleteNPC = this.deleteNPC.bind(this);
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
      document.getElementById('nameInput').value === '' ||
      document.getElementById('raceInput').value === '' ||
      document.getElementById('demeanorInput').value === ''
    ) {
      window.alert('Cannot submit blank NPC!\n(Quality can be blank)');
      return;
    }
    axios.post('/npcs', {
      name: document.getElementById('nameInput').value,
      race: document.getElementById('raceInput').value,
      demeanor: document.getElementById('demeanorInput').value,
      quality: document.getElementById('qualityInput').value
    })
      .then((res) => {
        document.getElementById('nameInput').value = '';
        document.getElementById('raceInput').value = '';
        document.getElementById('demeanorInput').value = '';
        document.getElementById('qualityInput').value = '';
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
    let randomQuality = helpers.qualities[this.randomNumberGenerator(0, 37)];
    axios.get(`/name/${raceAPIParam}`)
      .then((name) => {
        document.getElementById('nameInput').value = name.data;
        document.getElementById('raceInput').value = randomRace;
        document.getElementById('demeanorInput').value = randomDemeanor;
        document.getElementById('qualityInput').value = randomQuality;
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
      document.getElementById('editNameInput').value === '' ||
      document.getElementById('editRaceInput').value === '' ||
      document.getElementById('editDemeanorInput').value === ''
    ) {
      window.alert('Cannot submit blank NPC!\n(Quality and Notes can be blank)');
      return;
    }
    axios.put('/npcs', {
      id: this.state.editID,
      name: document.getElementById('editNameInput').value,
      race: document.getElementById('editRaceInput').value,
      demeanor: document.getElementById('editDemeanorInput').value,
      notes: document.getElementById('editNotesInput').value,
      quality: document.getElementById('editQualityInput').value
    })
    .then((response) => {
      this.setState({
        editFormShowing: false,
      });
      this.getAllNPCs();
    })
  }

  deleteNPC() {
    axios.put('/npcs/delete', {
      id: this.state.editID
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

  showAddForm() {
    this.setState({
      addFormShowing: true
    });
  }

  showEditForm(id, name, race, demeanor, notes, quality) {
    this.setState({
      editFormShowing: true,
      editID: id
    }, () => {
      document.getElementById('editNameInput').value = name;
      document.getElementById('editRaceInput').value = race;
      document.getElementById('editDemeanorInput').value = demeanor;
      document.getElementById('editNotesInput').value = notes;
      document.getElementById('editQualityInput').value = quality;
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
          addNPC={this.addNPC}
          cancelAdd={this.cancelAdd}
        />}
        <h2>My NPCs</h2>
        <NPCCardContainer
          npcData={this.state.npcData}
          showEditForm={this.showEditForm}
        />
        {this.state.editFormShowing && <EditNPCForm
          cancelEdit={this.cancelEdit}
          updateNPC={this.updateNPC}
          deleteNPC={this.deleteNPC}
        />}
      </>
    )
  }
}

export default App;