import Head from "next/head";
import Image from "next/image";
import { ProjectCard } from "../../components";
import { getProjects } from "../../services";
import React from "react";

export default function Projects({ projects }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project.node} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getProjects()

  return {
    props: { projects },
  };
}
