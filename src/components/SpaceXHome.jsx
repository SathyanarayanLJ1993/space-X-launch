import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FilterButton from "./shared/FilterButton";
import * as SpaceXActions from "../redux/actions/SpaceXActions";
import SpaceXCard from "./SpaceXCard";

const SpaceXHome = ({
  loadSpaceXData,
  loading,
  serverError,
  serverSuccess,
  spaceXList,
}) => {
  const [selectedYear, setSelectedYear] = useState("");
  const [isLaunch, setIsLaunch] = useState("");
  const [islanded, setIsLanded] = useState("");

  //Calling spaceX initial load
  useEffect(() => {
    loadSpaceXData("", "", "");
  }, []);

  //year handler function
  const yearClickHandler = (year) => {
    setSelectedYear(year);
    loadSpaceXData(isLaunch, islanded, year);
    scrollToTop();
  };

  //launch handler function
  const launchHandler = (launch) => {
    setIsLaunch(launch);
    loadSpaceXData(launch, islanded, selectedYear);
    scrollToTop();
  };

  //land handler function
  const landHandler = (land) => {
    setIsLanded(land);
    loadSpaceXData(isLaunch, land, selectedYear);
    scrollToTop();
  };

  //Scroll to top function on click of button
  const scrollToTop = () => {
    document.getElementById("space-x").scrollIntoView({ behavior: "smooth" });
  };

  //Assigning years
  const years = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  return (
    <>
      <section className="container-fluid bg-light p-4 mt-5">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-4">SpaceX launch programs</h4>
          </div>
          <div className="col-md-3">
            <div className="card position-sticky scroll-me sticky-top shadow-sm p-3 mb-5 bg-white rounded ">
              <div className="card-body ">
                <h5 className="card-title">Filters</h5>
                <div className="mb-3 text-center">
                  <p className="card-text text-center">Launch year</p>
                  <hr />
                  {years.map((year, index) => (
                    <React.Fragment key={index}>
                      <FilterButton
                        type="button"
                        value={year}
                        handleClick={() => yearClickHandler(year)}
                        isSelected={year === selectedYear}
                      />
                    </React.Fragment>
                  ))}
                </div>
                <div className="mb-3 text-center">
                  <p className="card-text text-center">Successful Launch</p>
                  <hr />
                  <FilterButton
                    type="button"
                    value="true"
                    handleClick={() => launchHandler("true")}
                    isSelected={"true" === isLaunch}
                  />
                  <FilterButton
                    type="button"
                    value="false"
                    handleClick={() => launchHandler("false")}
                    isSelected={"false" === isLaunch}
                  />
                </div>
                <div className="mb-3 text-center">
                  <p className="card-text text-center">Successful Landing</p>
                  <hr />
                  <FilterButton
                    type="button"
                    value="true"
                    handleClick={() => landHandler("true")}
                    isSelected={"true" === islanded}
                  />
                  <FilterButton
                    type="button"
                    value="false"
                    handleClick={() => landHandler("false")}
                    isSelected={"false" === islanded}
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="space-x" className="col-md-9">
            <div className="row">
              {loading ? (
                <div className="text-info">
                  <h4>Loading...</h4>
                </div>
              ) : (
                <SpaceXCard
                  serverSuccess={serverSuccess}
                  lists={spaceXList && spaceXList}
                />
              )}
            </div>
          </div>
        </div>
        <footer className="p-3 alert alert-success text-center">
          <p className="text-dark">
            Developed by:{" "}
            <span className="font-weight-bold">Sathyanarayan L J</span>
          </p>
        </footer>
      </section>
    </>
  );
};

function mapStateToProps(state) {
  return {
    loading: state.spaceX.isLoading,
    serverError: state.spaceX.error,
    serverSuccess: state.spaceX.success,
    spaceXList: state.spaceX.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadSpaceXData: (launch, land, year) => {
      dispatch(SpaceXActions.getSpaceXData(launch, land, year));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceXHome);
