import CampaignCard from "@/components/CampaignCard";
import React from "react";

export default function page() {
  return (
    <div className="  xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto pb-20">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabol">
          Öne çıkan kampanyalar
        </h1>
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>{" "}
    </div>
  );
}
