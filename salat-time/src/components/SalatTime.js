import React, { useEffect, useState } from "react";
import ShowData from "./ShowTime";

const SalatTime = () => {
  const [data, setData] = useState("");
  //const [city, setCity] = useState("dhaka-bd");
  const [juristic, setJuristic] = useState(0);
  const [time, setTime] = useState(1);
  let link =
    "https://api.pray.zone/v2/times/today.json?city=rajshahi&school=10&juristic=" +
    juristic +
    "&timeformat=" +
    time;
  useEffect(() => {
    fetch(link)
      .then((result) => result.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          //console.log(error);
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [juristic, time]);

  const getSchool = (event) => {
    event.preventDefault();
  };
  const getHanafiShafi = (event) => {
    let school = "";
    if (event.target.type === "select-one") {
      school = event.target.value;
    }
    setJuristic(school);
  };
  const getTimeFormat = (event) => {
    let school = "";
    if (event.target.type === "select-one") {
      school = event.target.value;
    }
    setTime(school);
  };

  if (data.code !== 200) {
    return (
      <h2>
        Error Getting Data from the server.
        <br />
        Please check your internet connection and City name.
      </h2>
    );
  } else {
    return (
      <>
        <div className="row">
          <div className="col-lg-6 my-3">
            <div className=" bg-primary text-white">
              <form onSubmit={getSchool}>
                <span>School of Thought</span>
                <br />
                <select value={juristic} onChange={getHanafiShafi}>
                  <option value="0">Shafii School</option>
                  <option value="1">Hanafi School</option>
                </select>
              </form>
            </div>
          </div>
          <div className="col-lg-6 my-3">
            <div className=" bg-primary text-white">
              <form onSubmit={getSchool}>
                <span>Time Format</span>
                <br />
                <select value={time} onChange={getTimeFormat}>
                  <option value="0">24 hour</option>
                  <option value="1">12 hour with Suffix</option>
                  <option value="2">12 hour no Suffix</option>
                </select>
              </form>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <ShowData prayer="Fajr" time={data.results.datetime[0].times.Fajr} />
          <ShowData
            prayer="Sunrise"
            time={data.results.datetime[0].times.Sunrise}
          />
          <ShowData
            prayer="Dhuhr"
            time={data.results.datetime[0].times.Dhuhr}
          />
          <ShowData prayer="Asr" time={data.results.datetime[0].times.Asr} />
          <ShowData
            prayer="Sunset"
            time={data.results.datetime[0].times.Sunset}
          />
          <ShowData
            prayer="Maghrib"
            time={data.results.datetime[0].times.Maghrib}
          />
          <ShowData prayer="Isha" time={data.results.datetime[0].times.Isha} />
        </div>
      </>
    );
  }
};

export default SalatTime;
