import React from "react";
import { IoIosLogOut } from "react-icons/io";

function CompHeader3() {
  return (
    <div
      className="fixed flex flex-row  h-16 w-full bg-slate-100 content-center items-center justify-between
     text-slate-700 dark:bg-gray-900 dark:text-white shadow-gray-400 border-b-2 border-gray-600"
    >
      <h2 className="flex font-semibold text-[20px] ml-10">
        {"UI E-Learning Dashboard"}
      </h2>
      <div className="flex content-end justify-end mr-10">
        <button className="relative w-[100px] h-[40px] bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-1 dark:bg-slate-700 dark:text-white">
          <IoIosLogOut className="absolute top-2.5 left-0 w-[40px]" />
          <h2 className="absolute top-[6px] left-8"> Logout </h2>
        </button>
      </div>
    </div>
  );
}

export default CompHeader3;
