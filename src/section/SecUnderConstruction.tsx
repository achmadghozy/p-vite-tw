import React from "react";

function SecUnderConstruction() {
  return (
    <div className="flex w-full h-full content-center text-center">
      <div className="flex">
        <img
          src="/construct.png"
          className="bg-white px-5 mx-5 rounded-full w-full"
        ></img>
        {" 404! \n Page is being constructed!  "}
      </div>
    </div>
  );
}

export default SecUnderConstruction;
