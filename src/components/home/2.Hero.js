import React from "react";
import hero from "../../images/hero.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="mx-auto mt-4 rounded-3xl"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          width: "380px",
          height: "300px",
        }}
      >
        <div className="p-4 text-white">
          <h1 className="font-bold text-xl">Popular Now</h1>
          <h1>Ntah dimana ini</h1>
          <button className="bg-white flex text-black px-2 py-1 mt-4 rounded-lg">
            <h1>Visit</h1>
            <h1 className="material-icons">navigate_next</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
