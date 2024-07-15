import React from "react";
import { MdNavigateNext } from "react-icons/md";

type props = {
  title: string;
  desc: string;
  img_src: string;
  img_alt: string;
  skill_map: Array<string>;
};

function CompCard({ title, desc, img_src, img_alt }: props) {
  return (
    <div className="flex flex-row flex-none content-start w-full justify-start hover:shadow-sm hover:shadow-white rounded-md transition-shadow p-5">
      <div className="flex w-[100px] content-center justify-normal">
        <img
          src={img_src}
          alt={img_alt}
          className="w-[80px] h-[80px] rounded-sm p-2 bg-white"
        ></img>
      </div>
      <div className="flex flex-col flex-1 content-start justify-start">
        <h2 className="text-start text-lg font-semibold">{title}</h2>
        <h2 className="text-left">{desc}</h2>
      </div>
      <div className="flex w-10 content-center justify-between align-middle">
        <MdNavigateNext className="w-10 h-full" />
      </div>
    </div>
  );
}

export default CompCard;
