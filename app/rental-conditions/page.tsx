import Link from "next/link";
import React from "react";
import Image from "next/image";
import { corporate } from "@/constans";

export default function page() {
  return (
    <div className="  xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto pb-20">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabol">
          Kiralama Koşulları
        </h1>
        <div className="border 1px solid black" />
        <p className="text-[17px] text-black-100 font-light mt-5">
          CarHub, her geçen gün artan şube sayısı, her kiralama için detaylı
          şekilde hijyen standartları sağlanan araçlar ile günlük ve aylık
          kurumsal araç ihtiyaçlarınıza çözüm sunmaktadır. Geniş araç
          çeşitliliği ile kurumsal kiralamaya özel avantajlı kiralama koşulları
          siz değerli müşterilerimizi bekliyor.
        </p>
      </div>
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h3 className="xl:text-[22px] sm:text-[14px] text-[50px] font-extrabol">
          Kurumsal Müşterilerimize Özel Ayrıcalıklarımız;
        </h3>
        {corporate.map((item) => (
          <li key={item} className="text-[20px] text-black-100 font-light mt-5">
            {" "}
            {item}{" "}
          </li>
        ))}
      </div>
      <div className=" absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
    </div>
  );
}
