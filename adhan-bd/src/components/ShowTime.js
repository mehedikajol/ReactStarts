import React from "react";
import convertTime from "convert-time";

const ShowData = (props) => {
  const { prayer, time } = props;
  let icon = "";
  let backgroundClass = "";
  if (prayer === "Sunrise") {
    icon = "far fa-sun";
    backgroundClass = "bg-danger";
  } else if (prayer === "Sunset") {
    icon = "fas fa-sun";
    backgroundClass = "bg-danger";
  } else {
    icon = "fa-solid fa-mosque";
    backgroundClass = "bg-success";
  }
  return (
    <div className="col-lg-4 col-md-6 my-1 p-2 ">
      <div className={"card text-white " + backgroundClass}>
        <div className="card-body">
          <div className="row">
            <div className="col-4 my-auto text-center">
              <i className={icon}></i>
            </div>
            <div className="col-8 text-start">
              <h6 className="card-title">{prayer}</h6>
              <h3 className="card-title">{convertTime(time)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
