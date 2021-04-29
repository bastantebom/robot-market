import React from "react";

const Filter = ({ materialType, handleChange }) => {
  return (
    <div className="filter">
      <p className="filter__label">Filter Category</p>
      <select className="filter__select" onChange={handleChange}>
        {materialType.map((material, index) => {
          return (
            <option key={index} value={material}>
              {material}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
