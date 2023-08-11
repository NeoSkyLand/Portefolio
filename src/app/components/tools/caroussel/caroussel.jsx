"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Caroussel = () => {
  return (
    <section>
      <Carousel>
        <div>
          <Image src="/next.svg" width={100} height={100} alt="NExt" />
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </section>
  );
};
export default Caroussel;
