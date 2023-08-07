import Link from "next/link";
import Image from "next/image";
const HeaderDesktop = () => {
  return (
    <header className="hidden lg:flex flex-col">
      <nav>
      <div className="flex justify-center items-center">
        <Image src="/LMP.svg" width={300} height={300} alt="LMP"></Image>
      </div>
<div className="lg:fixed pt-52 pl-28">

        <div className="flex flex-col items-center border border-green-700 ">

        <Link href="/" className="p-3"> ACCUEIL</Link>
        <Link href="/" className="p-3">A PROPOS</Link>
        <Link href="/" className="p-3">PROJETS</Link>
        <Link href="/" className="p-3">COMPETENCE</Link>
        <Link href="/" className="p-3">PARCOURS</Link>
        <Link href="/" className="p-3"> CONTACT</Link>
        </div>
</div>
      </nav>
      
    </header>
  );
};

export default HeaderDesktop;
