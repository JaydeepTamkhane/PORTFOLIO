import React, { useContext } from "react";
import { SiLeetcode } from "react-icons/si";
import { DataContext } from "../context/DataContext";

function LeetcodeCard() {
  const { leetcodeData, loading, error } = useContext(DataContext);

  if (loading) {
    return <p className="text-center">Loading LeetCode data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  const { userProfile, contestData } = leetcodeData;

  return (
    <div className="transform mt-4 flex w-full flex-col lg:flex-row items-center gap-8 overflow-hidden rounded-xl border-2 border-gray-600 text-lg transition-all duration-300 hover:scale-105 hover:border-white hover:text-gray-200">
      <a
        href="https://leetcode.com/jaydeeptamkahne/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode className="h-full w-52 sm:w-80 transform rounded-xl object-cover m-4 text-lg transition-all duration-300 hover:scale-105 hover:border-white hover:text-white" />
      </a>
      <div className="w-full flex flex-col items-center gap-6 p-4 justify-center">
        <h2 className="text-xl font-bold text-center text-gray-200">
          LeetCode
        </h2>

        <div className="flex w-full flex-wrap justify-around items-start gap-8 sm:gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Problems Data:</p>
            <p>
              <span className="font-medium">Easy:</span>{" "}
              {userProfile?.easySolved ?? 0}/{userProfile?.totalEasy ?? 0}
            </p>
            <p>
              <span className="font-medium">Medium:</span>{" "}
              {userProfile?.mediumSolved ?? 0}/{userProfile?.totalMedium ?? 0}
            </p>
            <p>
              <span className="font-medium">Hard:</span>{" "}
              {userProfile?.hardSolved ?? 0}/{userProfile?.totalHard ?? 0}
            </p>
            <p>
              <span className="font-medium">Total Solved:</span>{" "}
              {userProfile?.totalSolved ?? 0}/{userProfile?.totalQuestions ?? 0}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Contest Data:</p>
            <p>
              <span className="font-medium">Contests Attended:</span>{" "}
              {contestData?.contestAttend ?? 0}
            </p>
            <p>
              <span className="font-medium">Rating:</span>{" "}
              {contestData?.contestRating?.toFixed(2) ?? "N/A"}
            </p>
            <p>
              <span className="font-medium">Ranking:</span>{" "}
              {contestData?.contestGlobalRanking ?? "N/A"}/
              {contestData?.totalParticipants ?? "N/A"}
            </p>
            <p>
              <span className="font-medium">Top Percentage:</span>{" "}
              {contestData?.contestTopPercentage ?? "N/A"}%
            </p>
          </div>
        </div>

        <a
          href="https://leetcode.com/jaydeeptamkahne/"
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

export default LeetcodeCard;
