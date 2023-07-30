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
import { styles } from "./Style";

const HeaderMobile = () => {
  return (
    <header className="flex lg:hidden">
      <h1>Hello Dev</h1>
      <nav>
        <Menu styles={styles}>
          <div className=" flex justify-center items-center">
            <Link href="/" className=" flex items-center justify-center pt-32 ">
              <FontAwesomeIcon icon={faHouse} className="pr-3" />
              ACCUEIL
            </Link>
            <Link href="/" className="flex items-center justify-center pt-3">
              <FontAwesomeIcon icon={faCircleInfo} className="pr-3" />A PROPOS
            </Link>
            <Link href="/" className="flex items-center justify-center py-3">
              <FontAwesomeIcon icon={faLaptop} className="pr-3" />
              PROJET
            </Link>
            <Link href="/" className="flex items-center justify-center">
              <FontAwesomeIcon icon={faGamepad} className="pr-3" />
              MINI JEU
            </Link>
            <Link href="/" className="flex items-center justify-center py-3">
              <FontAwesomeIcon icon={faClipboard} className="pr-3" />
              COMPETENCE
            </Link>
            <Link href="/" className="flex items-center justify-center">
              <FontAwesomeIcon icon={faInbox} className="pr-3" />
              PARCOURS
            </Link>
            <Link href="/" className="flex items-center justify-center pt-3">
              <FontAwesomeIcon icon={faAddressCard} className="pr-3" />
              CONTACT
            </Link>
          </div>
        </Menu>
      </nav>
    </header>
  );
};

export default HeaderMobile;
