import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import leetMertic from "../assets/projects/leetMetric.png";
import passBuilder from "../assets/projects/passBuilder.png";
import studySync from "../assets/projects/studySync.png";
import productStore from "../assets/projects/productStore.png";
import todoList from "../assets/projects/todoList.png";
import portfolio from "../assets/projects/portfolio.png";

function Projects() {
  const projects = [
    {
      title: "Portfolio",
      imageUrl: portfolio,
      description:
        "A personal portfolio website showcasing my skills, projects, and achievements as a full-stack developer.",
      tags: [
        "React",
        "Tailwind_Css",
        "NPM_packages",
        "Frontend",
        "API_Integration",
        "State_Management",
      ],
      githubRepoLink: "https://github.com/JaydeepTamkhane/PORTFOLIO",
      livePreviewLink: "https://jaydeep-portfolio-vert.vercel.app",
    },
    {
      title: "ProductStore",
      imageUrl: productStore,
      description:
        "A web application to manage products in an online store, allowing users to create, update, and view products seamlessly.",
      tags: [
        "MERN",
        "Full_Stack",
        "Frontend",
        "Backend",
        "React",
        "Tailwind_Css",
        "NPM_packages",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "State_Management",
      ],
      githubRepoLink: "https://github.com/JaydeepTamkhane/MERN_PRODUCT_STORE",
      livePreviewLink: "https://mern-product-store-frontend.onrender.com/",
    },
    {
      title: "LeetMetric",
      imageUrl: leetMertic,
      description:
        "A web app to retrieve and display LeetCode user statistics, helping users track their coding progress.",
      tags: ["Frontend", "React", "Tailwind_Css", "JavaScript", "LeetcodeApi"],
      githubRepoLink: "https://github.com/JaydeepTamkhane/LEETMETRIC",
      livePreviewLink: "https://leetmetric.vercel.app/",
    },
    {
      title: "PassBuilder",
      imageUrl: passBuilder,
      description:
        "A password generator that allows users to generate customizable passwords with adjustable length, numbers, and special characters.",
      tags: ["Frontend", "React", "Tailwind_Css", "JavaScript"],
      githubRepoLink:
        "https://github.com/JaydeepTamkhane/ReactPasswordGenerator",
      livePreviewLink: "https://react-password-generator-six-delta.vercel.app/",
    },
    {
      title: "TodoList",
      imageUrl: todoList,
      description: "A simple task manager application to organize tasks.",
      tags: ["Frontend", "HTML", "CSS", "JavaScript"],
      githubRepoLink: "https://github.com/JaydeepTamkhane/To-Do-List",
      livePreviewLink: "https://jaydeeptamkhane.github.io/To-Do-List/",
    },
    {
      title: "StudySync",
      imageUrl: studySync,
      description:
        "A study collaboration platform to organize study materials and manage group sessions, built with HTML and CSS.",
      tags: ["Frontend", "HTML", "CSS"],
      githubRepoLink: "https://github.com/JaydeepTamkhane/StudySync",
      livePreviewLink: "https://jaydeeptamkhane.github.io/StudySync/",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [order, setOrder] = useState("new-to-old");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const filterAndSortProjects = () => {
      let filtered = projects;

      if (filter !== "all") {
        filtered = projects.filter((project) =>
          filter === "Frontend"
            ? project.tags.includes("Frontend")
            : project.tags.includes("Full_Stack")
        );
      }

      if (searchTerm.trim()) {
        const normalizedSearchTerm = searchTerm.toLowerCase();
        filtered = filtered.filter(
          (project) =>
            project.title.toLowerCase().includes(normalizedSearchTerm) ||
            project.tags.some((tag) =>
              tag.toLowerCase().includes(normalizedSearchTerm)
            )
        );
      }

      const sorted =
        order === "new-to-old" ? filtered : [...filtered].reverse();

      setFilteredProjects(sorted);
    };

    filterAndSortProjects();
  }, [searchTerm, order, filter]);

  const toggleOrder = () => {
    setOrder((prevOrder) =>
      prevOrder === "new-to-old" ? "old-to-new" : "new-to-old"
    );
  };

  const handleFilter = (type) => {
    setFilter(type);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <input
        type="text"
        placeholder="Search by project name or skills or tag..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded-md sm:w-1/2 w-full bg-black text-white placeholder:text-gray-100"
      />

      <div className="w-full sm:w-1/2 flex gap-4 flex-wrap text-gray-400 text-xs">
        <button
          onClick={toggleOrder}
          className="flex-1 rounded-lg border-2 border-gray-600 bg-black px-4 py-2  transition-colors duration-150 hover:border-white hover:text-white"
        >
          {order === "new-to-old" ? "Old_to_New" : "New_to_Old"}
        </button>

        <button
          onClick={() => handleFilter("Frontend")}
          className="flex-1 rounded-lg border-2 border-gray-600 bg-black px-4 py-2 transition-colors duration-150 hover:border-white hover:text-white"
        >
          Frontend
        </button>
        <button
          onClick={() => handleFilter("Full_Stack")}
          className="flex-1 rounded-lg border-2 border-gray-600 bg-black px-4 py-2  transition-colors duration-150 hover:border-white hover:text-white"
        >
          Full_Stack
        </button>
        <button
          onClick={() => handleFilter("all")}
          className="flex-1 rounded-lg border-2 border-gray-600 bg-black px-4 py-2 transition-colors duration-150 hover:border-white hover:text-white"
        >
          All
        </button>
      </div>

      <div className="flex gap-8 flex-wrap justify-center">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
