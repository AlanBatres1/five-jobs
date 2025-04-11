import JobLayout from "@/components/JobLayout";
import React from "react";

const Apple = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <JobLayout
        company="Apple"
        role="Software Engineer"
        logoSrc="/Apple.png"
        whyWorkThere="Apple prioritizes privacy, simplicity, and quality. They offer a collaborative work environment which makes them a great company to work for. Apple offers comprehensive benefits including health plans, 401(k) matching, stock options, and paid time off. The competitive compensation and strong work-life balance further contribute to why I’d love to be part of their team."
        techStack="Apple uses Swift, Objective-C, Python, and React. I'd need to learn Swift and deepen my mobile dev skills. "
        goals="Work on intuitive user interfaces or contribute to next-gen iOS development tools."
        currentSkills="I have front-end and TypeScript knowledge, but would learn iOS-specific tools and Swift. BS/MS in Computer Science OR equivalent degree OR equivalent experience"
        jobLink="https://jobs.apple.com/en-us/details/200593704/software-engineer?team=SFTWR"
      />
    </div>
  );
};

export default Apple;
