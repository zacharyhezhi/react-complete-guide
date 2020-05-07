import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name : "Zachary", age : 28},
      {name : "Max", age : 25},
      {name : "Jeni", age : 24}
    ]
  }

  switchNameHandlers = (newName) => {
    // console.log('Clicked');
    this.setState( {
      persons: [
        {name : newName, age : 28},
        {name : "Max", age : 25},
        {name : "Jeni", age : 25}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>Hello to my money job</p>
        <button onClick = {() => this.switchNameHandlers("ZacharyHe!!")}>Swtich Name</button>
        <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age}/>
        <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click= {this.switchNameHandlers.bind(this, 'Zachary!')}>My hobby: Racing</Person>
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
