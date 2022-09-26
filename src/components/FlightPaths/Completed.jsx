import React from "react";
import FPItem from "./FPItem";

const Completed = ({ data }) => {
  return (
    <div style={{ height: "280px", overflowY: "scroll" }}>
      {data.map((item) => (
        <FPItem item={item} />
      ))}
    </div>
  );
};

export default Completed;
