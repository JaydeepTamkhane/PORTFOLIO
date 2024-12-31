import React from "react";

import LeetcodeCard from "../components/LeetcodeCard";
import CodeChefCard from "../components/CodeChefCard";

function DsaCp() {
  return (
    <div className="py-4 px-4 flex flex-col gap-8">
      <LeetcodeCard />
      <CodeChefCard />
    </div>
  );
}

export default DsaCp;
