import React from "react";

import { observer, PropTypes } from "mobx-react";

import { Link } from 'react-router-dom'


const Timestamp = require('react-timestamp');

const Bets = ({store}) => {

  const deleteBet = e => {
    e.preventDefault();
    store.removeMatch(e.currentTarget.dataset.id);
  }

  return (
  <ul className="bet-list">{store.matches.map(({match, id, firstMatchScore1, firstMatchScore2, secondMatchScore1, secondMatchScore2, thirdMatchScore1, thirdMatchScore2, betDelete}) => (
      <li key={id}>
        <button data-id={id} onClick={deleteBet}>Delete</button>
        <Link to={`/match/${id}`}><h1>Edit</h1></Link>
        <Link to={`/match/test`}><h1>Edit</h1></Link>

        <ul>
          <li>België {firstMatchScore1} - {firstMatchScore2} Panama</li>
          <li>België {secondMatchScore1} - {secondMatchScore2} Tunesië</li>
          <li>Engeland {thirdMatchScore1} - {thirdMatchScore2} België</li>
          <li className="timestamp"><Timestamp time={id.created_at} format='full' autoUpdate/></li>
        </ul>
      </li>
    ))}
  </ul>
  );
};

Bets.propTypes = {
  store: PropTypes.observableArray.isRequired
};


export default observer(Bets);
