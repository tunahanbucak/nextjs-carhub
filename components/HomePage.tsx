"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";
import { information, locations } from "@/constans";

export default function HomePage() {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto mt-20 ">
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0 ">
          <Image src="/BMW.png" alt="hero" fill className="object-contain" />
        </div>
        <div className=" absolute xl:-top-24 xl:-left-1/2 -left-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
      <div className="flex-1  sm:px-16 px-6">
        <h1 className="2xl:text-[42px] sm:text-[64px] text-[50px] font-extrabol">
          Araç Kiralarken Nelere Dikkat Etmeliyim?
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          CarHub üzerinden araç kiralarken dikkat etmeniz gereken noktaları
          sizin için listeledik.
        </p>
        {information.map((item) => (
          <li
            key={item}
            className="text-[20px] text-black-100 font-light mt-5 h-auto">
            {item}
          </li>
        ))}
      </div>
    </div>
  );
}
