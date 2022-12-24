import React from "react";
import avatar from "../public/profile.png";
import Image from "next/image";

function Bio() {
  return (
    <div className="container dark:bg-gray-800/50  bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <div className="mb-8 border-b pb-4">
        <Image
          className="inline rounded-full"
          width={40}
          height={40}
          src={avatar}
        />
        <div className="inline-block align-middle">
          <h4 className="text-xl ml-3 font-semibold">Nguyen The Quang</h4>
          <p className="ml-3 text-sm">Software Engineer</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        I'm a Computer Science undergrad based in Hanoi, Vietnam. Here you'll
        find my personal blog posts, projects, case studies and all things tech.
      </p>
    </div>
  );
}

export default Bio;
