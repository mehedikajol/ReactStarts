import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";

export default function CoronaTracker() {
  const [coronaCases, setCoronaCases] = useState([]);
  const [updateDate, setUpdateDate] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://corona.lmao.ninja/v2/countries/Bangladesh?yesterday&strict&query"
      );
      const actualData = await res.json();
      setCoronaCases(actualData);
      let date = new Date(actualData.updated);
      let lastDate = date.toDateString();
      setUpdateDate(lastDate);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="mainDiv">
      <div>
        <h2>Corona Cases Tracker</h2>
        <p>
          Country: <span>{coronaCases.country}</span>
        </p>
      </div>
      <div className="mainContent">
        <DisplayData cases={coronaCases.cases} caseName={"Cases"} />
        <DisplayData cases={coronaCases.deaths} caseName={"Deaths"} />
        <DisplayData cases={coronaCases.recovered} caseName={"Recovery"} />
        <DisplayData cases={coronaCases.todayCases} caseName={"Cases"} />
        <DisplayData cases={coronaCases.todayDeaths} caseName={"Deaths"} />
        <DisplayData cases={coronaCases.todayRecovered} caseName={"Recovery"} />
        <DisplayData cases={updateDate} caseName={"Updated"} />
      </div>
    </div>
  );
}
