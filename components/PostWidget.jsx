import React, { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    //if there's a slug meaning we're in a post, so if have to show related posts instead of recent ones
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res));
    } else {
      getRecentPosts().then((res) => setRelatedPosts(res));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  console.log(relatedPosts);

  return (
    //transition duration-300 hover:shadow-blue-400/40
    <div className="dark:bg-gray-800/50 bg-white shadow-xl rounded-xl p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>

      {relatedPosts.map((post, i) => (
        <div
          key={i}
          className="flex items-center w-full mb-4 transition duration-300 hover:-translate-y-1"
        >
          <div className="w-16 flex-none">
            <Image
              alt={post.tile}
              height={60}
              width={60}
              src={post.featuredImage[0].url}
              className="align-middle rounded-sm"
            />
          </div>

          <div className="flex-grow ml-4 transition duration-300 hover:text-blue-400">
            <p className="text-gray-500 dark:text-white font xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              className="text-md dark:text-gray-400 dark:hover:text-blue-400"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
