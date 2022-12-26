import React from "react";
import Select from "../Select";
import SearchPost from "../SearchPost";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <Select
        value={filter.sortParam}
        onChange={(sort) => setFilter({ ...filter, sortParam: sort })}
        defaultValue={"-- Sort by --"}
        options={[
          { value: "title", name: "Title" },
          { value: "body", name: "Content" },
        ]}
      />
      <SearchPost
        value={filter.queryParam}
        onChange={(e) => setFilter({ ...filter, queryParam: e.target.value })}
      />
    </>
  );
};

export default PostFilter;
