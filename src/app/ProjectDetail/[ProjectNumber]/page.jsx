"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

const page = ({ params }) => {
  const [Project, setProject] = useState({});
  // params.ProjectNumber = id tae l project
  return (
    <div className="w-full flex flex-row">
      <Sidebar />
      <div className="right  w-auto pl-[5%] pr-[10%] py-[5%] flex flex-col">
        <h1 className="text-4xl font-semibold mb-8">
          Projet GED {params.ProjectNumber}
        </h1>
        <h2 className="text-xl font-semibold mb-1">Description :</h2>
        <p className="text-[#575757] mb-8">
          Le projet GED A concerne la digitalisation de la circulation des
          documents, tout en garantissant une optimisation du workflow. Le
          projet GED A concerne la digitalisation de la circulation des
          documents, tout en garantissant une optimisation du workflow.
        </p>
        <h2 className="text-xl font-semibold mb-3">Trucs</h2>
        <div className="flex gap-10 flex-wrap">
          <div className="card cursor-pointer flex flex-col bg-white px-[2%] py-4 gap-4 rounded-lg">
            <div className="w-full h-auto">
              <img
                src="/images/audit.png"
                alt=""
                className="rounded-lg w-full"
              />
            </div>
            <h2 className="w-4/5">Examiner le rapport d’audit documentaire</h2>
          </div>
          <div className="card cursor-pointer flex flex-col bg-white px-[2%] py-4 gap-4 rounded-lg">
            <div className="w-full h-auto">
              <img
                src="/images/circuit.png"
                alt=""
                className="rounded-lg w-full"
              />
            </div>
            <h2 className="w-4/5">
              Examiner un circuit de validation (workflow)
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
