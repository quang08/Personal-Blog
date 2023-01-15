import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

import { getCategories } from "../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const categoryCarousel = () => {
    const [categories, setCategories] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        getCategories().then((newCategories) => {
        setCategories(newCategories);
        setDataLoaded(true);
        });
    }, []);

  const customLeftArrow = (
    <div className="flex justify-center absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-gray-400 dark:bg-neutral-800 rounded-full hover:text-teal-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="flex justify-center absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-gray-400 dark:bg-neutral-800 rounded-full hover:text-teal-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </div>
  );

  return (
    <div className="text-center">
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="px-4 align-center"
        className="h-14 md:h-28"
      >
        {dataLoaded &&
          categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="carousel relative align-middle text-center rounded-full px-3 py-3 text-sm bg-gray-200 dark:text-white dark:bg-neutral-800 text-black transition duration-300 hover:text-teal-400 dark:hover:text-teal-400">
                {category.name}
              </span>
            </Link>
          ))}
      </Carousel>
    </div>
  );
};

export default categoryCarousel;