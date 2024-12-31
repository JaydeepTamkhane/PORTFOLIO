import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // Define currentYear

  return (
    <div className="fixed bottom-0 w-full bg-black px-10 text-center md:px-20 lg:px-32">
      <p className="text-sm">
        &copy; {currentYear} Jaydeep Lilachand Tamkhane. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
