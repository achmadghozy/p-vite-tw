import React from "react";
import CompSkillCard from "./CompSkillCard";

interface ShowCaseProps {
  stack_used: string[];
  isWebBased: boolean;
}

const CompShowcase: React.FC<ShowCaseProps> = ({ props }: any) => {
  return (
    <div className="flex flex-col w-full bg-gray-800 shadow-sm shadow-green-500 p-3">
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
          <div className="flex flex-row flex-wrap mt-3">
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
      {props.isWebBased === true ? (
        <div className="flex w-full p-2 border-blue-500 bg-transparent hover:bg-slate-500 hover:cursor-pointer rounded-full content-center justify-center">
          <h2 className="font-[14px] text-center font-style: italic">
            Go Live!
          </h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CompShowcase;
