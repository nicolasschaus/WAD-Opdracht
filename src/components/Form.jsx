import React from "react";
import Match from "../models/Match";
import { PropTypes } from "prop-types";

const Form = ({store}) => {

  const handleSubmitForm = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const match = new Match(form.score1.value, form.score2.value, form.score3.value, form.score4.value, form.score5.value, form.score6.value)
    store.addMatch(match);
    form.reset();
    console.log({store})
    }

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <h1>België</h1>
        <input type="number" name="score1" defaultValue="0" min="0" max="15" />
        <span>&#45;</span>
        <input type="number" name="score2" defaultValue="0" min="0" max="15" />
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
  );
};

Form.propTypes = {
  store: PropTypes.object.isRequired
};


export default Form;
