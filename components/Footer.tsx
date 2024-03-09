import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constans";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">Carhub 2024</p>
          <p className="text-base text-gray-700">
            Fatih Sultan Mehmet Mahallesi Balkan Caddesi No:18 <br />
            Buyaka A Blok Tepeüstü / Ümraniye 34851 İSTANBUL
          </p>
          <p className="text-base text-gray-700">
            T: (0 216) 159 56 00
            <br />
            F: (0 216) 451 91 56
          </p>
          <p className="text-base text-gray-700">
            E-Posta: info@carhub.com.tr <br />
            MERSIS: 015150934760087814
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 className="font-bold"> {link.title} </h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p> @2024 Carhub. Tüm hakları saklıdır &copy;</p>
        <div className=" flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="text-gray-500">
            Gizlilik Politikası
          </Link>
          <Link href="/" className="text-gray-500">
            Kullanım Şartları
          </Link>
        </div>
      </div>
    </footer>
  );
}
