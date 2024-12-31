import React from "react";
import IntroductionSection from "../components/IntroductionSection";
import Skills from "../components/Skills";
import ProfilesCard from "../components/ProfilesCard";

function Profile() {
  return (
    <div className="flex flex-col gap-6 pb-4">
      
      <IntroductionSection />
      <ProfilesCard />
      <Skills />
    </div>
  );
}

export default Profile;
