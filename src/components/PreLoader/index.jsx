import React from "react";
import SkeletonItem from "../SkeletonItem";
import "./style.css";

const PreLoader = ({ limit, addClass = "", addInscription }) => {
  const generateItems = (count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(i);
    }
    return items;
  };
  const items = generateItems(limit);

  return (
    <div className={"preloader " + addClass}>
      {addInscription ? <h2>Loading ...</h2> : ""}
      {items.map((it) => (
        <SkeletonItem key={it} />
      ))}
    </div>
  );
};

export default PreLoader;
