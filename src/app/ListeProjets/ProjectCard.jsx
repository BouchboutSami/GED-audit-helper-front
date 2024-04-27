import React from "react";

const ProjectCard = () => {
  return (
    <div className="w-full border-[1px solid #484848] px-[5%] py-[5%] flex flex-col bg-white rounded-lg gap-3 cursor-pointer hover:scale-105 ease-in-out">
      <div className="icon">
        <img src="/images/ProjectIcon.png" alt="icon" />
      </div>
      <h2>GED A</h2>
      <p className="text-[#A1A1A1] text-sm">
        La description du projet, en gros La description du projet, en gros La
        description du projet, en gros
      </p>
    </div>
  );
};

export default ProjectCard;
