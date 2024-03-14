import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { NAV_LINKS } from "@/constans";

export default function Navbar() {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-[16px] font-[400] text-black-100 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
        <CustomButton
          title="Giriş Yap"
          btnType="button"
          containerStyles="text-white rounded-full bg-gray-500 min-w-[130px] hover:bg-black-100"
        />
      </nav>
    </header>
  );
}
