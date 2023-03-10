import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonItem = ({ rowsCount }) => {
  return (
    <div className="post">
      <h3>
        <Skeleton />
      </h3>
      <p>
        <Skeleton count={rowsCount} />
      </p>
    </div>
  );
};

export default SkeletonItem;
