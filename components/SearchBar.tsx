"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

export default function SearchBar() {
  const [manufacturer, setManuFacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl">
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
}
