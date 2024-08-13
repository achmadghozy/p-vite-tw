import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

interface Sidebar2Props {
  onClick: () => void;
}

const CompSidebar2: React.FC<Sidebar2Props> = (onClick) => {
  enum enumgnrl_menu {
    overview = 0,
    overview_grade,
    overview_trainee,
    overview_teacher,
  }

  const [clickedMenu, setclickedMenu] = useState(enumgnrl_menu.overview);
  const overview_menu = [
    {
      id: 1,
      menu: "Grade",
    },
    {
      id: 2,
      menu: "Trainee",
    },
    {
      id: 3,
      menu: "Teacher",
    },
  ];

  return (
    <div className="fixed flex flex-row w-[150px] border-r-2 border-t-2 border-gray-600 h-screen bg-gray-300 dark:bg-slate-900 py-5 mt-16">
      <ul className="flex flex-col text-gray-200 font-semibold tracking-wide text-[16px] w-full pr-[1px] items-start content-start justify-start">
        <div className="flex flex-col">
          <div
            className="flex w-full h-[20px] flex-row border-l-2 bg-slate-800 items-center justify-start hover:cursor-pointer"
            onClick={() => setclickedMenu(enumgnrl_menu.overview)}
          >
            <MdDashboard className="h-[15px] w-[15px] items-center" />
            <h2 className="ml-2 font-semibold tracking-wide text-[16px]">
              Overview
            </h2>
          </div>
          <ul className="ml-5 mt-1">
            {overview_menu.map((item: any, index: number) => (
              <h2
                className="hover:cursor-pointer"
                key={index}
                onClick={() => setclickedMenu(index)}
              >
                {"-" + item.menu}
              </h2>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-[10px] w-full h-[20px] flex-row border-l-2 bg-slate-800 items-center justify-start hover:cursor-pointer">
            <FaBook className="h-[15px] w-[15px] items-center" />
            <h2 className="ml-2 font-semibold tracking-wide text-[16px]">
              Courses
            </h2>
          </div>
          <ul className="ml-5 mt-1">
            {/* Change to API for courses */}
            <h2>-Course 1</h2>
            <h2>-Course 2</h2>
            <h2>-Course 3</h2>
            {/* Change to API for courses */}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default CompSidebar2;
