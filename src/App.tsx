import "./App.css";
import CompHeader from "./components/CompHeader";
import CompProgressBar from "./components/CompProgressBar";
import CompSidebar from "./components/CompSidebar";
import SecProfile from "./section/SecProfile";
import { useState, useRef } from "react";

function App() {
  return (
    <div className="w-screen">
      <CompHeader />
      <CompSidebar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-4 p-5 mt-[90px]">
          <SecProfile />
        </div>
        <div className="hidden md:block">
          <CompProgressBar />
        </div>
      </div>
    </div>
  );
}

export default App;
