import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


const StyledButton = styled.button`
      background-color : ${props => props.alt ? 'red' : 'green'};
      color: white;
      font : inherit;
      border : 1px solid blue;
      padding : 8px;
      cursor : pointer;
      &:hover {
        background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }
`;
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
            return <ErrorBoundary key = {person.id}>
              <Person
              click = {() => this.detelePersonsHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangeHandler(event, person.id)}/>
              </ErrorBoundary>
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p className = {classes.join(' ')}>Hello to my money job</p>
        <StyledButton
          alt = {this.state.showPersons}
          onClick = {this.togglePersonsHandler}>
          Toggle persons
        </StyledButton>
        {/* not recommended, it will cost the performance */}
        {persons}
      </div>
    );
  }
}

export default App;
