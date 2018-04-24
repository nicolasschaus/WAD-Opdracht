import React, { Component } from 'react';
import {observer} from "mobx-react"
import '../App.css';
import Form from '../components/Form';
import Bets from '../components/Bets';
import EditMatch from '../components/EditMatch';
import NotFound from '../components/NotFound';


import { Link, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => (
            <div>
              <h1>Voorspel de scores van de Rode Duivels op het WK!</h1>
              <Form store={store} />
              <Bets store={store} />
            </div>
          )} />
          <Route path="/match/test" exact render={() => (
            <div>
        {store.matches.map(match => <EditMatch key={match.id} match={match} />)}
            </div>
          )} />
          <Route path="/match/:id"  render={({correct}) => {
            const id = correct.params.id;
            console.log(id);
            if (id){
                <div>
                  <h1>Pas scores aan!</h1>
                  return {store.matches.map(match => <EditMatch key={match.id} match={match} />)}
                </div>
            }
            return <NotFound />
          }} />

        }} />
        <Route component={NotFound} />

        </Switch>
      </div>
    );
  }
}

export default observer(App);



/*class App extends Component {

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

  handleAddTopic = (id, match) => {
    console.log(match);
    const test = new Match(match);
    const testen = {...this.state.matches}
    testen[id] = test;
    testen[Date.now()] = test;
    this.setState({testen});
    console.log({testen});
  }

  render() {
    const { matches } = this.state
    return (
      <div className="App">
        <h1>Voorspel de scores van de Rode Duivels op het WK!</h1>
          <Matches matches={matches} onChangeMatch={this.handleChangeMatch} />
          <Matches matches={matches} onChangeMatch={this.handleChangeMatch} onAddTopic={this.handleAddTopic} />
      </div>
    );
  }
}*/
