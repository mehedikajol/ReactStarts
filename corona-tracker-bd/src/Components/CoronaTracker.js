import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";
import CountryDisplay from "./CountryDisplay";

export default function CoronaTracker() {
  const [coronaCases, setCoronaCases] = useState([]);
  const [updateDate, setUpdateDate] = useState([]);
  const [tempCountryName, setTempCountryName] = useState("");
  const [countryName, setCountryName] = useState("bangladesh");

  const getCovidData = async () => {
    let linkURL = `https://corona.lmao.ninja/v2/countries/${countryName}?yesterday&strict&query`;
    try {
      const res = await fetch(linkURL);
      const actualData = await res.json();
      setCoronaCases(actualData);
      let date = new Date(actualData.updated);
      let lastDate = date.toDateString();
      setUpdateDate(lastDate);
    } catch (error) {
      console.log(error);
      return <div>No DATA FOUND!!</div>;
    }
  };

  useEffect(() => {
    getCovidData();
  });

  const getCountryName = (event) => {
    setTempCountryName(event.target.value);
  };
  const setFinalCountryName = (event) => {
    event.preventDefault();
    setCountryName(tempCountryName);
    setTempCountryName("");
  };

  return (
    <div className="mainDiv">
      <CountryDisplay country={coronaCases.country} />

      <form>
        <input
          type="text"
          placeholder="Enter Country Name"
          value={tempCountryName}
          onChange={getCountryName}
        />
        <button onClick={setFinalCountryName} type="submit" value="Get Data">
          Get Data
        </button>
      </form>

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
          cases={updateDate}
          spanText={"Last"}
          caseName={"Updated"}
        />
      </div>
    </div>
  );
}
