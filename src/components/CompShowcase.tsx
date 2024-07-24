import React from "react";
import CompSkillCard from "./CompSkillCard";

function CompShowcase({ props }: any) {
  return (
    <div className="flex flex-col w-full bg-gray-800 shadow-sm shadow-green-500">
      <div className="flex flex-row w-full">
        <div className="w-[100px]">
          <img
            src={props.img}
            alt=""
            className="bg-gray-50 p-2 rounded-md"
          ></img>
        </div>
        <div className="flex-1 flex-col ml-5">
          <h2 className="text-[20px] tracking-wide">{props.title}</h2>
          <h2 className="text-[16px] tracking-normal">{props.desc}</h2>
          <div className="flex flex-row mt-3">
            {props.stack_used.map((item: any) => (
              <CompSkillCard
                title={item.title}
                img_src={item.img_src}
                skill_lvl={0}
                skill_lvl_desc=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompShowcase;
