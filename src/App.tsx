import "./App.css";
import CompHeader2 from "./components/CompHeader2";
import CompProgressBar from "./components/CompProgressBar";
import CompSidebar from "./components/CompSidebar";
import SecProfile from "./section/SecProfile";
import { useState, useRef } from "react";
import SecUnderConstruction from "./section/SecUnderConstruction";
import SecSkills from "./section/SecSkills";

function App() {
  enum pageRoute {
    PAGE_HOME = 1,
    PAGE_SKILLS,
    PAGE_PROJECTS,
    PAGE_CONTACTS,
  }

  const [Menu, SetMenu] = useState(pageRoute.PAGE_HOME);

  const refRoute = useRef<number>(pageRoute.PAGE_HOME);

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

      default:
        break;
    }
    console.log("page available:", nRes);
    return nRes;
  };

  return (
    <div className="w-screen">
      <CompHeader2 onClick={getRoute} />
      <CompSidebar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-4 p-5 mt-[90px] transition-all ease-in-out">
          <>{console.log(Menu)}</>
          {GetPageAvailable(Menu)}
        </div>
        <div className="hidden md:block">
          <CompProgressBar />
        </div>
      </div>
    </div>
  );
}

export default App;
