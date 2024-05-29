import React from "react";
import { waveform } from "ldrs";

const Loader = () => {
  waveform.register();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <l-waveform size="35" stroke="3.5" speed="1" color="#6556cd"></l-waveform>
    </div>
  );
};

export default Loader;
