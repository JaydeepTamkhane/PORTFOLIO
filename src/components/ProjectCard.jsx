import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function ProjectCard({ project }) {
  const {
    title,
    imageUrl,
    tags,
    description,
    githubRepoLink,
    livePreviewLink,
  } = project;

  return (
    <div className=" flex transform flex-col items-center justify-center gap-4 rounded-xl border-2 border-gray-600 p-2 transition-all duration-300 hover:scale-105 hover:border-white   md:flex-row md:gap-12 md:rounded-3xl md:p-4 ">
      {/* Image Section */}
      <div className="md:w-1/2 lg:w-1/3">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full transform rounded-xl object-cover transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_white]"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center justify-between space-y-4 md:w-1/2 lg:w-2/3">
        <h2 className="text-3xl font-bold text-gray-100 hover:text-white">
          {title}
        </h2>
        <p className="text-center text-xl text-gray-300 hover:text-gray-100">
          {description}
        </p>

        {/* Tags */}
        <ul className="flex w-full flex-wrap justify-around gap-2">
          {tags.map((tag, ind) => (
            <li
              key={ind}
              className="flex flex-1 items-center justify-around rounded-2xl border-2 border-gray-600 px-2 py-1 text-xs transition-colors duration-300 hover:border-white hover:text-gray-100"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Links (GitHub & Live Demo) */}
        <div className="flex w-full flex-col justify-around gap-2 pt-3 sm:flex-row sm:gap-8">
          {githubRepoLink && (
            <a
              href={githubRepoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 transform items-center justify-center gap-2 rounded-3xl border-2 border-gray-600 p-2 text-lg transition-all duration-300 hover:scale-105 hover:border-white hover:bg-gray-100 hover:text-black"
            >
              GitHub
              <FaGithub className="" />
            </a>
          )}
          {livePreviewLink && (
            <a
              href={livePreviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 transform items-center justify-center gap-2 rounded-3xl border-2 border-gray-600 p-2 text-lg transition-all duration-300 hover:scale-105 hover:border-white hover:bg-gray-100 hover:text-black"
            >
              Live_Demo
              <FaEye className="" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
