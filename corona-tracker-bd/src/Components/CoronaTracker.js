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
          দেশের নাম: <span>{coronaCases.country}</span>
        </p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.childDiv}>
          <h3>cases</h3>
          <p>
            মোট কেস: <span>{coronaCases.cases}</span>
          </p>

          <p>
            মোট সক্রিয় কেস: <span>{coronaCases.active}</span>
          </p>
          <p>
            নতুন কেস: <span>{coronaCases.todayCases}</span>
          </p>
        </div>

        <div className={styles.childDiv}>
          <h3>Deaths</h3>
          <p>
            মোট মৃত্যু: <span>{coronaCases.deaths}</span>
          </p>
          <p>
            নতুন মৃত্যূ: <span>{coronaCases.todayDeaths}</span>
          </p>
        </div>

        <div className={styles.childDiv}>
          <h3>Recovery</h3>
          <p>
            মোট সুস্থ হয়েছে: <span>{coronaCases.recovered}</span>
          </p>
          <p>
            আজ সুস্থ হয়েছে: <span>{coronaCases.todayRecovered}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
