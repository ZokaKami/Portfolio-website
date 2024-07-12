import React, { useRef } from "react";
import HeaderCover from "./images/headerCoverThree.png";
import { useState, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeaderIntro() {
  const [scrollY, setScrollY] = useState(0);

  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      scale: 1,
      snap: "frame",

      scrollTrigger: {
        trigger: "#imageRef",
        start: "top top", // when the top of the image hits the top of the viewport
        end: `+=200%    `, // animate over 50% of window height

        pin: true,
        scrub: true,
        markers: true,
      },
    });
  }, []);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageScale = 1 + scrollY / 100;
  console.log(scrollY);
  console.log(imageScale);
  const textfade = {
    backgroundSize: "100% 100%",
    animation: "fillText 2s linear forwards",
  };

  return (
    <div>
      <div className=" px-16 items-center justify-center  pt-24  ">
        <h1
          className="text-black text-[120px] mt-[110px] text-center  "
          style={textfade}
        >
          Visualize for
        </h1>
        <h2 className="text-black text-[120px]  text-center  " style={textfade}>
          {" "}
          the digital legacy
        </h2>
      </div>
      <div className="  w-[100vw] h-[100vh]    " id="imageRef">
        <img
          ref={imageRef}
          id="image"
          src={HeaderCover}
          alt="Example"
          className="w-[100vw] h-[100vh] object-cover absolute top-50% left-50%  object-center scale-50    "
        />
      </div>
    </div>
  );
}
