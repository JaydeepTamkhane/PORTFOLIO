// leetcode
// https://github.com/alfaarghya/alfa-leetcode-api?tab=readme-ov-file

// the below api gives the complete imformation about the total number of problems solved each easy medium hard
// and also give the submission calender to generate the headmap if required in future
// the heatmap is of 1 year
// https://alfa-leetcode-api.onrender.com/userProfile/jaydeeptamkahne
// the below endpoint will help us to fetch the data of the leetcode contest rating etc
// https://alfa-leetcode-api.onrender.com/jaydeeptamkahne/contest

import React, { useState, useEffect, useCallback } from "react";
import { SiLeetcode } from "react-icons/si";
import axios from "axios";

function LeetcodeCard() {
  const [userProfile, setUserProfile] = useState({});
  const [contestData, setContestData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeetCodeData = useCallback(async () => {
    try {
      const userProfile = await axios.get(
        "https://alfa-leetcode-api.onrender.com/userProfile/jaydeeptamkahne"
      );

      const contestData = await axios.get(
        "https://alfa-leetcode-api.onrender.com/jaydeeptamkahne/contest"
      );

      localStorage.setItem("userProfile", JSON.stringify(userProfile.data));
      localStorage.setItem("contestData", JSON.stringify(contestData.data));

      setUserProfile(userProfile.data);
      setContestData(contestData.data);

      setLoading(false);
    } catch (e) {
      console.error("Error fetching Leetcodedata: ", e);
      setLoading(false); // End loading on error
      setError(e.message ? e.message : "Failed to fetch Leetcode data");
    }
  }, []);

  useEffect(() => {
    fetchLeetCodeData(); // Initial fetch
    const intervalId = setInterval(() => {
      fetchLeetCodeData(); // Refetch data every 24 hours (86400000 ms)
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  if (loading) {
    return <p className="text-center">Loading LeetCode data...</p>;
  }

  if (error) {
    return <p className="text-center">{error}</p>;
  }

  return (
    <div className="transform mt-4 flex w-full flex-col lg:flex-row items-center gap-8 overflow-hidden rounded-xl border-2 border-gray-600 text-lg transition-all duration-300 hover:scale-105 hover:border-white hover:text-gray-200">
      <a
        href="https://leetcode.com/jaydeeptamkahne/"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <SiLeetcode className="h-full w-52 sm:w-80 transform rounded-xl object-cover m-4 text-lg transition-all duration-300 hover:scale-105 hover:border-white hover:text-white" />
      </a>
      <div className="w-full flex flex-col items-center gap-6 p-4 justify-center">
        <h2 className="text-xl font-bold text-center text-gray-200">
          LeetCode
        </h2>

        <div className="flex w-full flex-wrap justify-around items-start gap-8 sm:gap-4">
          {/* Problems Data */}
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Problems Data:</p>
            <p>
              <span className="font-medium">Easy:</span>{" "}
              {userProfile.easySolved}/{userProfile.totalEasy}
            </p>
            <p>
              <span className="font-medium">Medium:</span>{" "}
              {userProfile.mediumSolved}/{userProfile.totalMedium}
            </p>
            <p>
              <span className="font-medium">Hard:</span>{" "}
              {userProfile.hardSolved}/{userProfile.totalHard}
            </p>
            <p>
              <span className="font-medium">Total Solved:</span>{" "}
              {userProfile.totalSolved}/{userProfile.totalQuestions}
            </p>
          </div>

          {/* Contest Data */}
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Contest Data:</p>
            <p>
              <span className="font-medium">Contests Attended:</span>{" "}
              {contestData.contestAttend}
            </p>
            <p>
              <span className="font-medium">Rating:</span>{" "}
              {contestData.contestRating.toFixed(2)}
            </p>
            <p>
              <span className="font-medium">Ranking:</span>{" "}
              {contestData.contestGlobalRanking}/{contestData.totalParticipants}
            </p>
            <p>
              <span className="font-medium">Top Percentage:</span>{" "}
              {contestData.contestTopPercentage}%
            </p>
          </div>
        </div>

        {/* Profile Link */}
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
