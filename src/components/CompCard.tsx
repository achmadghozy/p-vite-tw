import React from "react";
import { MdNavigateNext } from "react-icons/md";

type props = {
  title: string;
  desc: string;
  thumbnail: string;
  alt: string;
};

function CompCard({ title, desc, thumbnail, alt }: props) {
  return (
    <div className="flex flex-row content-start w-full  hover:shadow-sm hover:shadow-white rounded-md transition-shadow">
      <div className="flex w-10 content-center mt-2">
        <img
          src={thumbnail}
          alt={alt}
          className="ml-2 mr-5 mt-2 w-10 h-10 border-white bg-slate-100 rounded-sm"
        ></img>
      </div>
      <div className="flex flex-col content-start justify-start mt-2 ml-5">
        <h2 className="text-left">{title}</h2>
        <h2 className="text-left">{desc}</h2>
      </div>
      <div className="flex w-10 content-center justify-between align-middle">
        <MdNavigateNext className="w-10 h-full" />
      </div>
    </div>
  );
}

export default CompCard;
