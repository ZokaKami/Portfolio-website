import React, { useState } from "react";
export default function HeaderMenu() {
  const textfade = {
    backgroundSize: "100% 100%",
    animation: "fillText 2s linear forwards",
  };

  return (
    <div className="relative   text-responsivebody  " style={textfade}>
      <div className="absolute top-[28px] left-[5vw]">
        <h1 className=" ">Dzeljka </h1>
      </div>
    </div>
  );
}
