import React from "react";
import { IoMdHome } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoDocumentText } from "react-icons/io5";
import { GoWorkflow } from "react-icons/go";
import { MdManageAccounts } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const Sidebar = ({ active }) => {
  return (
    <div className="w-1/5 border-r-2 shadow min-h-max bg-white flex flex-col px-6 pt-[5%]">
      <ul className="Logo flex flex-col gap-14 font-medi-um tracking-wide text-black">
        <li>
          <img src="/images/Logo.png" alt="Logo" />
        </li>
        <li>
          <a
            href="/ListeProjets"
            className="flex items-center gap-4 text-white bg-black w-max px-4 py-2 rounded-lg"
          >
            <IoMdHome color="white" />
            Mes projets
          </a>
        </li>
        <li className="flex flex-col gap-3">
          <h3 className="text-[#A1A1AA] text-xs">Configuration</h3>
          <div className="flex items-center gap-2">
            <CiUser color="#3F3F46" /> Acteurs
          </div>
          <div className="flex items-center gap-2">
            <IoDocumentText color="#3F3F46" /> Documents
          </div>
          <div className="flex items-center gap-2">
            <GoWorkflow color="#3F3F46" /> Circuits de validations
          </div>
        </li>
        <li className="flex flex-col gap-3">
          <h3 className="text-[#A1A1AA] text-xs">Options</h3>
          <div className="flex items-center gap-2">
            <MdManageAccounts color="#3F3F46" /> Mon compte
          </div>
          <div className="flex items-center gap-2">
            <IoMdNotificationsOutline color="#3F3F46" /> Notifications
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
