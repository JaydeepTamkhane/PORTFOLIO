import React from "react";
// import jd_image from "../assets/profile/JD.jpg";

function IntroductionSection() {
  return (
    <>
      <div className="gap-8 flex flex-col text-center p-8 border-2 border-gray-600 rounded-xl mt-4 text-lg transfor transition-all duration-300 hover:scale-105  hover:border-white hover:text-gray-300">
        <h1 className="text-2xl lg:text-3xl text-gray-200 font-bold">Jaydeep Lilachand Tamkhane</h1>
        <p>
          Motivated computer engineering student with strong expertise in
          full-stack web development. Proficient in technologies like React,
          Node.js, Express.js, and MongoDB, with a focus on creating efficient
          and scalable applications.
        </p>
        <p>
          Skilled in crafting responsive UI designs, integrating RESTful APIs,
          and managing state effectively. Experienced in problem-solving, with a
          proven track record of tackling advanced DSA challenges across
          multiple platforms.
        </p>
        <p>
          Proficient in version control, database management, and collaborative
          development using tools like Git, Postman, and MongoDB Atlas.
          Continuously driven to learn and deliver innovative, efficient
          solutions.
        </p>
      </div>
    </>
  );
}

export default IntroductionSection;
