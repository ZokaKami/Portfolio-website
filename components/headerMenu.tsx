import React, { useState } from "react";
export default function HeaderMenu() {
  const [hover, setHover] = useState(false);

  const textfade = {
    backgroundSize: "100% 100%",
    animation: "fillText 2s linear forwards",
  };
  const customStyles = hover
    ? { backgroundSize: "100% 100%", animation: `fillText 1s linear forwards` }
    : {};
  return (
    <div className="relative   text-responsivebody  " style={textfade}>
      <div className="absolute top-[28px] left-[5vw]">
        <h1 className=" ">Dzeljka </h1>
      </div>
      <div className=" fixed top-[22px] right-[4.5vw] min-w-[42px] min-h-[42px]  bg-black rounded-full  "></div>
      <div className=" fixed top-[28px] right-[5vw] min-w-[32px] min-h-[32px] rounded-full bg-white "></div>
      <div className=" animate-bounce fixed top-[44px] right-[6vw] ml-2 min-w-[12px] min-h-[12px] rounded-full bg-black "></div>
      <div className=" fixed top-[28px] right-[5vw] min-w-[32px] min-h-[32px]">
        <div className="flex">
          <div
            className={` mt-2  mr-4 text-[14px]  transition-all ease-in-out     ${
              hover ? `animate-menufade ` : "   hidden"
            }`}
          >
            <p style={customStyles}>Menu</p>
          </div>
          <div className="  items-center rounded-full  text-[18px]  ">
            <button
              className="  text-[#607274]  p-4     rounded-full"
              style={textfade}
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
