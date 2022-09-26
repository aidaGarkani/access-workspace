import React from "react";
import FPItem from "./FPItem";

const Active = ({ data }) => {
  return (
    <div style={{ height: "280px", overflowY: "scroll" }}>
      {data.map((item) => (
        <FPItem item={item} />
      ))}
    </div>
  );
};

export default Active;
