import { CustomFilter, SearchBar } from "@/components";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x paddding-y max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğiniz araçları keşfedin</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className=" flex justify-start flex-wrap items-center gap-2">
            <CustomFilter
            // title="Yakıt"
            />
            <CustomFilter
            // title="Yıl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
