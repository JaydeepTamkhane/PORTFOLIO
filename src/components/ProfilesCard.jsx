import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { GiOwl } from "react-icons/gi";

function ProfilesCard() {
  const profileLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jaydeep-lilachand-tamkhane/",
      icon: <FaLinkedin />,
      size: 50,
    },
    {
      name: "Github",
      url: "https://github.com/JaydeepTamkhane",
      icon: <FaGithub />,
      size: 50,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/jaydeeptamkahne/",
      icon: <SiLeetcode />,
      size: 50,
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/jaydeeptamkahn",
      icon: <SiCodechef />,
      size: 50,
    },
    {
      name: "GFG",
      url: "https://www.geeksforgeeks.org/user/jaydeept9m2o/",
      icon: <SiGeeksforgeeks />,
      size: 50,
    },

    {
      name: "Codolio",
      url: "https://codolio.com/profile/Jaydeep",
      icon: <GiOwl />,
      size: 50,
    },
  ];
  return (
    <div className="transfor mt-4 flex flex-col gap-8 rounded-xl border-2 border-gray-600 p-8 text-lg  transition-all duration-300 hover:scale-105 hover:border-white">
      <h1 className="text-center text-xl font-bold text-gray-200">Profiles</h1>
      <div className="flex flex-wrap items-center justify-around gap-3 sm:gap-6">
        {profileLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-smooth flex transform flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:text-white"
          >
            {React.cloneElement(link.icon, {
              size: link.size,
              className:
                "hover:shadow-white hover:shadow-[0_0_10px_0]  hover:bg-white hover:text-black rounded-full p-1",
            })}
            <h2>{link.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProfilesCard;
