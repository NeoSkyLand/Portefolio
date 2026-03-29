"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { CgToggleSquare, CgToggleSquareOff } from "react-icons/cg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState, useContext } from "react";
import { ParticlesContext } from "@/app/components/context/particlesProvider";
import DarkMode from "@/app/components/tools/darkMode/darkMode";
const HeaderDesktop = () => {
  const [menu, setMenu] = useState(80);
  const [showButton, setShowButton] = useState(false);  
  const { theme, setTheme } = useContext(ParticlesContext);

  return (
    <header className="hidden lg:flex ">
      <nav className="dark:bg-black bg-[#6faaf0] h-screen fixed" style={{ width: menu }}>
        <div className="flex justify-center py-4 px-2">
          <Image src="/PhotoMoi.svg" width={100} height={100} alt="moi" className="rounded-full"/>
        </div>
        <div className="flex items-center justify-center py-2 dark:text-[#d011d8] text-[#111144]">
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

        {menu === 80 ? (
          <div className="flex flex-col items-center py-40 dark:text-[#d011d8] text-[#111144]">
              <AnchorLink
              offset={() => 100}
              href="#home"
              onClick={() => HideMenu()}
            >
            <div className="py-4">
              <FontAwesomeIcon icon={faHouse} size="xl" />
            </div>

            </AnchorLink>
            <AnchorLink
              offset={() => 100}
              href="#about"
              onClick={() => HideMenu()}
            >
            <div className="pb-4">
              <FontAwesomeIcon icon={faCircleInfo} size="xl" />
            </div>
            </AnchorLink>
            <AnchorLink
              offset={() => 100}
              href="#projects"
              onClick={() => HideMenu()}
            >
            <div className="pb-4">
              <FontAwesomeIcon icon={faLaptop} size="xl" />
            </div>
            </AnchorLink>
            <AnchorLink
              offset={() => 100}
              href="#skills"
              onClick={() => HideMenu()}
            >
            <div className="pb-4">
              <FontAwesomeIcon icon={faClipboard} size="xl" />
            </div>
            </AnchorLink>
              <AnchorLink
              offset={() => 100}
              href="#timeline"
              onClick={() => HideMenu()}
            >

            <div className="pb-4">
              <FontAwesomeIcon icon={faInbox} size="xl" />
            </div>
            </AnchorLink>
            <AnchorLink
              offset={() => 100}
              href="#contact"
              onClick={() => HideMenu()}
            >
            <div>
              <FontAwesomeIcon icon={faAddressCard} size="xl" />
            </div>
            </AnchorLink>
          </div>
        ) : (
          <div className=" py-28">
            <div className="flex flex-col items-center font-orbitron dark:text-[#d011d8] text-[#111144]">
            <AnchorLink
              offset={() => 100}
              href="#home"
              onClick={() => HideMenu()}
              className="p-3"
            >
              
                ACCUEIL
              </AnchorLink>
              <AnchorLink
              offset={() => 100}
              href="#about"
              onClick={() => HideMenu()}
              className="p-3"
            >
                A PROPOS
              </AnchorLink>
              <AnchorLink
              offset={() => 100}
              href="#projects"
              onClick={() => HideMenu()}
              className="p-3"
            >
                PROJETS
              </AnchorLink>
              <AnchorLink
              offset={() => 100}
              href="#skills"
              onClick={() => HideMenu()}
              className="p-3"
            >
                COMPETENCE
              </AnchorLink>
              
              <AnchorLink
              offset={() => 100}
              href="#timeline"
              onClick={() => HideMenu()}
              className="p-3"
            > PARCOURS
              </AnchorLink>
              <AnchorLink
              offset={() => 100}
              href="#contact"
              onClick={() => HideMenu()}
              className="p-3"
              >
                CONTACT
              </AnchorLink>
            </div>
            <div className="fixed bottom-0 px-4 py-1 dark:text-[#d011d8] text-[#111144]">
              Copyright
              <div>Lucas</div>
              <div>Marchand-Poret</div>
            </div>
          </div>
        )}

        {menu === 80 ? (
          <div className="px-4">
            <button
              type="button"
              className=""
              onClick={() => {
                setMenu(160);
              }}
            >
              <BsArrowBarRight size={50} className=" dark:text-[#d011d8] text-[#111144]" />
            </button>
          </div>
        ) : (
          <div className="px-4">
            <button
              type="button"
              className=" dark:text-[#d011d8] text-[#111144]"
              onClick={() => {
                setMenu(80);
              }}
            >
              <BsArrowBarLeft size={50} />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderDesktop;
