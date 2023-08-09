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
        </div>
        <div className="bottom-0">
              Copyright Lucas Marchand-Poret
            </div>
      </nav>
      
    </header>
  );
};

export default HeaderDesktop;
