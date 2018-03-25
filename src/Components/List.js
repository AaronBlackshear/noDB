//List of todo 

import React, { Component } from 'react';
import Todo from './ToDo';

class List extends Component {
  constructor(){
    super();

    this.state = {
        input: 'brush teeth'
    }





  }


  render() {
    // console.log(this.props)
    return (

      <div>  {this.props.title}   </div>
      //Im not sure what I want to return or how to return exactly
    );
  }
}

export default List;


