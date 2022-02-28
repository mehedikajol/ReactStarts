import React, { useEffect, useState } from "react";
import ShowData from "./ShowTime";

const SalatTime = () => {
  const [data, setData] = useState("");
  const [city, setCity] = useState("dhaka");
  const [tempCity, setTempCity] = useState("");
  const [school, setSchool] = useState(0);
  const [organization, setOrganization] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.aladhan.com/v1/timingsByCity?city=" +
        city +
        "&country=bangladesh&method=" +
        organization +
        "&school=" +
        school
    )
      .then((result) => result.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setError(error);
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [school, organization, city]);

  const setFinalCity = (event) => {
    event.preventDefault();
    setCity(tempCity);
    setTempCity("");
  };

  const getCity = (event) => {
    event.preventDefault();
    setTempCity(event.target.value);
  };

  const getSchool = (event) => {
    if (event.target.type === "select-one") setSchool(event.target.value);
  };

  const getOrganization = (event) => {
    if (event.target.type === "select-one") setOrganization(event.target.value);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (error || data.code !== 200) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 bd-primary text-white d-flex align-items-center justify-content-center">
            <h2>Please check your internet connection</h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="row text-center">
          <h2>City Name: {capitalizeFirstLetter(city)}</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 my-3">
            <div className="bg-primary text-white p-2 rounded">
              <form>
                <span>School of Thought</span>
                <br />
                <select
                  className="form-select mw-100"
                  value={school}
                  onChange={getSchool}
                >
                  <option value="0">Shafii School</option>
                  <option value="1">Hanafi School</option>
                </select>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <div className="bg-primary text-white p-2 rounded">
              <form onSubmit={setFinalCity}>
                <span>City Name</span>
                <br />
                <input
                  value={tempCity}
                  type="text"
                  placeholder="Input city name"
                  className="form-control mw-100"
                  onChange={getCity}
                />
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <div className="bg-primary text-white p-2 rounded">
              <form>
                <span>Organization Method</span>
                <br />
                <select
                  className="form-select mw-100"
                  value={organization}
                  onChange={getOrganization}
                >
                  <option value="1">Muslim World League</option>
                  <option value="2">Islamic Society of North America</option>
                  <option value="3">
                    Egyptian General Authority of Survey
                  </option>
                  <option value="4">Umm Al-Qura University, Makkah</option>
                  <option value="5">
                    University of Islamic Sciences, Karachi
                  </option>
                  <option value="6">
                    Institute of Geophysics, University of Tehran
                  </option>
                  <option value="7">
                    Shia Ithna-Ashari, Leva Institute, Qum
                  </option>
                  <option value="8">Gulf Region</option>
                  <option value="9">Kuwait</option>
                  <option value="10">Qatar</option>
                  <option value="11">
                    Majlis Ugama Islam Singapura, Singapore
                  </option>
                  <option value="12">
                    Union Organization islamic de France
                  </option>
                  <option value="13">Diyanet İşleri Başkanlığı, Turkey</option>
                  <option value="14">
                    Spiritual Administration of Muslims of Russia
                  </option>
                </select>
              </form>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <ShowData prayer="Fajr" time={data.data.timings.Fajr} />
          <ShowData prayer="Sunrise" time={data.data.timings.Sunrise} />
          <ShowData prayer="Dhuhr" time={data.data.timings.Dhuhr} />
          <ShowData prayer="Asr" time={data.data.timings.Asr} />
          <ShowData prayer="Sunset" time={data.data.timings.Sunset} />
          <ShowData prayer="Maghrib" time={data.data.timings.Maghrib} />
          <ShowData prayer="Isha" time={data.data.timings.Isha} />
        </div>
      </>
    );
  }
};

export default SalatTime;
