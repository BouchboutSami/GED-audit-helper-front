"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

const Page = ({ params }) => {
  const [resultat, setresultat] = useState(null);
  const [image, setimage] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    const file = e.target.files[0];
    setimage(file);
    var fileReader = new FileReader();
    var base64File;
    fileReader.onload = function (event) {
      base64File = event.target.result;
      //
    };
  }
  return (
    <div className="w-full flex flex-row">
      <Sidebar projet={true} />
      <div className="w-auto ml-[20%] pl-[5%] pr-[10%] py-[5%] flex flex-col gap-4">
        <h1 className="text-4xl font-semibold text-[#262626] mb-4">
          Suggerer des améliorations à un circuit de validation
        </h1>
        <p className="text-[#A1A1A1] mb-6">
          Vous pouvez uploadez une image contenant un circuit de validation d'un
          processus métier necessitant plusieurs documents passant par plusieurs
          acteurs au sein de l'entreprise
        </p>
        <div className="w-full bg-red-400">
          <input
            type="file"
            accept="image/png"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <h2>Résultat :</h2>
        {resultat && <p>{resultat}</p>}
      </div>
    </div>
  );
};

export default Page;
