import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./style.css";

const SearchPost = ({ value, onChange }) => {
  return (
    <div className="search-post">
      <Input
        value={value}
        onChange={onChange}
        className={"search-input"}
        placeholder={"Search post"}
        type={"search"}
      />
    </div>
  );
};

export default SearchPost;
