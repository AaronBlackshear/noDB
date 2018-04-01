//Import your components!
import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Morning from './Components/Morning';
import Night from './Components/Night';
import Anytime from './Components/Anytime';
import Header from './Components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      morning: [],
      night: [],
      anytime: [],
      lists:[]
    }
  // Under the initial state  , inside the  constructor make sure to bind your class methods
    this.updateMorning = this.updateMorning.bind(this)
    this.updateNight = this.updateNight.bind(this)
    this.updateAnytime = this.updateAnytime.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.editItem = this.editItem.bind(this)

  }
  componentDidMount() {
    // console.log("mount")
    axios
      .get(`/api/getLists`)
      .then(res => {
        // console.log("response", res)
        let newMorning = this.state.morning;
        let newNight = this.state.night;
        let newAnytime = this.state.anytime;
        
        res.data.map(e => {

            if (e.list === "Morning") {
              newMorning.push(e);
            }
            if (e.list === "Night") {
              newNight.push(e);
            }
            if (e.list === "Anytime") {
              newAnytime.push(e);
            }
          })

        this.setState({lists: res.data, morning: newMorning, night: newNight, anytime: newAnytime});
      })
      .catch(console.log)
  }
  // Ask our server for the todos array filter morning todos - var morn=
  // todos.filter(e => e.list === "Morning") filter night todos filter anytime
  // todos setState({ morning: morn, night: night, anytime: any}) complete?
//////////////////////////////



  updateMorning(value) {
    axios.post('/api/newItem', { text: value , list: "Morning"}).then(res => {
      let newMorning = this.state.morning;
      this.setState({morning: [...newMorning, res.data]})
    })
// .catch(console.log)
  }

  updateNight(value) {
    axios.post('/api/newItem', { text: value , list: "Night"}).then(res => {
      let newNight = this.state.night;
      this.setState({night: [...newNight, res.data]})
    })
// .catch(console.log)
  }

  updateAnytime(value) {
    axios.post('/api/newItem', { text: value , list: "Anytime"}).then(res => {
      let newAnytime = this.state.anytime;
      this.setState({anytime: [...newAnytime, res.data]})
    })
// .catch(console.log)
  }
//////////////////////////////////////////////////////////////////////////////////////////
  editItem(id, text) {
    let newMorning = [];
        let newNight = [];
        let newAnytime = [];


    axios.put(`/api/editItem/${id}`, { text : text } ).then(res => {
      console.log(res.data)
        // this.setState({lists: res.data})
        
        res.data.map(e => {

            if (e.list === "Morning") {
              newMorning.push(e);
              this.setState({morning:newMorning})
            }
            if (e.list === "Night") {
              newNight.push(e);
              this.setState({night:newNight})
            }
            if (e.list === "Anytime") {
              newAnytime.push(e);
              this.setState({anytime:newAnytime})
            }
          })

       
    })
    // this.setState({ morning: newMorning, night: newNight, anytime: newAnytime});
    }


//////////////////////////////////////////////////////////////////////////////////////////
  deleteItem(id) {
    // console.log(id)
    axios.delete(`/api/deleteItem/${id}`)
      .then(res => {
        console.log("response", res)
        console.log(this.state, "this.state")

        let newMorning = [];
        let newNight = [];
        let newAnytime = [];
        
        res.data.map(e => {

            if (e.list === "Morning") {
              newMorning.push(e);
            }
            if (e.list === "Night") {
              newNight.push(e);
            }
            if (e.list === "Anytime") {
              newAnytime.push(e);
            }
          })

        this.setState({lists: res.data, morning: newMorning, night: newNight, anytime: newAnytime});
      })
  }


  render() {
console.log(this.state);

    return (
      <div className="App">
        <Morning
          title="Morning"
          morningtodos={this.state.morning}
          updateMorning={this.updateMorning}
          editItem= {this.editItem}
          deleteItem={this.deleteItem}/>
        <Night
          title="Night"
          nighttodos={this.state.night}
          updateNight={this.updateNight}
          editItem= {this.editItem}
          deleteItem={this.deleteItem}/>
        <Anytime
          title="Anytime"
          anytimetodos={this.state.anytime}
          updateAnytime={this.updateAnytime}
          editItem= {this.editItem}
          deleteItem={this.deleteItem}/>
          <Header />
          <Header />
          <Header />
      </div>
    );
  }
}

export default App;
