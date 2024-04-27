import React from "react";
import ProjectCard from "./ProjectCard";

const GridProjects = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <ProjectCard
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor, enim reiciendis quibusdam cupiditate id maxime nemo explicabo, suscipit perferendis aliquid sit quam vero repudiandae commodi laborum! Velit, officiis ipsum."
        title="GED A"
      />
      <ProjectCard
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor, enim reiciendis quibusdam cupiditate id maxime nemo explicabo, suscipit perferendis aliquid sit quam vero repudiandae commodi laborum! Velit, officiis ipsum."
        title="GED A"
      />
      <ProjectCard
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor, enim reiciendis quibusdam cupiditate id maxime nemo explicabo, suscipit perferendis aliquid sit quam vero repudiandae commodi laborum! Velit, officiis ipsum."
        title="GED A"
      />
      <ProjectCard
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor, enim reiciendis quibusdam cupiditate id maxime nemo explicabo, suscipit perferendis aliquid sit quam vero repudiandae commodi laborum! Velit, officiis ipsum."
        title="GED A"
      />
    </div>
  );
};

export default GridProjects;
