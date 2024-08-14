import CompShowcase from "../components/CompShowcase";
import String from "../string/String";

interface projectsIF {
  title: string;
  img: string;
  desc: string;
  stack_used: stackUsedIF[];
  isWebBased: boolean;
}

interface stackUsedIF {
  title: string;
  img_src: string;
  skill_lvl?: number;
  skill_lvl_desc?: string;
}

function SecProjects() {
  const stArrayStackElearning: stackUsedIF[] = [
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

  const stArrayStackJobMonitor: stackUsedIF[] = [
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

  const stArrayStackBaseline: stackUsedIF[] = [
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

  const EpsonProjects: projectsIF[] = [
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
          {EpsonProjects.map((item: projectsIF, index: number) => (
            <div key={index}>
              <CompShowcase
                title={item.title}
                img={item.img}
                desc={item.desc}
                stack_used={item.stack_used}
                isWebBased={item.isWebBased}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SecProjects;
