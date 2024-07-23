import React from "react";
import CompShowcase from "../components/CompShowcase";

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
  ];

  const Projects = [
    {
      title: "UI Elearning",
      img: "/Elearning.png",
      desc: "Lorep ipsum",
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
