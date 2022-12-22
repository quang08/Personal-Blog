import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  return (
    <div className="container mx-auto px-10 mb-4">
      <div className="border-b w-full inline-block border-gray-400 py-6">
        <div className="flex md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl">
              The Quang
            </span>
          </Link>
        </div>

        <div className="md:float-left md:contents mt-4 text-lg">
          <Link href="/projects">
            <span className="md:float-right mt-2 align-middle text-black ml-2 lg:ml-4  font-semibold cursor-pointer hover:border-b-2 border-gray-400">
              Projects
            </span>
          </Link>
          <Link href="/about">
            <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer hover:border-b-2 border-gray-400">
              About
            </span>
          </Link>
          <Link href="/">
            <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer hover:border-b-2 border-gray-400">
              Articles
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Header;
