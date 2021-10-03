import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);
  return (
    <div className="p-4 flex justify-between items-center">
      <div>
        <h1 className="text-gray-400">Hi, Nama</h1>
        {location ? (
          <h1 className="font-bold">
            {location.city}, {location.country}
          </h1>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <div>
        <Link to="notifications">
          <h1 className="material-icons mx-2 text-gray-400">notifications</h1>
        </Link>
        <Link to="account">
          <h1 className="material-icons">account_circle</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
