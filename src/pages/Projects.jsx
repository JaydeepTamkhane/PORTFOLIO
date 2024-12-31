import React from "react";
import ProjectCard from "../components/ProjectCard";
import leetMertic from "../assets/projects/leetMetric.png";
import passBuilder from "../assets/projects/passBuilder.png";
import studySync from "../assets/projects/studySync.png";

import productStore from "../assets/projects/productStore.png";
import todoList from "../assets/projects/todoList.png";


function Projects() {
  const projects = [
    {
      title: "ProductStore",
      imageUrl: productStore, // Replace with the real image URL
      description:
        "A web application to manage products in an online store, allowing users to create, update, and view products seamlessly.",
      tags: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB","ContextApi"],
      githubRepoLink: "https://github.com/JaydeepTamkhane/MERN_PRODUCT_STORE",
      livePreviewLink: "https://mern-product-store-frontend.onrender.com/",
    },
    {
      title: "LeetMetric",
      imageUrl:leetMertic, // Replace with the real image URL
      description:
        "A web app to retrieve and display LeetCode user statistics, helping users track their coding progress.",
      tags: ["React", "Tailwind", "JavaScript", "LeetcodeApi"],
      githubRepoLink: "https://github.com/JaydeepTamkhane/LEETMETRIC",
      livePreviewLink: "https://leetmetric.vercel.app/",
    },
    {
      title: "PassBuilder",
      imageUrl:passBuilder, // Replace with the real image URL
      description:
        "A password generator that allows users to generate customizable passwords with adjustable length, numbers, and special characters.",
      tags: ["React", "Tailwind", "JavaScript"],
      githubRepoLink: "https://github.com/JaydeepTamkhane/ReactPasswordGenerator",
      livePreviewLink: "https://react-password-generator-six-delta.vercel.app/",
    },
    {
      title: "TodoList",
      imageUrl: todoList, // Replace with the real image URL
      description: "A simple task manager application to organize tasks.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubRepoLink: "https://github.com/JaydeepTamkhane/To-Do-List",
      livePreviewLink: "https://jaydeeptamkhane.github.io/To-Do-List/",
    },
    {
      title: "StudySync",
      imageUrl:studySync, // Replace with the real image URL
      description: "A study collaboration platform to organize study materials and manage group sessions, built with HTML and CSS.",
      tags: ["HTML", "CSS"],
      githubRepoLink: "https://github.com/JaydeepTamkhane/StudySync",
      livePreviewLink: "https://jaydeeptamkhane.github.io/StudySync/",
    },    
  ];
  return (
    
      <div className="flex gap-8  flex-wrap justify-center items-center flex-col">
      {projects.map((project, ind) => {
        return <ProjectCard key={ind} project={project} />;
      })}
    </div>

    
    


  );
}

export default Projects;
