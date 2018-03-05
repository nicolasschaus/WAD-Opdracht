import React from "react";
import PropTypes from "prop-types"

const BetItem = ({value, onChange, ploeg, styleElement}) => {

  const handleChangeInput = e => {
    const {value} = e.currentTarget;
    onChange(parseInt(value,10));
    console.log({value});
  }

    return (
      <label className={ploeg+" "+styleElement}>
          <h1>{ploeg}</h1>
          <input type="number" min="0" max="15" onChange={handleChangeInput} value={value} />
          <span>&#45;</span>
      </label>
    );
  };

BetItem.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    ploeg: PropTypes.string.isRequired,
    styleElement: PropTypes.string.isRequired
}

export default BetItem;
