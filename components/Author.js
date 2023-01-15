import React from "react";
import Image from "next/image";

function Author({ author }) {
  return (
    <div className="lg:col-span-4 col-span-1 hidden md:inline-grid w-full">
      <div className="lg:sticky relative top-8">
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg transition duration-300 bg-gray-200 dark:bg-neutral-800">
          <div className="absolute flex justify-center left-0 right-0 -top-14">
            <Image
              alt={author.name}
              unoptimized
              height={100}
              width={100}
              className="align-middle rounded-full"
              src={author.photo.url}
            />
          </div>
          <h3 className="text-gray-800 dark:text-white mt-4 mb-4 text-xl font-bold">
            {author.name}
          </h3>
          <p className="text-black dark:text-white text-ls">{author.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Author;
