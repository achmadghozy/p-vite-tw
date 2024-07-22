import React from "react";
import CompSkillCard from "./CompSkillCard";

function CompShowcase(props: any) {
  return (
    <div className="flex flex-col w-full bg-gray-800 shadow-sm shadow-green-500">
      <div className="flex flex-row w-full">
        <div className="w-[100px]">
          <img
            src={props.img_src}
            alt={props.img_alt}
            className="bg-gray-50 p-2"
          ></img>
        </div>
        <div className="flex-1 flex-col">
          <h2 className="text-[20px] tracking-wide">{props.title}</h2>
          <h2 className="text-[16px] tracking-normal">{props.desc}</h2>
        </div>
        <div className="grid grid-cols-5">
          <CompSkillCard />
        </div>
      </div>
    </div>
  );
}

export default CompShowcase;
