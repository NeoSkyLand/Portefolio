"use client";
import React from "react";
import { Chrono } from "react-chrono";
import data from "@/app/home/sections/timeline/data.json";

const CardTimeline = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Chrono
          hideControls={true}
          items={data}
          mode="VERTICAL_ALTERNATING"
          scrollable
          slideshow
          theme={{
            primary: "red",
            secondary: "yellow",
            cardBgColor: "white",
            titleColor: "cyan",
            titleColorActive: "red",
          }}
        />
      </div>
    </>
  );
};
export default CardTimeline;
