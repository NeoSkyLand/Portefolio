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
import { BsArrowBarLeft,BsArrowBarRight } from "react-icons/bs";

import { useState } from "react";

const HeaderDesktop = () => {
  const [menu, setMenu] = useState(80);

  return (
    <header className="hidden lg:flex ">
      <nav className="bg-red-500 h-screen fixed" style={{ width: menu }}>
        <div className="flex justify-center py-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wld3A9FvGZf3RuSLldDCOmf1Ih6lSkT-Fg&usqp=CAU"
            alt=""
            className="rounded-full"
            width={50}
            height={50}
          />
        </div>

        {menu === 80 ? (
       <div className="flex flex-col items-center py-40">
        <div className="py-4">

<FontAwesomeIcon icon={faHouse} size="xl"/>
        </div>
        <div className="pb-4">

<FontAwesomeIcon icon={faCircleInfo} size="xl"/>
        </div>
        <div className="pb-4">

<FontAwesomeIcon icon={faLaptop} size="xl"/>
        </div>
        <div className="pb-4">

<FontAwesomeIcon icon={faGamepad} size="xl"/>
        </div>
        <div className="pb-4">

<FontAwesomeIcon icon={faClipboard} size="xl"/>
        </div>
        <div className="pb-4">
<FontAwesomeIcon icon={faInbox} size="xl"/>

        </div>
        <div>
<FontAwesomeIcon icon={faAddressCard} size="xl"/>

        </div>
          </div>
        ) : (
          <div className=" py-28">
            <div className="flex flex-col items-center ">
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
            <div className="fixed bottom-0 px-4 py-1">
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
          <BsArrowBarRight size={50} className=""/>
          </button>
            </div>
        ) : (
          <div className="px-4">

          <button
            type="button"
            className=""
            onClick={() => {
              setMenu(80);
            }}
            >
            <BsArrowBarLeft size={50}/>
          </button>
            </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderDesktop;
