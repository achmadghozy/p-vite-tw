import "./App.css";
import CompHeader2 from "./components/CompHeader2";
import CompProgressBar from "./components/CompProgressBar";
import CompSidebar from "./components/CompSidebar";
import SecProfile from "./section/SecProfile";
import { useState, useRef } from "react";
import SecUnderConstruction from "./section/SecUnderConstruction";
import SecSkills from "./section/SecSkills";
import SecProjects from "./section/SecProjects";
import CompIndex from "./components/CompIndex";
import SecDashboard from "./section/SecDashboard";
import CompHeader3 from "./components/CompHeader3";
import CompSidebar2 from "./components/CompSidebar2";

function App() {
  enum pageRoute {
    PAGE_HOME = 1,
    PAGE_SKILLS,
    PAGE_PROJECTS,
    PAGE_CONTACTS,
    PAGE_DASHBOARD,
  }

  const [Menu, SetMenu] = useState(pageRoute.PAGE_HOME);

  const getRoute = (menuid: number) => {
    SetMenu(menuid);
    console.log("Menu id:", Menu);
  };

  const GetPageAvailable = (menuid: number) => {
    let nRes = <SecUnderConstruction />;
    switch (menuid) {
      case pageRoute.PAGE_HOME:
        nRes = <SecProfile />;
        break;

      case pageRoute.PAGE_SKILLS:
        nRes = <SecSkills />;
        break;

      case pageRoute.PAGE_PROJECTS:
        nRes = <SecProjects />;
        break;

      case pageRoute.PAGE_CONTACTS:
        nRes = <SecDashboard />;
        break;

      default:
        break;
    }
    console.log("page available:", nRes);
    return nRes;
  };

  const GetPageString = (menuid: number) => {
    let cRes = "UNAVAILABLE";
    switch (menuid) {
      case pageRoute.PAGE_HOME:
        cRes = "HOMEPAGE";
        break;

      case pageRoute.PAGE_SKILLS:
        cRes = "SKILLS";
        break;

      case pageRoute.PAGE_PROJECTS:
        cRes = "PROJECTS";
        break;

      default:
        break;
    }
    console.log("page available:", cRes);
    return cRes;
  };

  const GetHeader = (menuid: number) => {
    if (menuid === pageRoute.PAGE_CONTACTS) {
      return <CompHeader3 />;
    } else {
      return <CompHeader2 onClick={getRoute} />;
    }
  };

  const GetSidebar = (menuid: number) => {
    if (menuid === pageRoute.PAGE_CONTACTS) {
      return <CompSidebar2 />;
    } else {
      return <CompSidebar menu={GetPageString(Menu)} />;
    }
  };

  return (
    <div className="w-screen">
      {GetHeader(Menu)}
      {GetSidebar(Menu)}
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-4 p-5 mt-[90px] h-screen">
          <>{console.log(Menu)}</>
          {GetPageAvailable(Menu)}
        </div>
        <div className="hidden md:block">
          {Menu !== pageRoute.PAGE_CONTACTS ? <CompProgressBar /> : <></>}
        </div>
      </div>
    </div>
  );
}

export default App;
