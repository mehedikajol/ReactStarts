import React, { useEffect, useState } from "react";
import styles from "./CoronaTracker.module.css";

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
    <div className={styles.mainDiv}>
      <div>
        <h2>Corona Cases Tracker for Bangladesh</h2>
        <p>
          Country: <span>{coronaCases.country}</span>
        </p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.childDiv}>
          <h3>
            <span>Total</span> Cases
          </h3>
          <p>
            Total Cases: <span>{coronaCases.cases}</span>
          </p>
        </div>

        <div className={styles.childDiv}>
          <h3>
            <span>Total</span> Deaths
          </h3>
          <p>
            Total Deaths: <span>{coronaCases.deaths}</span>
          </p>
        </div>
        <div className={styles.childDiv}>
          <h3>
            <span>Total</span> Recovery
          </h3>
          <p>
            Total Recovery: <span>{coronaCases.recovered}</span>
          </p>
        </div>
        <div className={styles.childDiv}>
          <h3>
            <span>Today</span> Cases
          </h3>
          <p>
            New Cases: <span>{coronaCases.todayCases}</span>
          </p>
        </div>
        <div className={styles.childDiv}>
          <h3>
            <span>Today</span> Deaths
          </h3>
          <p>
            New Death: <span>{coronaCases.todayDeaths}</span>
          </p>
        </div>

        <div className={styles.childDiv}>
          <h3>
            <span>Today</span> Recovery
          </h3>
          <p>
            New Recovery: <span>{coronaCases.todayRecovered}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
