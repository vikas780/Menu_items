import React from "react";

const Categories = ({ filter, cat }) => {
  return (
    <div className="btn-container">
      {cat.map((Category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            onClick={() => filter(Category)}
            key={index}
          >
            {Category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
