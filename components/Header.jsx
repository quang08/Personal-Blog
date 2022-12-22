import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react";


function Header() {
  return (
    <div className="container mx-auto px-10 mb-4">
      <div className="border-b w-full inline-block border-gray-400 py-6">
        <div className="flex md:float-left block">
          <Link href="/">
            <span className="ml-2 cursor-pointer font-bold text-4xl">The Quang</span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          
        </div>
      </div>
    </div>
  );
}

export default Header;
