import React from "react";
import { Link } from "react-router-dom";
import destination from "./destinations.json";

const Popular = () => {
  return (
    <div className=" my-4">
      <div className="flex justify-between px-4">
        <h1 className="font-bold">Popular Flight</h1>
        <Link to="/flights">
          <h1 className="text-blue-500 font-bold">View All</h1>
        </Link>
      </div>
      <div className="flex overflow-x-auto mx-auto" style={{ maxWidth: "90%" }}>
        {destination.destinations.map((d, i) => (
          <div>
            <div key={i} className="mr-4 mt-4" style={{ width: "200px" }}>
              <img src={d.thumb} alt={d.name} />
              <div className="shadow-xl bg-white p-4 rounded-b-lg">
                <h1>{d.name}</h1>
                <h2 className="text-gray-400">{d.country}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
