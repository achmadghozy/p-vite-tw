import React from "react";
import CompCard from "../components/CompCard";
import String from "../string/String";

function SecSkills() {
  return (
    <CompCard
      title={String.FRONTEND_LONG}
      desc={String.FRONTED_DESC_LONG}
      thumbnail={"/web-design.png"}
      alt={"Frontend Engineer"}
    />
  );
}

export default SecSkills;
