import React from "react";
import { useRouter } from "next/router";
import { Categories, Loader, PostCard, ProjectCard } from "../../components";
import {
  getCategories,
  getCategoryPost,
  getCategoryProject,
} from "../../services";

const CategoryPost = ({ posts, projects }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, i) => (
            <PostCard key={i} post={post.node} />
          ))}
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project.node}/>
          ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const projects = await getCategoryProject(params.slug);

  return {
    props: { posts, projects },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();

  return {
    paths: categories.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
