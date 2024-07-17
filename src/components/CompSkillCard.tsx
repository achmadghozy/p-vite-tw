import React from "react";
import { FaStar } from "react-icons/fa";

type props = {
  title: string;
  img_src: string;
  skill_lvl: number;
  skill_lvl_desc?: string;
};

function CompSkillCard({ title, img_src, skill_lvl, skill_lvl_desc }: props) {
  function skilllvlobj(nLvl: number) {
    const rows = [];

    for (let i = 0; i < nLvl; i++) {
      rows.push(<FaStar className="w-[15px] h-[15px]"></FaStar>);
    }

    return rows;
  }
  return (
    <div className="flex flex-row w-full my-1">
      <div className="flex w-[50px] h-[50px] content-center justify-between align-middle">
        <img
          src={img_src}
          className="w-full bg-white rounded-md px-[0.5px] py-[0.5px] "
        ></img>
      </div>
      <div className="flex flex-1 flex-col content-start justify-start ml-2">
        <h2 className="text-left justify-start text-[15px] font-semibold">
          {title}
        </h2>
        {skill_lvl_desc != (null || "") ? (
          <h2 className="text-left justify-start text-[14px] font-light align-text-bottom">
            {skill_lvl_desc}
          </h2>
        ) : (
          ""
        )}
      </div>
      <div className="flex w-[120px] content-end justify-end">
        {skilllvlobj(skill_lvl)}
      </div>
    </div>
  );
}

export default CompSkillCard;
