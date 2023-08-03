import MenuNav from "./menu";

const HeaderMobile = () => {
  return (
    <header className="w-full fixed top-0  flex lg:hidden">
      <nav className="bg-green-100  w-full h-20 grid grid-cols-3">
        <div>
          <MenuNav />
        </div>
        <div>
          <img src="/next.svg" alt="" />
        </div>
        <div>button</div>
      </nav>
    </header>
  );
};

export default HeaderMobile;
