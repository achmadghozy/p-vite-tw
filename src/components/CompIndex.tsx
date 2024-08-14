import React, { useEffect, useState } from "react";

interface indexIF {
  nPage: number;
}

const CompIndex: React.FC<indexIF> = ({ nPage }) => {
  const sections = document.querySelectorAll("section")!;
  let arrSections = Array.from(sections);

  const [activeSec, setActiveSec] = useState("");
  const [activePage, setActivePage] = useState(nPage);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        setActiveSec(section.id);
      }
    });
  };
  return (
    <div className="fixed mt-[100px] ml-5 flex flex-col h-full">
      <h2 className="text-[15px] text-gray-800 dark:text-white items-center content-center justify-start">
        On this page
      </h2>
      {arrSections.map((nSec) => (
        <h2
          className="mt-3"
          style={{
            fontSize: `${nSec.id === activeSec ? "20px" : "15px"}`,
            color: `${nSec.id === activeSec ? "text-white" : "text-black"}`,
          }}
        >
          {nSec.id}
        </h2>
      ))}
    </div>
  );
};

export default CompIndex;
