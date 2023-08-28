"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Caroussel = () => {
  return (
    <section>
      <Carousel>
        <div>
          <Image src="/white-logo(1).svg" width={100} height={100} alt="Deep404" />
        </div>
        <div>
          <img src="/FND-white-logo.svg" width="sm" height="sm" alt="Flash Not Dead"/>
        </div>
      </Carousel>
    </section>
  );
};
export default Caroussel;
