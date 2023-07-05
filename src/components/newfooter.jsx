import React from "react";
import Link from "next/link";
export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="w-full pt-4  bg-[#222222] mt-0 text-gray-300  font-roboto-condensed leading-8 tracking-normal">
      <div className="w-full flex flex-col items-center ">
        <div className="flex jusitify-between bg-[#222222] my-8 ">
          <Link href="" className="rounded-full">
            <img src="/facebook.svg" className="bg-white mx-2 rounded-full" />
          </Link>
          <Link href="" className="rounded-full">
            <img
              src="/twitter-round.svg"
              className="bg-white mx-2 rounded-full"
            />
          </Link>
          <Link href="" className="rounded-full">
            <img
              src="/instagram-f-svgrepo-com.svg"
              className="bg-white mx-2 rounded-full"
            />
          </Link>
          <Link href="" className="rounded-full">
            <img
              src="/youtube-round.svg"
              className="bg-white mx-2 rounded-full"
            />
          </Link>
        </div>
        <div className="flex jusitify-start my-8 text-gray-300  font-roboto-condensed leading-8 tracking-normal ">
          <Link href="" className="text-gray-400 mx-1">
            Site map
          </Link>
          <Link href="" className="text-gray-400 mx-1">
            {" "}
            About
          </Link>
          <Link href="" className="text-gray-400 mx-1">
            Accessibility
          </Link>
          <Link href="" className="text-gray-400 mx-1">
            {" "}
            Privacy
          </Link>
          <Link href="" className="text-gray-400 mx-1">
            {" "}
            Terms of Use{" "}
          </Link>
          <Link href="" className="text-gray-400 mx-1">
            Advertising{" "}
          </Link>{" "}
          <Link href="" className="text-gray-400 mx-1">
            Jobs
          </Link>
        </div>
        <div className="flex jusitify-start mt-8 text-gray-400 mx-1">
          more info
        </div>
        <div className="flex justify-start text-gray-400 mx-1">
          {" "}
          <Link href="" className="text-gray-400 mx-1">
            Mashable
          </Link>
          <Link href="" className="text-gray-400 mx-1">
            {" "}
            PCMagt
          </Link>
          <Link href="" className="text-gray-400 mx-1">
            ExtremeTech
          </Link>
          <Link href="" className="text-gray-400 mx-1">
            {" "}
            AskMen
          </Link>
          <Link href="" className="text-gray-400 mx-1">
            {" "}
            Spiceworks{" "}
          </Link>
        </div>
        <div className="flex jusitify-start my-8 text-gray-400 mx-1">
          © {currentYear} Goopim, LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
