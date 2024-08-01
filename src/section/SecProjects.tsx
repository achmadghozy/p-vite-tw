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

  const stArrayStackJobMonitor = [
    {
      title: "NodeJS",
      img_src: "/nodejs.png",
      skill_lvl: 0,
      skill_lvl_desc: "",
    },
    {
      title: "VB.Net",
      img_src: "/vbnet.png",
      skill_lvl: 0,
      skill_lvl_desc: "",
    },
  ];

  const stArrayStackBaseline = [
    {
      title: "VB.Net",
      img_src: "/vbnet.png",
      skill_lvl: 0,
      skill_lvl_desc: "",
    },
    {
      title: "P4 Scripting",
      img_src: "/perforce1902.jpg",
      skill_lvl: 0,
      skill_lvl_desc: "",
    },
    {
      title: "Visual C++",
      img_src: "/c++.png",
      skill_lvl: 0,
      skill_lvl_desc: "",
    },
  ];

  const EpsonProjects = [
    {
      title: String.PROJ_ELEARNING_TITLE,
      img: "/Elearning.png",
      desc: String.PROJ_ELEARNING_DESC,
      stack_used: stArrayStackElearning,
      isWebBased: true,
    },
    {
      title: String.PROJ_JOBMONITOR_TITLE,
      img: "/Redmine.png",
      desc: String.PROJ_JOBMONITOR_DESC,
      stack_used: stArrayStackJobMonitor,
      isWebBased: false,
    },
    {
      title: String.PROJ_P4_TITLE,
      img: "/baselinecheck.png",
      desc: String.PROJ_P4_DESC,
      stack_used: stArrayStackBaseline,
      isWebBased: false,
    },
  ];
  return (
    <div>
      <h2 className="font-extrabold text-[40px] text-right underline tracking-wider font-sans">
        PROJECTS
      </h2>
      <section id="Epson Projects" className="p-1 mt-10">
        <h2 className="dark:text-white font-semibold text-xl text-gray-600 text-left tracking-wide font-sans">
          Some the kaizen projects we've developed during tenure in Epson
        </h2>
        <div className="flex flex-col bg-sky-200 dark:bg-slate-400 mt-5">
          {EpsonProjects.map((item: Projects, index: number) => (
            <div key={index}>
              <CompShowcase props={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SecProjects;
