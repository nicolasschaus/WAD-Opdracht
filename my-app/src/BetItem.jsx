import React, { Component } from "react";

class BetItem extends Component {  // state gebruikt dus class ipv functie
  constructor(props) { // constructor als 'klassieke' functie schrijven
    super(props); //parent constructor oproepen, deze van Component dus
    this.state = { score1: 0, score2: 0 };
  }

  handleClickItem = e => {
     //enkel mogelijk om ordered op true te zetten
    // this.setState({ordered: true})

    // Om de state aan te passen op basis van de vorige state, kan je een functie meegeven ipv een object aan de setState()
    // Deze functie krijgt dan de vorige state en de props mee als argumenten
    console.log("hallo");
    this.setState((prevState, props) => ({ ordered: !prevState.ordered }));
  };

  render = () => {
    const { ploeg1, ploeg2 } = this.props;
    const { score1, score2 } = this.state;

    return (
      <li>
        <span class={ploeg1}>{ploeg1}<input type="number" name={ploeg1} min="0" max="15"  value={score1} /></span>- <span class={ploeg2}><input type="number" name="{ploeg2}" min="0" max="15" value={score2} />{ploeg2}</span>
      </li>
    );
  };
}

export default BetItem;
