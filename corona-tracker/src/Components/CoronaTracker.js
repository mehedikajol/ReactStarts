import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";
import CountryDisplay from "./CountryDisplay";

export default function CoronaTracker() {
  const [coronaCases, setCoronaCases] = useState([]);
  const [updateDate, setUpdateDate] = useState([]);
  const [updateTime, setUpdateTime] = useState([]);
  const [country, setCountry] = useState("bangladesh");
  let link = `https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query`;

  const getCovidData = async () => {
    try {
      const res = await fetch(link);
      const actualData = await res.json();
      setCoronaCases(actualData);
      let date = new Date(actualData.updated);
      let lastTime = date.toLocaleTimeString();
      let lastDate = date.toDateString();
      setUpdateTime(lastTime);
      setUpdateDate(lastDate);
    } catch (error) {
      console.log(error);
    }
  };
  const stateChange = (event) => {
    if (event.target.type === "select-one") {
      console.log("State is: ", country);
      setCountry(event.target.value);
      console.log("State is: ", country);
    }
  };

  useEffect(() => {
    getCovidData();
  });

  return (
    <div className="mainDiv">
      <CountryDisplay country={coronaCases.country} />

      <select value={country} onChange={stateChange}>
        <option value="bangladesh">Bangladesh</option>
        <option value="india">India</option>
      </select>

      <div className="mainContent">
        <DisplayData
          cases={coronaCases.cases}
          spanText={"Total"}
          caseName={"Cases"}
        />
        <DisplayData
          cases={coronaCases.deaths}
          spanText={"Total"}
          caseName={"Deaths"}
        />
        <DisplayData
          cases={coronaCases.recovered}
          spanText={"Total"}
          caseName={"Recovery"}
        />
        <DisplayData
          cases={coronaCases.todayCases}
          spanText={"Today"}
          caseName={"Cases"}
        />
        <DisplayData
          cases={coronaCases.todayDeaths}
          spanText={"Today"}
          caseName={"Deaths"}
        />
        <DisplayData
          cases={coronaCases.todayRecovered}
          spanText={"Today"}
          caseName={"Recovery"}
        />
        <DisplayData
          cases={updateDate + "\n" + updateTime}
          spanText={"Last"}
          caseName={"Updated"}
        />
      </div>
    </div>
  );
}
