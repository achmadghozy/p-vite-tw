import React from "react";

type props = {
  title: string;
  img_src: string;
  skill_lvl: number;
  skill_lvl_desc?: string;
  desc?: string;
};

function CompSkillCard({ title, img_src, skill_lvl, desc }: props) {
  return (
    <div className="flex flex-row w-full">
      <div className="flex w-[15px] content-center justify-between align-middle">
        <img src={img_src} className="w-full"></img>
      </div>
      <div className="flex flex-1 flex-col content-start justify-start">
        <h2 className="text-left justify-start text-[10px] font-semibold">
          {title}
        </h2>
        {desc !== null ? (
          <h2 className="text-left justify-start text-[10px] font-light">
            {desc}
          </h2>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CompSkillCard;
