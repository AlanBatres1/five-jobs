import React from "react";
import Link from "next/link";

type JobLayoutProps = {
  company: string;
  role: string;
  logoSrc: string;
  whyWorkThere: string;
  techStack: string;
  goals: string;
  currentSkills: string;
  jobLink: string;
};

const JobLayout: React.FC<JobLayoutProps> = ({
  company,
  role,
  logoSrc,
  whyWorkThere,
  techStack,
  goals,
  currentSkills,
  
  jobLink,
}) => {
  return (
    <div className="bg-white text-black p-8 rounded-3xl shadow-lg w-full max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <img src={logoSrc} alt={company} className="w-10 h-10 object-contain" />
        <div>
          <h2 className="text-2xl font-bold">{role}</h2>
        </div>
      </div>

      <div className="space-y-4">
        <Section title="Why I Want to Work Here" content={whyWorkThere} />
        <Section title="Tech Stack Fit" content={techStack} />
        <Section title="Goals in the Role" content={goals} />
        <Section title="Current Skills vs. Requirements" content={currentSkills} />

        <div className="mt-6">
          <Link href={jobLink} target="_blank">
            <button className="bg-white text-black border-1 border-black hover:text-white hover:bg-black px-6 py-2 rounded-xl transition">
              View Job Listing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, content }: { title: string; content: string }) => (
  <div>
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default JobLayout;
