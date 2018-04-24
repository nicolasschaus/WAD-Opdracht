import React from "react";
import { observer } from "mobx-react";
import { PropTypes } from "prop-types";

const EditMatch = ({ match }) => {
  return (
    <div>
    <h1>Pas je uitslagen aan.</h1>
    <form>
      <div>
        <h1>België</h1>
        <input type="number" name="score1"
          value={match.firstMatchScore1}
          onChange={e => match.updateScore(e.target.value)}
          min="0" max="15" />
        <span>&#45;</span>
        <input type="number" name="score2"
          value={match.firstMatchScore2}
          onChange={e => match.updateScore2(e.target.value)}
          min="0" max="15" />
        <h1 className="right">Panama</h1>
      </div>
      <div>
        <h1>België</h1>
        <input type="number" name="score3" defaultValue="0" min="0" max="15" />
        <span>&#45;</span>
        <input type="number" name="score4" defaultValue="0" min="0" max="15" />
        <h1 className="right">Tunesië</h1>
      </div>
      <div>
        <h1>Engeland</h1>
        <input type="number" name="score5" defaultValue="0" min="0" max="15" />
        <span>&#45;</span>
        <input type="number" name="score6" defaultValue="0" min="0" max="15" />
        <h1 className="right">België</h1>
      </div>
      <div>
        <input type="submit" value="Toevoegen" />
      </div>
    </form>
  </div>
  );
};

EditMatch.propTypes = {
  match: PropTypes.object.isRequired
};

export default observer(EditMatch);
