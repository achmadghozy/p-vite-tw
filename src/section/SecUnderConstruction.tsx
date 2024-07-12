import React from "react";

function SecUnderConstruction() {
  return (
    <div className="flex flex-auto w-full h-screen items-center">
      <div className="flex flex-col w-full justify-center items-center bg-slate-700 rounded-lg">
        <div className="flex w-full justify-center items-center">
          <img
            src="/construct.png"
            className="bg-white w-[100px] h-[100px] rounded-full mt-10 items-center"
          ></img>
        </div>
        <h2 className="size-20 font-extrabold justify-center mt-10 w-full text-center">
          {"404! Page is being constructed!"}
        </h2>
      </div>
    </div>
  );
}

export default SecUnderConstruction;
