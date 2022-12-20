import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import avatar from '../public/profile.png';

const categories = [
  {
    name: "React",
    slug: "react",
  },
  {
    name: "Next",
    slug: "next",
  },
];

function Header() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-400 py-6">
        <div className="flex  md:float-left block">
          <Image
            className="inline rounded-full mr-2"
            src={avatar}
            alt="Picture of the author"
            width={45} 
            height={45}
          />
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl">The Quang</span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 ml-4 align-middle font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
