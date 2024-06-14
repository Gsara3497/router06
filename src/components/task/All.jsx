
//import React from "react";
import Card from "./Card";

const All = ({ data }) => {
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default All;
