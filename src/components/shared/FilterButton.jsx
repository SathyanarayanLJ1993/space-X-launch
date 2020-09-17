import React from "react";

const FilterButton = ({ type, value, handleClick, isSelected }) => {
  const btn = "btn m-3";

  return (
    <>
      <button
        type={type}
        className={`${btn} ${isSelected ? " btn-primary" : " btn-success"}`}
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
};

export default FilterButton;
