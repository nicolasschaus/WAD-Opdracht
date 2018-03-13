import React from 'react';
import PropTypes from "prop-types";

const Match = ({ matches, onChangeMatch }) => {

  const handleClickButton = id => {
    console.log(id);
  };

  const handleChange = (e, id) => {
    const {value, name} = e.currentTarget;
    const match = {...matches[id]};
    match[name] = value;
    onChangeMatch(id, match);
  }

  const renderMatch = (match, id) => {
    return (
    <label key={id} className={id}>
      <h1>{match.ploeg1}</h1>
      <input type="number" name="score1" min="0" max="15" defaultValue={match.score1} onChange={e => handleChange(e, id)} />
      <span>&#45;</span>
      <input type="number" name="score2" min="0" max="15" defaultValue={match.score2} onChange={e => handleChange(e, id)} />
      <h1>{match.ploeg2}</h1>
    </label>
    );
  };

    return (
      <section className='matches-belgium'>
        <form>
        <h1>Wedstrijden</h1>
        {Object.keys(matches).map(id => renderMatch(matches[id], id))}
        <input type="submit" value="Submit"></input>
        </form>
      </section>
    );
};

Match.propTypes = {
  matches: PropTypes.object.isRequired,
  onChangeMatch: PropTypes.func.isRequired
};

export default Match;

/*class Bet extends Component {

  constructor(props){
    super(props)
    this.state = {scoreMatch1Thuis:0, scoreMatch1Uit:0, scoreMatch2Thuis:0, scoreMatch2Uit:0, scoreMatch3Thuis:0, scoreMatch3Uit:0}
  }

  handleChangeInput = (channel, value) => {
    console.log("log uit de app", value);
    this.setState({[channel]: value});
  }

  
  render() {
  
  const {scoreMatch1Thuis, scoreMatch1Uit, scoreMatch2Thuis, scoreMatch2Uit, scoreMatch3Thuis, scoreMatch3Uit} = this.state;

  if (scoreMatch1Thuis > scoreMatch1Uit){
    console.log("belgie wint");
  } else if (scoreMatch1Thuis === scoreMatch1Uit) {
    console.log("het is gelijk")
  }  else {
    console.log("panama wint");
  }

  return (
  <div>
    <h1>Voorspel de scores van de Rode Duivels op het WK!</h1>
      <form>
        <ul>
          <li>
            <BetItem onChange={value => this.handleChangeInput('scoreMatch1Thuis', value)} value={scoreMatch1Thuis} ploeg="Belgie" styleElement="left-style" />
            <BetItem onChange={value => this.handleChangeInput('scoreMatch1Uit', value)} value={scoreMatch1Uit} ploeg="Panama" styleElement="right-style" /> 
          </li>
          <li>
            <BetItem onChange={value => this.handleChangeInput('scoreMatch2Thuis', value)} value={scoreMatch2Thuis} ploeg="Belgie" styleElement="left-style" />
            <BetItem onChange={value => this.handleChangeInput('scoreMatch2Uit', value)} value={scoreMatch2Uit} ploeg="Tunesie" styleElement="right-style" />
          </li>
          <li>
            <BetItem onChange={value => this.handleChangeInput('scoreMatch3Thuis', value)} value={scoreMatch3Thuis} ploeg="Engeland" styleElement="left-style" />
            <BetItem onChange={value => this.handleChangeInput('scoreMatch3Uit', value)} value={scoreMatch3Uit} ploeg="Belgie" styleElement="right-style" />
          </li>
        </ul>
          <button>Bevestig deze scores</button>
      </form>
    </div>
   );
  };
};
*/
