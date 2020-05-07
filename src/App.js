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

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name : 'Zachary', age : 28},
        {name : event.target.value, age : 25},
        {name : "Jeni", age : 25}
      ]
    })
  }

  render() {
    const style = {
        backgroundColor : 'white',
        // camelCase, attributes should be strings
        font : 'inherit',
        border : '1px solid blue',
        padding : '8px',
        cursor : 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>Hello to my money job</p>
        <button 
        style = {style}
        onClick = {() => this.switchNameHandlers("ZacharyHe!!")}>Swtich Name</button>
        {/* not recommended, it will cost the performance */}
        <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age}/>
        <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click= {this.switchNameHandlers.bind(this, 'Zachary!')}
        changed = {this.nameChangeHandler}>My hobby: Racing</Person>
        {/* recommended */}
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
