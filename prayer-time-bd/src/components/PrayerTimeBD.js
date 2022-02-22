import React, { useEffect, useState } from "react";

export default function PrayerTimeBD() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState();

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
  });

  return <></>;
}
