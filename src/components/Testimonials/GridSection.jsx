import React from "react";
import GridElement from "./GridElement";

const GridSection = () => {
  return (
    <div className="w-full px-[5%] grid grid-cols-3 text-2xl gap-20">
      <GridElement />
      <GridElement />
      <GridElement />
    </div>
  );
};

export default GridSection;
