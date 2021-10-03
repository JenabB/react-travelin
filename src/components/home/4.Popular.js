import React from "react";
import destination from "./destinations.json";

const Popular = () => {
  return (
    <div className="p-4 my-4">
      <h1 className="font-bold">Popular Flight</h1>
      <div className="m-2 flex overflow-x-auto" style={{ maxWidth: "400px" }}>
        {destination.destinations.map((d, i) => (
          <div key={i} className="m-2" style={{ width: "200px" }}>
            <img src={d.thumb} alt={d.name} />
            <div className="shadow-lg p-2">
              <h1>{d.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
