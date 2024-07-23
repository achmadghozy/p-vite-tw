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
        <h2 className="text-left justify-start text-[14px] font-light align-text-bottom">
          {props}
        </h2>
      );
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
    <div className="flex flex-row m-1 border-gray-300 border-opacity-60 p-5">
      <div className="flex w-[40px] h-[40px] content-center justify-between align-middle">
        <img
          src={img_src}
          className="w-full bg-white rounded-md px-[0.5px] py-[0.5px] "
        ></img>
      </div>
      <div className="flex flex-1 flex-col content-start justify-center ml-2">
        <h2 className="text-left justify-start text-lg font-semibold">
          {title}
        </h2>
        {isNeedDesc(skill_lvl_desc)}
      </div>
      {isNeedLvl(skill_lvl)}
    </div>
  );
}

export default CompSkillCard;
