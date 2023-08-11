"use client";

import ScrollToTop from "react-scroll-to-top";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ReturnToTop = () => {
  return (

      <ScrollToTop
        smooth
        component={
          <div className="w-full h-full flex justify-center items-center bg-red-500">
            <BsFillArrowUpSquareFill />
          </div>
        }
      />
  );
};

export default ReturnToTop;
