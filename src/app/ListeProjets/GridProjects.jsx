import React from "react";
import ProjectCard from "./ProjectCard";

const GridProjects = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <ProjectCard
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor, enim reiciendis quibusdam cupiditate id maxime nemo explicabo, suscipit perferendis aliquid sit quam vero repudiandae commodi laborum! Velit, officiis ipsum."
        title="GED A"
        id={1}
      />
      <ProjectCard
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor, enim reiciendis quibusdam cupiditate id maxime nemo explicabo, suscipit perferendis aliquid sit quam vero repudiandae commodi laborum! Velit, officiis ipsum."
        title="GED A"
        id={2}
      />
      <ProjectCard
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor, enim reiciendis quibusdam cupiditate id maxime nemo explicabo, suscipit perferendis aliquid sit quam vero repudiandae commodi laborum! Velit, officiis ipsum."
        title="GED A"
        id={3}
      />
      <ProjectCard
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor, enim reiciendis quibusdam cupiditate id maxime nemo explicabo, suscipit perferendis aliquid sit quam vero repudiandae commodi laborum! Velit, officiis ipsum."
        title="GED A"
        id={4}
      />
    </div>
  );
};

export default GridProjects;
