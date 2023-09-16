"use client";

import Caroussel from "@/app/components/tools/caroussel/caroussel";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import Image from "next/image";

const Introduction = () => {
  return (
    <section className="">
      <section id="home">

      <div className="w-full h-screen bg-[url('https://images7.alphacoders.com/654/654644.jpg')] bg-no-repeat bg-cover ">
        <div>
          <h1 className=" text-[#ebc5f5] flex justify-center items-center pt-80 pl-10 lg:pl-20 text-4xl">
            BIENVENUE SUR LE PORTFOLIO
          </h1>
          <h1 className=" text-[#ebc5f5] flex justify-center items-center pt-20 pl-10 lg:pl-20 text-4xl">
            DE LUCAS MARCHAND-PORET
          </h1>
        </div>
        <div className=" text-gray-300 flex justify-center xl:py-48">
          <AnchorLink offset={() => 100} href="#about" >
            <BsFillArrowDownSquareFill />
          </AnchorLink>
        </div>
      </div>
      </section>
      <div
        id="about"
        className="mt-8  flex flex-col items-center "
      >

        <div className="contain-card dark:containD  lg:w-1/2 w-4/5">
        <div className="" >
          <div>
            <h1 className="flex justify-center py-4 text-[#07061b]  dark:text-[#5ce1e6] font-orbitron text-3xl">
              A propos
            </h1>
          </div>
          <div className="rounded-full justify-center flex py-4">
          <Image src="/Photo.jpg" width={100} height={100} alt="moi" className="rounded-full"/>
          </div>
          <div className="flex justify-center py-4 px-4 ">
            <p className="flex justify-center lg:px-8 font-handjetRegular text-[#611a8d] dark:text-[#ebc5f5] text-2xl">
              Bonjour je m&apos;appelle Lucas Marchand-Poret j&apos;ai 25ans. Je suis
              Devellopeur web et web mobile en sorti de formation.{" "}
            </p>
          </div>
        </div>
      </div>
        </div>
    </section>
  );
};
export default Introduction;
