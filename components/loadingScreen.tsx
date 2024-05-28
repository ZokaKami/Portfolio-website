import React from "react";
import LoadingBar from "./loadingBar.tsx";
import LoadingText from "./loadingScreenText.tsx";
import { useState } from "react";

export default function Loadingscreen({ progress, setProgress }) {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center overflow-hidden    transition-all  ease-in-out duration-1000
      ${progress >= 100 ? " opacity-0 " : " opacity-100 "}`}
    >
      <LoadingText />
      <LoadingBar timer={30} progress={progress} setProgress={setProgress} />
    </div>
  );
}
