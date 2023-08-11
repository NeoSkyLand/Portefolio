"use client";

import MenuNav from "./menu";
import Image from "next/image";
import DarkMode from "@/app/components/tools/darkMode/darkMode";
import { CgToggleSquare, CgToggleSquareOff } from "react-icons/cg";
import { useContext, useState } from "react";
import { ParticlesContext } from "@/app/components/context/particlesProvider";

const HeaderMobile = () => {
  const [showButton, setShowButton] = useState(false);
  const { theme, setTheme } = useContext(ParticlesContext);

  return (
    <header className="w-full fixed top-0 z-50 flex lg:hidden">
      <nav className="bg-gray-400 w-full h-20 grid grid-cols-3">
        <div>
          <MenuNav />
        </div>
        <div className="flex justify-center">
          <Image
            src="/js.svg"
            width={50}
            height={50}
            alt="LMP"
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-center">
          {showButton === true ? (
            <CgToggleSquareOff
              onClick={() => {
                DarkMode();
                setTheme("light");
                setShowButton(false);
              }}
            />
          ) : (
            <CgToggleSquare
              onClick={() => {
                DarkMode();
                setTheme("dark");
                setShowButton(true);
              }}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderMobile;
