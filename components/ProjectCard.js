import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

function ProjectCard({ project }) {
  return (
    <div className="dark:bg-neutral-900 dark:shadow-neutral-700 bg-white transition duration-300 hover:-translate-y-2  shadow-2xl rounded-lg px-3 lg:p-8 pb-12 mb-8 md:py-2 sm:py-4">
      <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
        <Image
          unoptimized
          alt={project.title}
          className="shadow-lg rounded-t-lg lg:rounded-lg"
          layout="fill"
          src={project.featuredImage[0].url}
        />
      </div>
      <div className="dark:text-white flex justify-between font-medium text-gray-700 mb-3 px-1">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 inline mr-2"
          >
            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="align-middle">
            {moment(project.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <p className="ml-5 dark:text-white dark:bg-neutral-700 text-sm rounded-full inline transition duration-300 bg-gray-200 hover:bg-blue-400 px-2 py-2">
          {project.categories[0].name}
        </p>
      </div>

      <h1 className="transition duration-300 text-left text-3xl font-semibold mb-5 px-1 cursor-pointer hover:text-blue-400">
        <Link href={`/project/${project.slug}`}>{project.title}</Link>
      </h1>

      {/*<div className="block flex text-center items-center justify-start w-full">
        <div className="flex items-left justify-start mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
          <Image
            className="align-middle rounded-full"
            height={40}
            width={40}
            src={project.featuredImage.url}
          />
          <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
            {project.name}
          </p>
        </div>
  </div> */}

      <p className="dark:text-gray-400 flex justify-start text-left text-lg text-gray-700 font-normal px-1 mb-5">
        {project.excerpt.substring(0, 200)}...
      </p>

      <div className="text-left font-medium mb-5 transition duration-500 ease transform hover:-translate-y-1  hover:text-blue-400">
        <Link href={`/project/${project.slug}`}>
          <span className="text-lg font-medium px-1 cursor-pointer inline-block">
            Continue Reading
          </span>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 inline mb-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default ProjectCard;
