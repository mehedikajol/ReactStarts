import React, { useEffect, useState } from "react";
//import { debounce } from "lodash";
import DisplayData from "./DisplayData";
import CountryDisplay from "./CountryDisplay";

export default function CoronaTracker() {
  const [coronaCases, setCoronaCases] = useState([]);
  const [updateDate, setUpdateDate] = useState([]);
  const [updateTime, setUpdateTime] = useState([]);
  const [country, setCountry] = useState("bangladesh");

  const stateChange = (event) => {
    let tempCountry = "";
    if (event.target.type === "select-one") {
      tempCountry = event.target.value;
    }
    setCountry(tempCountry);
  };

  const getCovidData = async () => {
    let link =
      "https://corona.lmao.ninja/v2/countries/" +
      country +
      "?yesterday&strict&query";
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

  useEffect(() => {
    getCovidData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    <div className="mainDiv">
      <CountryDisplay country={coronaCases.country} />

      <select value={country} onChange={stateChange}>
        <option value="bangladesh">Bangladesh</option>
        <option value="bhutan">Bhutan</option>
        <option value="nepal">Nepal</option>
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
