import React from "react";

const DisplayData = (props) => {
  const { caseName, cases } = props;
  return (
    <div className="childDiv">
      <h3>
        <span>Total</span> {caseName}
      </h3>
      <p>
        Total Cases: <span>{cases}</span>
      </p>
    </div>
  );
};

export default DisplayData;
