import React from "react";
import CompCard from "../components/CompCard";
import String from "../string/String";

function SecSkills() {
  const skills_frontend = [
    {
      id: 1,
      title: "VC++ Epson Framework",
      img_src: "/epson-2.svg",
      skill_lvl: 0,
      skill_lvl_desc: "3+ Years of main works",
    },
    {
      id: 2,
      title: "ReactJS",
      img_src: "/react.svg",
      skill_lvl: 0,
      skill_lvl_desc: "2 years of side projects",
    },
    {
      id: 3,
      title: "HTML5",
      img_src: "/html-5-logo.svg",
      skill_lvl: 0,
      skill_lvl_desc: "2 years of side projects",
    },
    {
      id: 4,
      title: "Tailwind CSS",
      img_src: "/tailwind.svg",
      skill_lvl: 0,
      skill_lvl_desc: "1.5 years of side projects",
    },
    {
      id: 5,
      title: "ThreeJS",
      img_src: "/threejs.svg",
      skill_lvl: 0,
      skill_lvl_desc: ".5 years of side projects",
    },
  ];
  const skills_backend = [
    {
      id: 1,
      title: "Gin Golang",
      img_src: "/gin-gonic.png",
      skill_lvl: 0,
      skill_lvl_desc: "2 years of side projects",
    },
    {
      id: 2,
      title: "ExpressJS",
      img_src: "/express-js.png",
      skill_lvl: 0,
      skill_lvl_desc: "2 years of side projects",
    },
  ];
  const firmware_skills = [
    {
      id: 1,
      title: "freeRTOS",
      img_src: "/gin-gonic.png",
      skill_lvl: 0,
      skill_lvl_desc: "2 years of side projects",
    },
    {
      id: 2,
      title: "ExpressJS",
      img_src: "/express-js.png",
      skill_lvl: 0,
      skill_lvl_desc: "2 years of side projects",
    },
  ];
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
      <CompCard
        title={String.BACKEND_LONG}
        desc={String.BACKEND_DESC_LONG}
        img_src={"/backend-coding.png"}
        img_alt={"Frontend Engineer"}
        skill_map={skills_backend}
      />
    </div>
  );
}

export default SecSkills;
