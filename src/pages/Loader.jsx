import React from "react";
import { hatch } from "ldrs";

const Loader = () => {
  hatch.register();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <l-hatch size="150" stroke="4" speed="3.5" color="#6556cd"></l-hatch>
    </div>
  );
};

export default Loader;
