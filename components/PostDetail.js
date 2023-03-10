import React from "react";
import moment from "moment";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function PostDetail({ post }) {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3
            key={index}
            className="text-xl font-semilbold mb-4 dark:text-gray-300"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-xl font-semilbold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-one":
        return (
          <h1 key={index} className="text-xl font-semilbold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h1>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 text-sm md:text-lg dark:text-gray-300">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4
            key={index}
            className="text-md font-semibold mb-4 dark:text-gray-300"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            unoptimized
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="dark:bg-neutral-900 dark:shadow-neutral-700 bg-white shadow-xl rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-none mb-6 py-2 px-2">
        {post.featuredImage.length > 1 ? (
          <Carousel
            infinite
            swipeable={true}
            draggable={true}
            keyBoardControl={true}
            responsive={responsive}
            itemClass="align-center"
            className="h-90"
          >
            {post.featuredImage.map((post, i) => (
              <Image
                unoptimized
                key={i}
                height={30}
                width={30}
                src={post.url}
                alt={i}
                className="object-top h-full w-full rounded-t-lg"
              />
            ))}
          </Carousel>
        ) : (
          <Image
            unoptimized
            height={30}
            width={30}
            src={post.featuredImage[0].url}
            alt={post.title}
            className="object-top h-full w-full rounded-t-lg"
          />
        )}
      </div>

      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-1 w-full">
          <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
            <Image
              unoptimized
              alt={post.author.name}
              height={30}
              width={30}
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="dark:text-gray-400 inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium dark:text-gray-400 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline mr-2 w-6 h-6"
            >
              <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="align-middle">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>

        <h1 className="mb-8 text-3l font-semibold text-2xl border-b-4 dark:border-b-gray-400 py-8">
          {post.title}
        </h1>
        {post.content.raw.children.map((typeObj, i) => {
          const children = typeObj.children.map((item, i) =>
            getContentFragment(i, item.text, item)
          );

          return getContentFragment(i, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
}

export default PostDetail;
