import React, { Component } from 'react';
import './App.css';
import Match from "./Match";


class App extends Component {

  constructor() {
    super();
    this.state = { matches: {} };
  }

  componentDidMount = () => {
    fetch('./data/matchen.json')
      .then(r => r.json())
      .then(this.parseMatches);
  }

  parseMatches = data => {
    this.setState({ matches: data });
  }

  handleChangeMatch = (id, match) => {
    const matches = { ...this.state.matches };
    matches[id] = match;
    this.setState({ matches });
  }

  render() {
    const { matches } = this.state
    return (
      <div className="App">
        <h1>Voorspel de scores van de Rode Duivels op het WK!</h1>
          <Match matches={matches} onChangeMatch={this.handleChangeMatch} />
      </div>
    );
  }
}

export default App;
