import React from "react";
import "./style.css";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className="select-wrapper">
      <select
        className="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled value={""}>
          {defaultValue}
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
