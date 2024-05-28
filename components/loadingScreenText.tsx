import React from "react";
export default function loadingText() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center flex-1  text-responsive tracking-[0.3em]">
      <h1
        className="   bg-clip-text text-transparent"
        style={{
          backgroundSize: "100% 100%",
          animation: "fillText 2s linear forwards",
        }}
      >
        DZELJKA
      </h1>
    </div>
  );
}
