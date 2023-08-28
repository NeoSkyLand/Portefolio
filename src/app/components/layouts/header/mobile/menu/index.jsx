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
import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

const MenuNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const HideMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Menu styles={styles} isOpen={showMenu === true ? false : null}>
      <div className="h-screen flex flex-col  justify-evenly items-center">
        <div className="flex flex-col justify-center items-center py-10">
          <img
            src="/js.svg"
            alt=""
            className="rounded-full"
            width={75}
            height={75}
          />
          <div className="flex flex-col items-center pt-4">
            <h1>Lucas Marchand-Poret</h1>
            <h2>lucasporet.reel@gmail.com</h2>
          </div>
        </div>
        <ul>
          <li>
            <a href="http://localhost:3000/" className=" ">
              <FontAwesomeIcon icon={faHouse} className="pr-3" />
              ACCUEIL
            </a>
          </li>
          <li>
            <AnchorLink
              offset={() => 100}
              href="#about"
              onClick={() => HideMenu()}
            >
              <FontAwesomeIcon icon={faCircleInfo} className="pr-3" />A PROPOS
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              offset={() => 100}
              href="#projects"
              onClick={() => HideMenu()}
            >
              <FontAwesomeIcon icon={faLaptop} className="pr-3" />
              PROJET
            </AnchorLink>
          </li>
          {/* <li>
            <Link href="/" className="flex items-center justify-center">
              <FontAwesomeIcon icon={faGamepad} className="pr-3" />
              MINI JEU
            </Link>
          </li> */}
          <li>
            <AnchorLink
              offset={() => 100}
              href="#skills"
              onClick={() => HideMenu()}
            >
              <FontAwesomeIcon icon={faClipboard} className="pr-3" />
              COMPETENCE
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              offset={() => 100}
              href="#timeline"
              onClick={() => HideMenu()}
            >
              <FontAwesomeIcon icon={faInbox} className="pr-3" />
              PARCOURS
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              offset={() => 100}
              href="#contact"
              onClick={() => HideMenu()}
            >
              <FontAwesomeIcon icon={faAddressCard} className="pr-3" />
              CONTACT
            </AnchorLink>
          </li>
        </ul>
        <div className="w-full grid grid-cols-3">
          <div className="flex justify-center col-span-3 bottom-0 fixed px-2">
            <p>Copyright by Lucas Marchand-Poret</p>
            </div>
          </div>
        </div>
    </Menu>
  );
};

export default MenuNav;
