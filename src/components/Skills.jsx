import React from "react";
import {
  FaJava,
  FaPython,
  FaGitSquare,
  FaGithub,
  FaCode,
  FaKey,
  FaCogs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiHtml5,
  SiCss3,
  SiPostman,
  SiCplusplus,
  SiRedux,
  SiExpress,
  SiSocketdotio,
  SiMongoose,
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
} from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { GiOwl } from "react-icons/gi";

function Skills() {
  const skills = [
    {
      name: "LANGUAGES",
      items: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "JAVASCRIPT", icon: <IoLogoJavascript /> },
        { name: "JAVA", icon: <FaJava /> },
        { name: "PYTHON", icon: <FaPython /> },
      ],
    },
    {
      name: "FRONTEND",
      items: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JAVASCRIPT", icon: <IoLogoJavascript /> },
        { name: "REACT", icon: <FaReact /> },
        { name: "TAILWIND", icon: <RiTailwindCssFill /> },
        { name: "REDUX", icon: <SiRedux /> },
      ],
    },
    {
      name: "BACKEND",
      items: [
        { name: "NODE", icon: <FaNodeJs /> },
        { name: "EXPRESS", icon: <SiExpress /> },
        { name: "SOCKET.IO", icon: <SiSocketdotio /> },
        { name: "MONGOOSE", icon: <SiMongoose /> },
        { name: "JWT", icon: <FaKey /> },
      ],
    },
    {
      name: "DATABASES",
      items: [
        { name: "MONGODB", icon: <BiLogoMongodb /> },
        { name: "MYSQL", icon: <GrMysql /> },
      ],
    },
    {
      name: "TOOLS",
      items: [
        { name: "GIT", icon: <FaGitAlt /> },
        { name: "GITHUB", icon: <FaGithub /> },
        { name: "VS CODE", icon: <VscVscode /> },
        { name: "POSTMAN", icon: <SiPostman /> },
      ],
    },
  ];

  return (
    <div className="transfor mt-4 flex w-full flex-col items-center gap-14 overflow-x-clip rounded-xl border-2 border-gray-600 text-lg  transition-all duration-300 hover:scale-105 hover:border-white">
      <table className="w-full table-auto border-collapse border border-gray-600 rounded-lg overflow-hidden">
        <thead>
          <tr className="border-b border-t border-gray-600 ">
            <th className="px-2 py-2 text-base font-semibold text-gray-200 sm:px-4 sm:text-xl sm:font-bold">
              Category
            </th>
            <th className="px-2 py-2 text-base font-semibold text-gray-200 sm:px-4 sm:text-xl sm:font-bold">
              Skills
            </th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr
              key={skill.name}
              className="border-b border-t border-gray-700 lg:my-4"
            >
              <td className="px-2 py-2 text-sm font-medium text-gray-200 sm:px-4 sm:text-lg sm:font-semibold">
                {skill.name}
              </td>
              <td className="py-3 text-sm font-medium hover:text-gray-200 sm:px-4 sm:text-lg sm:font-semibold lg:py-4">
                <ul className="flex flex-wrap gap-5">
                  {skill.items.map((item, id) => (
                    <li
                      key={id}
                      className="flex items-center gap-2 text-sm font-normal sm:text-base sm:font-medium"
                    >
                      {item.icon} {item.name}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Skills;
