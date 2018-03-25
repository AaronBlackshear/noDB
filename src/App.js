//Import your components!
import React, { Component } from 'react';
import './App.css';
import List from './Components/List';
import Header from './Components/Header';
import axios from 'axios';
//The main functionality with reamin here. Passes ?data? to the other components

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      morning: "",
      night: [],
      anytime: [],
      lists: []
    }
//Under the ( initialized state ) , inside the ( constructor ) make sure to bind your (   ) 
// this.newItem = this.newItem.bind(this);
// this.editItem = this.editItem.bind(this);
// this.deleteItem = this.deleteItem.bind(this);

  }
  componentDidMount() {
    axios.get(`/api/getLists`).then(res => {
      console.log(res)
      res.data.map(e => {
        if(e.list === "Morning"){
          this.setState({
            morning: e.text
          })}
          if(e.list === "Night"){
            this.setState({
              night: e.text
            })}
            if(e.list === "Anytime"){
              this.setState({
                anytime: e.text
              })
            } 
      })

      this.setState({
        lists : res.data
      });
    })
    .catch(console.log)
    // Ask our server for the todos array
    // filter morning todos - var morn= \todos.filter(e => e.list === "Morning")
    // filter night todos
    // filter anytime todos
    // setState({ morning: morn, night: night, anytime: any})
    //complete?
  }




  render() {
    // console.log(this.state);
    
    return (
      <div className="App">

      <List title="Morning" todos= {this.state.morning}/>
      <List title="Night" todos= {this.state.night}/>
      <List title="Anytime" todos= {this.state.anytime}/>
      </div>
    );
  }
}

export default App;
