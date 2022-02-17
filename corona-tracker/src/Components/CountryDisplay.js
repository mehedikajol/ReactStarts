import React from "react";

const CountryDisplay = (props) => {
  const { country } = props;
  return (
    <div>
      <h2>Corona Cases Tracker</h2>
      <p>
        Country: <span>{country}</span>
      </p>
    </div>
  );
};

export default CountryDisplay;
