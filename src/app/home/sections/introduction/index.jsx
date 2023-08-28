"use client";

import Caroussel from "@/app/components/tools/caroussel/caroussel";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

const Introduction = () => {
  return (
    <section className="">
      <div className="w-full h-screen bg-[url('https://images7.alphacoders.com/654/654644.jpg')] bg-no-repeat bg-cover ">
        <div>
          <h1 className=" text-[#ebc5f5] flex justify-center items-center pt-80 pl-10 lg:pl-20 text-4xl">
            BIENVENUE SUR LE PORTFOLIO
          </h1>
          <h1 className=" text-[#ebc5f5] flex justify-center items-center pt-20 pl-10 lg:pl-20 text-4xl">
            DE LUCAS MARCHAND-PORET
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <Caroussel />
        </div>
        <div>
          <AnchorLink offset={() => 100} href="#about">
            <BsFillArrowDownSquareFill />
          </AnchorLink>
        </div>
      </div>
      <div
        id="about"
        className="mt-8 mx-4 p-4 flex flex-col items-center "
      >
        <div className="contain lg:py-6 lg:w-1/2">
          <div>
            <h1 className="flex justify-center py-4 text-[#07061b]  dark:text-[#5ce1e6] font-tiltprismRegular">
              A propos
            </h1>
          </div>
          <div className="rounded-full justify-center flex py-4">
            <img
              src="/js.svg"
              alt=""
              className="rounded-full"
              width={75}
              height={75}
            />
          </div>
          <div className="flex justify-center py-4 px-4 ">
            <p className="flex justify-center text-sm lg:px-8 font-handjetRegular text-[#611a8d] dark:text-[#ebc5f5]">
              Bonjour je m'appelle Lucas Marchand-Poret j'ai 25ans. Je suis
              Devellopeur web et web mobile en sorti de formation.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
