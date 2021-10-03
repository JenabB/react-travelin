import React from "react";
import categories from "./category.json";

const Category = () => {
  return (
    <div
      className="flex mt-4 px-4 overflow-x-auto"
      style={{ maxWidth: "400px" }}
    >
      {categories.categories.map((c, i) => (
        <div className="mx-3 mt-4 text-center">
          <div
            className="bg-blue-400 mx-auto rounded-full"
            style={{ width: "50px", height: "50px" }}
          ></div>
          <h1 className="text-gray-700">{c.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Category;
