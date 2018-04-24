import uniqid from "uniqid";
import {decorate, observable, action} from "mobx";

class Match {
  constructor(firstMatchScore1, firstMatchScore2, secondMatchScore1, secondMatchScore2, thirdMatchScore1, thirdMatchScore2, match, removeMatch) {
    this.id = uniqid();

    this.match = match;


    this.firstMatchScore1 = firstMatchScore1;
    this.firstMatchScore2 = firstMatchScore2;

    this.secondMatchScore1 = secondMatchScore1;
    this.secondMatchScore2 = secondMatchScore2;

    this.thirdMatchScore1 = thirdMatchScore1;
    this.thirdMatchScore2 = thirdMatchScore2;

    this.killMe = removeMatch;

  }

  updateScore = value => {
    this.firstMatchScore1 = value;
  };

  updateScore2 = value => {
    this.firstMatchScore2 = value;
  };



}

decorate(Match, {
  match: observable,
  delete: action,
  updateScore: action,
  firstMatchScore1: observable,
  firstMatchScore2: observable
});

export default Match;
