import React from "react";

const ShowData = (props) => {
  const { prayer, time } = props;
  return (
    <div className="col-lg-4 col-md-6 my-3">
      <div className="card bg-success text-white">
        <div className="card-body">
          <h5 className="card-title">
            {prayer} Time:
            <br />
            {time}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
