import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name : "Zachary", age : 28},
      {name : "Max", age : 25},
      {name : "Jeni", age : 24}
    ],
    otherState : 'some other value',
    showPersons : false
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

  detelePersonsHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: ! doesShow});

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

    let persons = null;
    
    if( this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click = {() => this.detelePersonsHandler(index)}
              name = {person.name}
              age = {person.age}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>Hello to my money job</p>
        <button 
        style = {style}
        onClick = {this.togglePersonsHandler}>Swtich Name</button>
        {/* not recommended, it will cost the performance */}
        {persons}
      </div>
    );
  }
}

export default App;
