import React, { useEffect, useState } from "react";
import styles from "./CoronaTracker.module.css";

export default function CoronaTracker() {
  const [coronaCases, setCoronaCases] = useState([]);
  const [updateDate, setUpdateDate] = useState();
  const [country, setCountry] = useState("bangladesh");

  const getCovidData = async () => {
    let link = `https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query`;
    try {
      const res = await fetch(link);
      const actualData = await res.json();
      setCoronaCases(actualData);
      let date = new Date(actualData.updated);
      let lastDate = date.toDateString();
      setUpdateDate(lastDate);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountry = (event) => {
    event.preventDefault();
    setCountry(event.target.value);
    console.log(country);
  };

  useEffect(() => {
    getCovidData();
  });

  return (
    <div className={styles.mainDiv}>
      <div>
        <h2>Corona Cases Tracker</h2>
        <p>
          Country: <span>{coronaCases.country}</span>
        </p>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Input Country Name" />
          <input type="submit" value="Get Data" onSubmit={getCountry} />
        </form>
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

        {
          <div className={styles.childDiv}>
            <h3>
              <span>Last</span> Updated
            </h3>
            <p>{updateDate}</p>
          </div>
        }
      </div>
    </div>
  );
}
