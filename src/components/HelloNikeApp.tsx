// src\components\HelloNikeApp.tsx
import Link from "next/link";
import React from "react";

function HelloNikeApp() {
  return (
    <div className="w-full bg-[#F5F5F5] pt-[10px] pb-[4px] flex flex-col gap-[5px] justify-center items-center">
      <h1
        className="font-medium text-[15px] leading-[16px]">Hello Nike App</h1>
      <p className="hidden xsm:block font-normal text-[11px] leading-[24px]">
        Download the app to access everything Nike.{" "}
        <Link href="#" className="text-[#3A3A3A] font-medium underline">
          Get Your Great
        </Link>
      </p>
    </div>
  );
}

export default HelloNikeApp;
