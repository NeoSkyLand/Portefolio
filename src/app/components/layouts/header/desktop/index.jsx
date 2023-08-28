"use client";

import Link from "next/link";
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
import { useState } from "react";
const HeaderDesktop = () => {
  const [menu, setMenu] = useState(80);
  const [showButton, setShowButton] = useState(false);

  return (
    <header className="hidden lg:flex ">
      <nav className="dark:bg-black bg-[#6faaf0] h-screen fixed" style={{ width: menu }}>
        <div className="flex justify-center py-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wld3A9FvGZf3RuSLldDCOmf1Ih6lSkT-Fg&usqp=CAU"
            alt=""
            className="rounded-full"
            width={50}
            height={50}
          />
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
            <div className="py-4">
              <FontAwesomeIcon icon={faHouse} size="xl" />
            </div>
            <div className="pb-4">
              <FontAwesomeIcon icon={faCircleInfo} size="xl" />
            </div>
            <div className="pb-4">
              <FontAwesomeIcon icon={faLaptop} size="xl" />
            </div>
            <div className="pb-4">
              <FontAwesomeIcon icon={faClipboard} size="xl" />
            </div>
            <div className="pb-4">
              <FontAwesomeIcon icon={faInbox} size="xl" />
            </div>
            <div>
              <FontAwesomeIcon icon={faAddressCard} size="xl" />
            </div>
          </div>
        ) : (
          <div className=" py-28">
            <div className="flex flex-col items-center font-tiltprismRegular dark:text-[#d011d8] text-[#111144]">
              <Link href="/" className="p-3">
                ACCUEIL
              </Link>
              <Link href="/" className="p-3">
                A PROPOS
              </Link>
              <Link href="/" className="p-3">
                PROJETS
              </Link>
              <Link href="/" className="p-3">
                COMPETENCE
              </Link>
              <Link href="/" className="p-3">
                PARCOURS
              </Link>
              <Link href="/" className="p-3">
                CONTACT
              </Link>
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
