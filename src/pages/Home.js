import React from "react";
import Header from "../components/home/1.Header";
import Hero from "../components/home/2.Hero";
import Category from "../components/home/3.Category";
import Popular from "../components/home/4.Popular";

const Home = () => {
  return (
    <div className="pb-20">
      <Header />
      <Hero />
      <Category />
      <Popular />
    </div>
  );
};

export default Home;
