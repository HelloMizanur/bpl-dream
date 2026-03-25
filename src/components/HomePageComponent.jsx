import React, { useState } from "react";

const HomePageComponent = () => {
  const [selectedButn, setSelectedButn] = useState("available");
  return (
    <>
      <div className="px-5 md:px-20 py-10">
        <div className="flex justify-between items-center">
          <span className="text-3xl">Available Player : 0</span>
          <div className="">
            <button
              onClick={() => setSelectedButn("available")}
              className={`btn btn-default ${selectedButn === "available" ? "bg-amber-400" : ""}`}
            >
              Available
            </button>
            <button
              onClick={() => setSelectedButn("selected")}
              className={`btn btn-default ${selectedButn === "selected" ? "bg-amber-400" : ""}`}
            >
              Selected ( 0 )
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageComponent;
