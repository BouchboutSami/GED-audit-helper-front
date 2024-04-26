import React from "react";
import { FaArrowRightLong, FaGithub } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="Left w-1/2 flex flex-col gap-16">
        <h1 className="text-4xl font-semibold">
          Optimisez les workflows documents
        </h1>
        <p className="text-[#606060] text-lg">
          Une solution destinée au entreprises GED/ECM Intelligence artificielle
          blabla YOYOYOOOO Une solution destinée au entreprises GED/ECM
          Intelligence artificielle blabla
        </p>
        <div className="buttons flex flex-row items-center gap-10">
          <a href="/projectCreation">
            <button className="flex flex-row items-center gap-2 text-white bg-noir py-2 px-4 rounded-xl">
              <p>Créer un projet</p>
              <FaArrowRightLong />
            </button>
          </a>

          <button className="flex flex-row items-center gap-2 bg-white text-noir py-2 px-4 rounded-xl">
            <FaGithub color="noir" />
            Nous supporter
          </button>
        </div>
        <div className="compatible flex flex-col gap-2">
          <p>Compatible avec</p>
          <div className="LogosGED flex flex-row gap-6">
            <div className="bg-white py-1 px-2 flex items-center justify-center rounded-xl">
              <img src="/images/logoAWS.png" alt="logoAWS" />
            </div>
            <div className="bg-white py-1 px-2 flex items-center justify-center rounded-xl">
              <img src="/images/logoOB.png" alt="logoAWS" />
            </div>
            <div className="bg-white py-1 px-2 flex items-center justify-center rounded-xl">
              <img src="/images/logoDO.png" alt="logoAWS" />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/images/HeroBG.png" alt="Hero image" />
      </div>
    </div>
  );
};

export default HeroSection;
