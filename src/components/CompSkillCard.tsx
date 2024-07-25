import React from "react";
import { FaStar } from "react-icons/fa";

type props = {
  title: string;
  img_src: string;
  skill_lvl: number;
  skill_lvl_desc: string;
};

function CompSkillCard({ title, img_src, skill_lvl, skill_lvl_desc }: props) {
  const isNeedLvl = (props: number) => {
    if (props > 1) {
      return (
        <div className="flex w-[120px] content-end justify-end">
          {skilllvlobj(skill_lvl)}
        </div>
      );
    }
  };

  const isNeedDesc = (props: string) => {
    if (props != (null || "")) {
      return (
        <h2 className="text-left justify-center text-[12px] font-light align-center">
          {props}
        </h2>
      );
    } else {
      return null;
    }
  };

  function skilllvlobj(nLvl: number) {
    const rows = [];

    for (let i = 0; i < nLvl; i++) {
      rows.push(<FaStar className="w-[15px] h-[15px]"></FaStar>);
    }

    return rows;
  }
  return (
    <div className="relative flex flex-row min-w-[144px] h-[50px] m-1 border-gray-300 border-opacity-60 p-2 hover:bg-slate-500 hover:bg-opacity-95 rounded-lg">
      <div className="absolute left-0 top-[5px] flex w-[40px] h-full content-center justify-between align-middle">
        <img
          src={img_src}
          className="w-[39px] h-[39px] bg-white rounded-md p-[0.5px] "
        ></img>
      </div>
      <div
        className={
          "absolute left-[45px] ${(isNeedDesc(skill_lvl_desc) !== null) ?'top-0':''} flex flex-1 flex-col content-center justify-center ml-2"
        }
      >
        <h2 className="text-left justify-center text-[15px] font-semibold">
          {title}
        </h2>
        {isNeedDesc(skill_lvl_desc)}
      </div>
      {isNeedLvl(skill_lvl)}
    </div>
  );
}

export default CompSkillCard;
