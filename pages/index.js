import Image from "next/image";
import { PostCard, PostWidget, Categories, Header, Bio } from "../components";
import { getPosts } from "../services";
import { CategoryCarousel } from "../sections/index";
import React from "react";
import favicon from "../public/Q.png";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="h-14 md:h-28">
        <CategoryCarousel />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 md:mt-5">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, i) => (
            <PostCard key={i} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Bio />
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}
