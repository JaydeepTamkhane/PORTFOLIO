import React, { useContext } from "react";
import { SiCodechef } from "react-icons/si";
import { DataContext } from "../context/DataContext";

function CodeChefCard() {
  const { codeChefData, loading, error } = useContext(DataContext);

  if (loading) {
    return <p className="text-center">Loading CodeChef data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!codeChefData) {
    return <p className="text-center">No CodeChef data available</p>;
  }

  return (
    <div className="transform mt-4 flex w-full flex-col lg:flex-row items-center gap-8 overflow-hidden rounded-xl border-2 border-gray-600 text-lg transition-all duration-300 hover:scale-105 hover:border-white hover:text-gray-200">
      <a
        href="https://www.codechef.com/users/jaydeeptamkahn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiCodechef className="h-full w-52 sm:w-80 transform rounded-xl object-cover m-4 text-lg transition-all duration-300 hover:scale-105 hover:border-white hover:text-white" />
      </a>
      <div className="w-full flex flex-col items-center gap-6 p-4 justify-center">
        <h2 className="text-xl font-bold text-center text-gray-200">
          CodeChef
        </h2>

        <div className="flex w-full flex-wrap justify-around items-start gap-8 sm:gap-4">
          {/* Profile Data */}
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Profile Data:</p>
            <p>
              <span className="font-medium">Contests Attended:</span>{" "}
              {codeChefData.ratingData?.length || "N/A"}
            </p>
            <p>
              <span className="font-medium">Current Rating:</span>{" "}
              {codeChefData.currentRating || "N/A"}
            </p>
            <p>
              <span className="font-medium">Highest Rating:</span>{" "}
              {codeChefData.highestRating || "N/A"}
            </p>
            <p>
              <span className="font-medium">Global Rank:</span>{" "}
              {codeChefData.globalRank || "N/A"}
            </p>
            <p>
              <span className="font-medium">Country Rank:</span>{" "}
              {codeChefData.countryRank || "N/A"}
            </p>
            <p>
              <span className="font-medium">Stars:</span>{" "}
              {codeChefData.stars || "N/A"}
            </p>
          </div>
        </div>

        {/* Profile Link */}
        <a
          href="https://www.codechef.com/users/jaydeeptamkahn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full sm:w-1/2 items-center justify-center gap-2 rounded-3xl border-2 border-gray-600 p-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:border-white hover:bg-gray-100 hover:text-black"
        >
          Visit Profile
        </a>
      </div>
    </div>
  );
}

export default CodeChefCard;
