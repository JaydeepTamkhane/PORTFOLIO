import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [leetcodeData, setLeetcodeData] = useState({
    userProfile: null,
    contestData: null,
  });
  const [codeChefData, setCodeChefData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeetCodeData = useCallback(async () => {
    try {
      const [userProfileResponse, contestDataResponse] = await Promise.all([
        axios.get(
          "https://alfa-leetcode-api.onrender.com/userProfile/jaydeeptamkahne"
        ),
        axios.get(
          "https://alfa-leetcode-api.onrender.com/jaydeeptamkahne/contest"
        ),
      ]);
      setLeetcodeData({
        userProfile: userProfileResponse.data,
        contestData: contestDataResponse.data,
      });
    } catch (e) {
      console.error("Error fetching LeetCode data: ", e);
      setError("Failed to load LeetCode data.");
    }
  }, []);

  const fetchCodeChefData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://codechef-api.vercel.app/handle/jaydeeptamkahn"
      );
      setCodeChefData(response.data);
    } catch (e) {
      console.error("Error fetching CodeChef data: ", e);
      setError("Failed to load CodeChef data.");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchLeetCodeData(), fetchCodeChefData()]);
      setLoading(false);
    };
    fetchData();
  }, [fetchLeetCodeData, fetchCodeChefData]);

  return (
    <DataContext.Provider
      value={{ leetcodeData, codeChefData, loading, error }}
    >
      {children}
    </DataContext.Provider>
  );
};
