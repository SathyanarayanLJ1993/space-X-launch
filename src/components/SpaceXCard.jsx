import React from "react";

const SpaceXCard = ({ lists, serverSuccess }) => {
  console.log(lists);
  let spaceXCard =
    lists &&
    !!lists.length &&
    lists.map((list, index) => (
      <div className="col-md-3" key={list.flight_number}>
        <div className="card mb-4 p-3 space-x-card">
          <img
            src={list.mission_patch_small}
            className="card-img-top bg-light p-1"
            alt={list.mission_name}
          />
          <div className="card-body p-0 mt-1">
            <p className="card-text text-primary font-weight-bold">{`${list.mission_name} #${list.flight_number}`}</p>
            <p>
              <span className="font-weight-bold">
                Mission Ids: {list.mission_ids.join(", ")}
              </span>
            </p>

            <p>
              <span className="font-weight-bold"> Launch year: </span>
              {list.launch_year}
            </p>

            <p>
              <span className="font-weight-bold"> Successful Launch: </span>
              {list.launch_success ? `${list.launch_success}` : " - "}
            </p>

            <p>
              <span className="font-weight-bold"> Successful Landing: </span>
              {list.land_success ? `${list.land_success}` : " - "}
            </p>
          </div>
        </div>
      </div>
    ));
  return (
    <>
      {spaceXCard ? (
        spaceXCard
      ) : (
        <h5 className="text-center col-12">
          <code>No space launch found!</code>
        </h5>
      )}
    </>
  );
};

export default SpaceXCard;
