import JobLayout from "@/components/JobLayout";
import React from "react";

const NVIDIA = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <JobLayout
        company="NVIDIA"
        role="Software Engineer"
        logoSrc="/NVIDIA.png"
        whyWorkThere="NVIDIA is leading the way in AI, gaming, and high-performance computing. NVIDIA offers competitive salaries and benefits packages with stock options. Another reason I would Like to work there is because NVIDIA Ranks No. 1 as Forbes Debuts List of America’s Best Companies 2025 and is one of the best places to work at."
        techStack="They use C++, Python, CUDA, and some React. I'd need to learn GPU programming and deepen my C++ knowledge."
        goals="Work on cutting-edge AI projects and contribute to real-time rendering or deep learning teams."
        currentSkills="I have React and TypeScript skills and some skills with C# backend , but I would need to level up in C++ and GPU-based computation Have a B.Sc degree or equivalent experience in Computer Science, Computer Engineering, or Electrical Engineering 3+ years of relevant overall professional experience Proficient knowledge of C++, Python.."
        jobLink="https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/details/Software-Engineer_JR1991613?q=sofware"
      />
    </div>
  );
};

export default NVIDIA;
