import React from "react";
import CompCard from "../components/CompCard";
import String from "../string/String";

function SecSkills() {
  const skills_frontend = [
    {
      id: 1,
      title: "ReactJS",
      img_src: "/react.svg",
      skill_lvl: 5,
      skill_lvl_desc: "2 years of side projects",
    },
    {
      id: 2,
      title: "HTML5",
      img_src: "/html-5-logo.svg",
      skill_lvl: 5,
      skill_lvl__desc: "2 years of side projects",
    },
    {
      id: 3,
      title: "Tailwind CSS",
      img_src: "/tailwind.svg",
      skill_lvl: 5,
      skill_lvl__desc: "1.5 years of side projects",
    },
    {
      id: 4,
      title: "ThreeJS",
      img_src: "/threejs.svg",
      skill_lvl: 5,
      skill_lvl__desc: ".5 years of side projects",
    },
  ];

  skills_frontend.map(FESkillsF);

  return (
    <div className="w-full h-screen">
      <h2 className="text-[55px] font-extrabold text-left text-white ml-5">
        SKILLSET
      </h2>
      <CompCard
        title={String.FRONTEND_LONG}
        desc={String.FRONTEND_DESC_LONG}
        img_src={"/web-design.png"}
        img_alt={"Frontend Engineer"}
        skill_map={skills_frontend}
      />
    </div>
  );
}

export default SecSkills;
