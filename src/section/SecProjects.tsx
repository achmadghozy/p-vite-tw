import React from "react";
import CompShowcase from "../components/CompShowcase";
import String from "../string/String";

interface Projects {
  title: string;
  img: string;
  desc: string;
  stack_used: {};
}

function SecProjects() {
  const stArrayStackElearning = [
    {
      title: "ReactJS",
      img_src: "/react.svg",
      skill_lvl: 0,
      skill_lvl_desc: "",
    },
    {
      title: "ExpressJS",
      img_src: "/express-js.png",
      skill_lvl: 0,
      skill_lvl_desc: "",
    },
    {
      title: "MongoDB",
      img_src: "/mongodb.png",
      skill_lvl: 0,
      skill_lvl_desc: "",
    },
    {
      title: "NodeJS",
      img_src: "/nodejs.png",
      skill_lvl: 0,
      skill_lvl_desc: "",
    },
  ];

  const Projects = [
    {
      title: String.PROJ_ELEARNING_TITLE,
      img: "/Elearning.png",
      desc: String.PROJ_ELEARNING_DESC,
      stack_used: stArrayStackElearning,
    },
  ];
  return (
    <div>
      <h2 className="font-extrabold text-[40px] text-right underline tracking-wide">
        PROJECTS
      </h2>
      <div className="flex flex-col bg-sky-200 dark:bg-slate-400">
        {Projects.map((item: Projects) => (
          <CompShowcase props={item} />
        ))}
      </div>
    </div>
  );
}

export default SecProjects;
