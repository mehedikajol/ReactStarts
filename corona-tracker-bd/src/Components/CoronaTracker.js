import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";
import CountryDisplay from "./CountryDisplay";

export default function CoronaTracker() {
  const [coronaCases, setCoronaCases] = useState([]);
  const [updateDate, setUpdateDate] = useState([]);
  const [updateTime, setUpdateTime] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch(
        `https://corona.lmao.ninja/v2/countries/bangladesh?yesterday&strict&query`
      );
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

  useEffect(() => {
    getCovidData();
  });

  return (
    <div className="mainDiv">
      <CountryDisplay country={coronaCases.country} />
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
