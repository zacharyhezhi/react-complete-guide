import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>Hello to my money job</p>
        <Person name = "Zachary" age = "28"/>
        <Person name = "Max" age = "25">My hobby: Racing</Person>
        <Person name = "Jeni" age = "24"/>
      </div>
    );
  }
}

export default App;
