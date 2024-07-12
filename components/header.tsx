import React, { useEffect } from "react";
import { useState } from "react";
import HeaderMenu from "./headerMenu.tsx";
import HeaderIntro from "./headerIntro.tsx";
export default function Header({}) {
  return (
    <div className="mt-[-4px] ">
      <HeaderMenu />
      <HeaderIntro />
    </div>
  );
}
