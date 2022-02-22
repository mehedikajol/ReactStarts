import React, { useEffect, useState } from "react";

export default function PrayerTimeBD() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);

  const getPrayerTime = async () => {
    try {
      const responce = await fetch(
        "https://api.aladhan.com/v1/timingsByCity?city=dhaka&country=bangladesh&method=8&school=0"
      );
      setData(await responce.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrayerTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (data.code !== 200) {
    return (
      <>
        <h2>Something went wrong</h2>
      </>
    );
  } else {
    return (
      <>
        <h2>Fajr: {data.data.timings.Fajr}</h2>
        <h2>Sunrise: {data.data.timings.Sunrise}</h2>
        <h2>Dhuhr: {data.data.timings.Dhuhr}</h2>
        <h2>Asr: {data.data.timings.Asr}</h2>
        <h2>Sunset: {data.data.timings.Sunset}</h2>
        <h2>Maghrib: {data.data.timings.Maghrib}</h2>
        <h2>Isha: {data.data.timings.Isha}</h2>
      </>
    );
  }
}
