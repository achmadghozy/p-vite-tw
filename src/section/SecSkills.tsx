import React from "react";
import CompCard from "../components/CompCard";
import String from "../string/String";

function SecSkills() {
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
      />
    </div>
  );
}

export default SecSkills;
