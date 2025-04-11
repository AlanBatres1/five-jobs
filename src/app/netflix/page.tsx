import JobLayout from "@/components/JobLayout";
import React from "react";

const Netflix = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <JobLayout
        company="Netflix"
        role="Software Engineer"
        logoSrc="/Netflix.png"
        whyWorkThere="Netflix promotes ownership and creativity. They offer many great benefits to their employees and great compensation with a range of $100,000 - $558,000K depending on experience. The role of the job is also remote, offering a bit more flexibility in my work balance. "
        techStack="Netflix uses Java, Python, Node.js, and React. I'm aligned with React and JavaScript but would need to strengthen backend skills in those fields."
        goals=" I would like to improve streaming technology and help create innovative features for millions of users and use and enjoy what I create."
        currentSkills="I'm strong with frontend tech but need more backend experience with Java and/or Python B&R methodologies."
        jobLink="https://explore.jobs.netflix.net/careers?Teams=Engineering&utm_source=Netflix+Careersite"
      />
    </div>
  );
};

export default Netflix;
