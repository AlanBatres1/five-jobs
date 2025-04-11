import JobLayout from "@/components/JobLayout";
import React from "react";

const Spotify = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <JobLayout
        company="Spotify"
        role="Software Engineer"
        logoSrc="/spotify.png"
        whyWorkThere="Spotify’s focus on innovation, great user experience, and music technology really interests me. They also offer strong benefits and compensation and support flexible, They offer hybrid work which makes it a great place to work for more flexibility."
        techStack="Spotify uses JavaScript, Python, React, and Kubernetes."
        goals="Build personalized music features and improve app performance across devices."
        currentSkills="My React and frontend knowledge are solid. I'd learn cloud tooling and more backend architecture to be qualified for a position."
        jobLink="https://www.lifeatspotify.com/jobs?c=backend&c=client-c&c=data&c=developer-tools-infrastructure&c=engineering-leadership&c=machine-learning&c=mobile&c=network-engineering-it&c=security&c=tech-research&c=web"
      />
    </div>
  );
};

export default Spotify;
