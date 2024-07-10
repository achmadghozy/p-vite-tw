import "./App.css";
import CompHeader from "./components/CompHeader";
import CompProgressBar from "./components/CompProgressBar";
import CompSidebar from "./components/CompSidebar";
import SecProfile from "./section/SecProfile";
import { useState, useRef } from "react";
import SecUnderConstruction from "./section/SecUnderConstruction";

function App() {
  enum pageRoute {
    PAGE_HOME = 1,
    PAGE_SKILLS,
    PAGE_PROJECTS,
    PAGE_CONTACTS,
  }

  const refRoute = useRef(pageRoute.PAGE_HOME);

  function isPageAvailable(menu: number) {
    switch (menu) {
      case pageRoute.PAGE_HOME:
        return true;

      default:
        return false;
    }
  }

  return (
    <div className="w-screen">
      <CompHeader ref={refRoute} />
      <CompSidebar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-4 p-5 mt-[90px]">
          {isPageAvailable(refRoute.current) ? (
            <SecProfile />
          ) : (
            <SecUnderConstruction />
          )}
          <h2>{refRoute.current}</h2>
        </div>
        <div className="hidden md:block">
          <CompProgressBar />
        </div>
      </div>
    </div>
  );
}

export default App;
