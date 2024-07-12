import { useState } from "react";

const CompHeader2 = (props: any) => {
  const menu = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "SKILLS",
    },
    {
      id: 3,
      name: "PROJECTS",
    },
    {
      id: 4,
      name: "CONTACT",
    },
  ];

  const [ActiveMenu, setActiveMenu] = useState(1);

  const handleClick = (menuid: number) => {
    console.log("Header log menu init:", menuid);
    setActiveMenu(menuid);
    props.onClick(menuid);
  };

  return (
    <div className="flex items-center fixed w-full justify-between border-b-[1px] bg-white dark:bg-gray-600">
      <div
        className="w-[90px] h-[90px]
                bg-black"
      >
        <img src="/react.svg" className="p-7" />
      </div>
      <div className="hidden md:flex gap-14">
        {menu.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:underline font-medium"
            onClick={() => handleClick(item.id)}
          >
            <h2 className="text-gray-500 dark:text-white">{item.name}</h2>
            {ActiveMenu == item.id ? (
              <div className="flex w-full bg-gray-300 opacity-35 h-1 rounded-md">
                <>{console.log("Bar menu active:", ActiveMenu)}</>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div
        className="w-[90px] h-[90px]
                bg-red-500 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </div>
    </div>
  );
};

export default CompHeader2;
