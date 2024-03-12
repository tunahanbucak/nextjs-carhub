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
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 cursor-pointer">
        <CampaignCard
          title="CarHub'dan araç kiralarken ödemenizi online yapın, %30 indirim
          kazanın!"
          image="/car.jpg"
        />
        <CampaignCard
          title="CarHub'dan araç kiralarken ödemenizi online yapın, %30 indirim
          kazanın!"
          image="/car.jpg"
        />
        <CampaignCard
          title="CarHub'dan araç kiralarken ödemenizi online yapın, %30 indirim
          kazanın!"
          image="/car.jpg"
        />
        {/* <CampaignCard
          title="CarHub Müşterileri İstanbul'da Tek Yön Ücreti Ödemiyor"
          image="/car.jpg"
        />
        <CampaignCard
          title="Garanti BBVA Kart Sahiplerine Özel %35 İndirim!"
          image="/garanti.webp"
        />
        <CampaignCard
          title="7 gün üzeri Tüm Araç Kiralamarında %45 İndirim"
          image="/campaign.png"
        />
        <CampaignCard
          title="Açılışa Özel %40 İndirimle Ümraniye'deyiz"
          image="/car.jpg"
        /> */}
      </div>
    </div>
  );
}
