import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary w-[124px] h-screen">
      <div className="flex gap-5  bg-gray-950 rounded-lg p-6 flex-col flex-1">
        <Icon
          icon={<FaThumbsUp className="w-5 h-5 text-black" />}
          label={"Home"}
        />
        <Icon
          icon={<FaThumbsUp className="w-5 h-5 text-black" />}
          label={"aaaaaaaaaaaaaaaaaaa"}
        />
      </div>
    </div>
  );
}

function Icon({ icon, label }) {
  return (
    <div className="relative group">
      <Link
        to={"/"}
        className="w-14 h-14 bg-white rounded-full hover:rounded-md duration-100  transition-all flex items-center justify-center"
      >
        {icon}
      </Link>
      <div className="absolute group-hover:opacity-100 transition-all duration-200 bg-white p-1.5 top-1 left-16 opacity-0 rounded-md">
        <h3 className="text-gray-400 font-bold">{label}</h3>
      </div>
    </div>
  );
}

export default Sidebar;
