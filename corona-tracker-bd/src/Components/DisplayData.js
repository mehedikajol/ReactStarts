import React from "react";

const DisplayData = (props) => {
  const { caseName, spanText, cases } = props;
  return (
    <div className="childDiv">
      <h3>
        <span>{spanText}</span> {caseName}
      </h3>
      <p>
        {spanText} {caseName}: <span>{cases}</span>
      </p>
    </div>
  );
};

export default DisplayData;
