import React from "react";
import { useRouter } from "next/router";
import { getProjectDetails, getProjects } from "../../services";

import {
  Loader,
  ProjectDetail,
  Comments,
  CommentsForm,
  Contact,
  Categories,
} from "../../components";

function Project({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <ProjectDetail project={project} />
          <CommentsForm slug={project.slug} />
          <Comments slug={project.slug} />
        </div>
        <div className="lg:p-4 pb-12 mb-8 col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Contact
              project={project}
              slug={project.slug}
              categories={project.categories.map((cat) => cat.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

export async function getStaticProps({ params }) {
  const data = await getProjectDetails(params.slug);

  return {
    props: { project: data },
  };
}

export async function getStaticPaths() {
  const projects = await getProjects();

  return {
    paths: projects.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
