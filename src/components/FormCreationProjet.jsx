import React from "react";

const FormCreationProjet = () => {
  return (
    <div className="form w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-2">Créez un nouveau projet</h1>
      <p className="text-lg font-normal mb-10 text-[#A1A1A1]">
        Choisissez un nom unique pour votre projet et ajoutez une description
      </p>
      <input
        type="text"
        className="w-1/3 mb-4 flex px-4 py-2 rounded-lg"
        placeholder="Nom du projet"
      />
      <textarea
        type="text"
        className="w-1/3 flex px-4 py-2 rounded-lg mb-6"
        placeholder="description du projet"
        rows={5}
      />
      <a href="/ListeProjets">
        <button className="flex px-4 py-2 rounded-lg bg-noir text-white">
          Suivant
        </button>
      </a>
    </div>
  );
};

export default FormCreationProjet;
