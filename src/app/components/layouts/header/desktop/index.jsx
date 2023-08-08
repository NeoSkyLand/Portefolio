import Link from "next/link";
import Image from "next/image";

import { AiFillHome } from "react-icons/ai";
const HeaderDesktop = () => {
  return (
    <header className="hidden lg:flex ">
      <nav className="bg-red-500 w-40 h-screen fixed ">
        <div className="flex justify-center py-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wld3A9FvGZf3RuSLldDCOmf1Ih6lSkT-Fg&usqp=CAU"
            alt=""
            className="rounded-full"
            width={50}
            height={50}
          />
        </div>
        <div>
          <ul>
            <li className="flex flex-row">
              <AiFillHome />
              Accueil
            </li>
            <li>A propos</li>
            <li>Parcours</li>
            <li>Compétences</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      {/* <nav>
        <div className="flex justify-center items-center">
          <Image src="/LMP.svg" width={500} height={500} alt="LMP"></Image>
        </div>
        <div className="fixed flex items-center pt-52 pl-28">
          <div className="flex flex-col items-center border border-green-700 ">
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
        </div>
      </nav> */}
    </header>
  );
};

export default HeaderDesktop;
