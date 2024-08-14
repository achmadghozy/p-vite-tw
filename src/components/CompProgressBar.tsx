import React, { useState, useEffect } from "react";
import CompIndex from "./CompIndex";

interface progBarIF {
  menuActive: number;
}

const CompProgressBar: React.FC<progBarIF> = ({ menuActive }) => {
  const tempMenuActive = menuActive;

  const [scrollTop, setScrollTop] = useState<any>();
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };
  return (
    <div className="flex flex-row">
      <CompIndex nPage={tempMenuActive} />
      <div className="w-1.5 bg-gray-200 fixed ml-[-5px] mt-[90px] h-full mb-4">
        <div
          className="bg-green-600 transition-all ease-out duration-1000"
          style={{ height: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CompProgressBar;
