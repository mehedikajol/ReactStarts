import React, { useEffect, useState } from "react";
import "./CoronaTracker.module.css";

export default function CoronaTracker() {
  const [coronaCases, setCoronaCases] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://corona.lmao.ninja/v2/countries/Bangladesh?yesterday&strict&query"
      );
      const actualData = await res.json();
      setCoronaCases(actualData);
      console.log(actualData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h2>Corona Cases Tracker for Bangladesh</h2>
      <p>
        Country Name: <span>{coronaCases.country}</span>
      </p>

      <div>
        <h3>cases</h3>
        <p>
          Total Cases: <span>{coronaCases.cases}</span>
        </p>

        <p>
          Total Active Cases: <span>{coronaCases.active}</span>
        </p>
        <p>
          Today New Cases: <span>{coronaCases.todayCases}</span>
        </p>
      </div>

      <div>
        <h3>Deaths</h3>
        <p>
          Total: <span>{coronaCases.deaths}</span>
        </p>
        <p>
          Today: <span>{coronaCases.todayDeaths}</span>
        </p>
      </div>

      <div>
        <h3>Recovery</h3>
        <p>
          Total Recoved: <span>{coronaCases.recovered}</span>
        </p>
        <p>
          Today Recovery: <span>{coronaCases.todayRecovered}</span>
        </p>
      </div>
    </>
  );
}
