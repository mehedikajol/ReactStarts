import React, { useState } from "react";
const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [curretTime, setCurrentTime] = useState(time);

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
      <h1>{curretTime}</h1>
    </div>
  );
};
export default Clock;
