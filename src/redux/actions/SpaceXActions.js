import * as spaceConstants from "../constants";

export const getSpaceXData = (launch, land, year) => {
  const launchParam = launch !== "" ? "&launch_success=" + launch : "";
  const landParam = land !== "" ? "&land_success=" + land : "";
  const yearParam = year !== "" ? "&launch_year=" + year : "";

  return async function (dispatch) {
    dispatch(loadSpaceStart());
    return fetch(
      "https://api.spacexdata.com/v3/launches?limit=100" +
        launchParam +
        landParam +
        yearParam
    )
      .then((response) => {
        response.json().then(function (data) {
          if (!!data && data.length) {
            const list = [];
            data.forEach((detail) => {
              const obj = {};
              obj.flight_number = detail.flight_number;
              obj.mission_name = detail.mission_name;
              obj.mission_ids = detail.mission_id;
              obj.launch_year = detail.launch_year;
              obj.launch_success = detail.launch_success;
              obj.land_success =
                detail.rocket.first_stage.cores[0].land_success;
              obj.mission_patch_small = detail.links.mission_patch_small;
              list.push(obj);
            });
            dispatch(loadSpaceSuccess(list));
          } else {
            dispatch(loadSpaceSuccess([]));
          }
        });
      })
      .catch((error) => {
        dispatch(loadSpaceFailure("Something went wrong!"));
      });
  };
};

export function loadSpaceStart() {
  return {
    type: spaceConstants.LAUNCH_START,
  };
}

export const loadSpaceSuccess = (list) => {
  return { type: spaceConstants.LAUNCH_SUCCESS, list };
};

export const loadSpaceFailure = (error) => {
  return { type: spaceConstants.LAUNCH_FAILURE, error };
};
