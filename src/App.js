import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'sdad', name : "Zachary", age : 28},
      {id:'fsfg', name : "Max", age : 25},
      {id:'wers', name : "Jeni", age : 24}
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons]; //persons should be array, use [],not {}
    persons[personIndex] = person;

    this.setState({ persons : persons });
  }

  detelePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); always copy the state when mutate them
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
    // console.log(persons);

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: ! doesShow});

  }

  render() {
    const style = {
        backgroundColor : 'green',
        // camelCase, attributes should be strings
        color: 'white',
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
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
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
