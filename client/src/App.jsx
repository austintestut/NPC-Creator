import React from "react";
import axios from "axios";
import AddNewNPCButton from "./AddNewNPCButton";
import AddNewNPCForm from "./AddNewNPCForm";
import NPCCardContainer from "./NPCCardContainer";
import EditNPCForm from "./EditNPCForm";
import helpers from "./helperData";
import LandingPage from "./LandingPage.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Title from "../../public/images/npc-text.png";
import SearchBar from "./SearchBar.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      npcMasterData: [],
      npcData: [],
      npcCount: 0,
      addFormShowing: false,
      editFormShowing: false,
      editID: null,
      userID: null,
      userName: null,
      authenticated: false,
      sessionlessID: -1,
    };
    this.getAllNPCs = this.getAllNPCs.bind(this);
    this.generateNPC = this.generateNPC.bind(this);
    this.addNPC = this.addNPC.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.updateNPC = this.updateNPC.bind(this);
    this.deleteNPC = this.deleteNPC.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
    this.makeSessionless = this.makeSessionless.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    const { userID } = this.state;
    if (userID !== "sessionless") {
      this.authenticateUser();
    }
  }

  authenticateUser() {
    axios
      .get("/user")
      .then((user) => {
        if (user.data.userName && user.data.id) {
          this.setState(
            {
              userID: user.data.id,
              userName: user.data.userName,
              authenticated: true,
            },
            () => {
              const { userID } = this.state;
              this.getAllNPCs(userID);
            }
          );
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  makeSessionless() {
    this.setState({
      userID: "sessionless",
      userName: "Not signed in",
      authenticated: true,
    });
  }

  getAllNPCs(userID) {
    const { npcData } = this.state;
    if (userID === "sessionless") {
      this.setState({
        npcCount: npcData.length,
      });
    } else {
      axios
        .get(`/npcs/${userID}`)
        .then((data) => {
          const npcs = data.data.reverse();
          this.setState({
            npcData: npcs,
            npcMasterData: npcs,
            npcCount: data.data.length,
          });
        })
        .catch((err) => {
          console.log("err getting NPCs --client", err);
        });
    }
  }

  addNPC() {
    const { userID, npcData, sessionlessID } = this.state;
    let npc = {
      name: document.getElementById("nameInput").value,
      userID: userID,
      race: document.getElementById("raceInput").value,
      demeanor: document.getElementById("demeanorInput").value,
      quality: document.getElementById("qualityInput").value,
      notes: "",
    };
    if (
      document.getElementById("nameInput").value === "" ||
      document.getElementById("raceInput").value === "" ||
      document.getElementById("demeanorInput").value === ""
    ) {
      window.alert("Cannot submit blank NPC!\n(Quality can be blank)");
      return;
    }
    if (userID === "sessionless") {
      npc.id = sessionlessID + 1; // need to update to be unique
      this.setState({
        sessionlessID: sessionlessID + 1,
      });
      let newData = npcData.unshift(npc);
      document.getElementById("nameInput").value = "";
      document.getElementById("raceInput").value = "";
      document.getElementById("demeanorInput").value = "";
      document.getElementById("qualityInput").value = "";
      this.getAllNPCs(userID);
    } else {
      axios
        .post("/npcs", npc)
        .then((res) => {
          document.getElementById("nameInput").value = "";
          document.getElementById("raceInput").value = "";
          document.getElementById("demeanorInput").value = "";
          document.getElementById("qualityInput").value = "";
          this.getAllNPCs(userID);
        })
        .catch((err) => {
          console.log("err saving NPC --client");
        });
    }
  }

  generateNPC() {
    let randomRace = helpers.races[this.randomNumberGenerator(0, 8)];
    let raceAPIParam = helpers.raceAPIStyle[randomRace];
    let randomDemeanor = helpers.demeanors[this.randomNumberGenerator(0, 39)];
    let randomQuality = helpers.qualities[this.randomNumberGenerator(0, 37)];
    axios
      .get(`/name/${raceAPIParam}`)
      .then((name) => {
        document.getElementById("nameInput").value = name.data;
        document.getElementById("raceInput").value = randomRace;
        document.getElementById("demeanorInput").value = randomDemeanor;
        document.getElementById("qualityInput").value = randomQuality;
      })
      .catch((err) => {
        console.log("err generating NPC");
      });
  }

  randomNumberGenerator(min, max) {
    // inclusive of min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  updateNPC() {
    const { userID, npcData, editID } = this.state;
    debugger;
    if (
      document.getElementById("editNameInput").value === "" ||
      document.getElementById("editRaceInput").value === "" ||
      document.getElementById("editDemeanorInput").value === ""
    ) {
      window.alert(
        "Cannot submit blank NPC!\n(Quality and Notes can be blank)"
      );
      return;
    }
    if (userID === "sessionless") {
      let newData = npcData;
      let newNPC;
      let editPosition;
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id === editID) {
          newNPC = {
            userID: "sessionless",
            id: editID,
            name: document.getElementById("editNameInput").value,
            race: document.getElementById("editRaceInput").value,
            demeanor: document.getElementById("editDemeanorInput").value,
            notes: document.getElementById("editNotesInput").value,
            quality: document.getElementById("editQualityInput").value,
          };
          newData[i] = newNPC;
          editPosition = i;
          break;
        }
      }
      newData.splice(editPosition, 1);
      newData.unshift(newNPC);
      this.setState(
        {
          npcData: newData,
          editFormShowing: false,
        },
        () => {
          this.getAllNPCs(userID);
        }
      );
    } else {
      axios
        .put("/npcs", {
          id: editID,
          name: document.getElementById("editNameInput").value,
          race: document.getElementById("editRaceInput").value,
          demeanor: document.getElementById("editDemeanorInput").value,
          notes: document.getElementById("editNotesInput").value,
          quality: document.getElementById("editQualityInput").value,
        })
        .then((response) => {
          this.setState({
            editFormShowing: false,
          });
          this.getAllNPCs(userID);
        });
    }
  }

  deleteNPC() {
    const { userID, editID, npcData } = this.state;
    if (userID === "sessionless") {
      let newData = npcData;
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id === editID) {
          newData.splice(i, 1);
        }
      }
      this.setState({
        npcData: newData,
        editFormShowing: false,
        npcFormName: "",
        npcFormRace: "",
        npcFormDemeanor: "",
      });
    } else {
      axios
        .put("/npcs/delete", {
          id: editID,
        })
        .then((response) => {
          this.setState({
            editFormShowing: false,
            npcFormName: "",
            npcFormRace: "",
            npcFormDemeanor: "",
          });
          this.getAllNPCs(userID);
        });
    }
  }

  showAddForm() {
    this.setState({
      addFormShowing: true,
    });
  }

  showEditForm(id, name, race, demeanor, notes, quality) {
    this.setState(
      {
        editFormShowing: true,
        editID: id,
      },
      () => {
        document.getElementById("editNameInput").value = name;
        document.getElementById("editRaceInput").value = race;
        document.getElementById("editDemeanorInput").value = demeanor;
        document.getElementById("editNotesInput").value = notes;
        document.getElementById("editQualityInput").value = quality;
      }
    );
  }

  cancelEdit() {
    this.setState({
      editFormShowing: false,
      editID: null,
      npcFormName: "",
      npcFormRace: "",
      npcFormDemeanor: "",
    });
  }

  cancelAdd() {
    this.setState({
      addFormShowing: false,
      npcFormName: "",
      npcFormRace: "",
      npcFormDemeanor: "",
    });
  }

  updateSearch() {
    const searchCharacters = (characters, query) => {
      if (!query) {
        const { npcMasterData } = this.state;
        this.setState({
          npcData: npcMasterData,
        });
        return false;
      }
      return characters.filter((char) => {
        const name = char.name.toLowerCase();
        return name.includes(query.toLowerCase());
      });
    };

    var people = searchCharacters(
      this.state.npcMasterData,
      document.getElementById("searchValue").value
    );
    if (people) {
      people = people.slice().sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        return -1;
      });

      this.setState({
        npcData: people,
      });
    }
  }

  render() {
    const { authenticated, userName, npcCount, editFormShowing, npcData } =
      this.state;
    return (
      <div>
        {!authenticated && (
          <LandingPage
            authenticateUser={this.authenticateUser}
            makeSessionless={this.makeSessionless}
          />
        )}
        {authenticated && (
          <>
            <Header userName={userName} npcCount={npcCount} />
            <div className="app">
              <AddNewNPCButton showAddForm={this.showAddForm} />
              {this.state.addFormShowing && (
                <AddNewNPCForm
                  generateNPC={this.generateNPC}
                  addNPC={this.addNPC}
                  cancelAdd={this.cancelAdd}
                />
              )}
              <SearchBar updateSearch={this.updateSearch} />
              <NPCCardContainer
                npcData={npcData}
                showEditForm={this.showEditForm}
              />
              {editFormShowing && (
                <EditNPCForm
                  cancelEdit={this.cancelEdit}
                  updateNPC={this.updateNPC}
                  deleteNPC={this.deleteNPC}
                />
              )}
            </div>
          </>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
