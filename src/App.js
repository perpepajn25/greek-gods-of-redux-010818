import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GodsContainer from './components/GodsContainer'
import GodForm from './components/GodForm'

class App extends Component {

  
  render() {
    console.log(GodsContainer)
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://cdn0.iconfinder.com/data/icons/heaven/500/olympus-512.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">Greek Gods of Redux</h1>
        </header>
        <GodForm />
        <GodsContainer />
      </div>
    );
  }
}

export default App;
