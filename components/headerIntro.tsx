import React from "react";
import HeaderCover from "./images/headerCoverThree.png";
import { useState, useEffect } from "react";
export default function HeaderIntro() {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = window.innerHeight / 2; // Adjust this value as needed
    const newScaleFactor = Math.min(1 + scrollPosition / maxScroll, 2);
    setScaleFactor(newScaleFactor);

    if (newScaleFactor >= 2) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initialSize = 50; // initial size as percentage of viewport
  const size = initialSize * scaleFactor;

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-black text-[48px] mt-[150px]">
          Visualize for the digital legacy
        </h1>
      </div>
      <div
        className={`${
          isFullScreen ? "w-[100vw] h-[100vh] top-[100%] absolute" : "fixed"
        }  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out `}
        style={{
          width: isFullScreen ? "105vw" : `${size}vw`,
          height: isFullScreen ? "105vh" : `${size}vh`,
        }}
      >
        <img
          src={HeaderCover} // Replace with your image source
          alt="Example"
          className="w-full h-full object-cover object-right-top"
        />
      </div>
    </div>
  );
}
