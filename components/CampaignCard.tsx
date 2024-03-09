"use client";

import Image from "next/image";
import { CustomButton } from ".";
import { useState } from "react";

export default function CampaignCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="relative w-full h-40 object-contain">
        <Image
          src="/campaign.png"
          alt="car model"
          width={400}
          height={400}
          className=" object-contain rounded-xl"
        />
      </div>
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          tuna
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          ₺
        </span>
        tuna
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /günlük
        </span>
      </p>
      <div className="relative flex w-full mt-2">
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          {/* <CustomButton
            title="Daha Fazla Görüntüle"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          /> */}
        </div>
      </div>
    </div>
  );
}
