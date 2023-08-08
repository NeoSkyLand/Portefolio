import MenuNav from "./menu";
import Image from "next/image";
import DarkMode from "@/app/components/tools/darkMode/darkMode";
const HeaderMobile = () => {
  return (
    <header className="w-full fixed top-0  flex lg:hidden">
      <nav className="bg-green-100  w-full h-20 grid grid-cols-3">
        <div>
          <MenuNav />
        </div>
        <div className="flex justify-center">
          <Image src="/LMP.svg" width={100} height={100} alt="LMP"/>
        </div>
        <div className="flex justify-center">
          <button type="button"> Dark</button>
          </div>
      </nav>
    </header>
  );
};

export default HeaderMobile;
