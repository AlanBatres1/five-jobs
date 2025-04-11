import JobLayout from "@/components/JobLayout";
import React from "react";

const OpenAI = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <JobLayout
        company="OpenAI"
        role="Software Engineer"
        logoSrc="/OpenAi.png"
        whyWorkThere="I want to work at OpenAI because AI is shaping the future and will become the most usefull tool. Being part of a company that has a huge global impact would be great. OpenAI offers great benefits, supports employee growth, and provides long term career stability."
        techStack="OpenAI uses Python, TypeScript, React  similar to my current stack, but I'd need to deepen my ML experience and learn Python."
        goals="Contribute to responsible AI tools and grow into an AI researcher or product engineer."
        currentSkills="I have strong React, TypeScript, and API experience, but I need to learn about AI/ML systems to have the proper skillset for the job."
        jobLink="https://openai.com/careers/analytics-data-engineer-applied-engineering/"
      />
    </div>
  );
};

export default OpenAI;
