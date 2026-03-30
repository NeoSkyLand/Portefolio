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
              DE LUCAS MARCHAND-PORET !
            </h1>
          </div>
          <div className=" text-gray-300 flex justify-center xl:py-48">
            <AnchorLink offset={() => 100} href="#about">
              <BsFillArrowDownSquareFill />
            </AnchorLink>
          </div>
        </div>
      </section>
      <div id="about" className="mt-8  flex flex-col items-center ">
        <div className="contain-card dark:containD  lg:w-1/2 w-4/5">
          <div className="">
            <div>
              <h1 className="flex justify-center py-4 text-[#07061b]  dark:text-[#5ce1e6] font-orbitron text-3xl">
                A propos
              </h1>
            </div>
            <div className="rounded-full justify-center flex py-4">
              <Image
                src="/PhotoMoi.svg"
                width={100}
                height={100}
                alt="moi"
                className="rounded-2xl"
              />
            </div>
            <div className="flex justify-center py-4 px-4 ">
              <p className="flex justify-center lg:px-8 font-handjetRegular text-[#611a8d] dark:text-[#ebc5f5] text-2xl">
                « YOLO Dès l&apos;enfance, je me suis pris de passion pour les jeux
                vidéos ainsi que l&apos;informatique de façon globale.
                C&apos;est ainsi, une pièce en amenant une autre, que j&apos;ai
                pu découvrir les différents composants d&apos;un
                ordinateur. Ce qui m&apos;a rapidement permis par la suite de
                monter les miens. Mes études d&apos;informatique m&apos;ont
                également permis d&apos;acquérir une solide expérience dans le
                domaine mais aussi de renforcer les bases déjà existantes. Féru
                de langage informatique et HTML j&apos;ai désormais comme
                ambition d&apos;en faire mon métier et pourquoi pas, par la
                suite, me lancer dans la création d&apos;IA. »
              </p>
            </div>

            <div className=" flex justify-end flex-col p-5">
              <p className="flex justify-end px-5 lg:px-8 font-handjetRegular text-[#611a8d] dark:text-[#ebc5f5] text-2xl">Lucas Marchand-Poret, 27 ans</p>
              <p className="flex justify-end px-5 lg:px-8 font-handjetRegular text-[#611a8d] dark:text-[#ebc5f5] text-2xl">Développeur Junior web et web mobile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
