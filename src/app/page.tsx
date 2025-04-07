import JobCard from "@/components/JobCard";

export default function Home() {
  return (
    <div className="bg-gray-900">
    <div className="flex flex-col items-center p-10 gap-6">
      <h1 className="text-4xl font-bold mb-6 text-white">5 Jobs That Interest Me</h1>

      <JobCard
        title="Software Engineer"
        company="OpenAI"
        description="Optimizing supply chains and enhancing customer experiences, this case study reveals AI's significant impact on inventory management in a major retail chain."
        imageSrc="/OpenAi.png"
        route="/jobs/openai"
        bgColor="bg-white"
        buttonBgColor="bg-white text-black border-1 border-black hover:text-white hover:bg-black"
      />

      <JobCard
        title="Software Engineer"
        company="NVIDIA"
        description="Optimizing supply chains and enhancing customer experiences, this case study reveals AI's significant impact on inventory management in a major retail chain."
        imageSrc="/NVIDIA.png"
        route="/jobs/openai"
        bgColor="bg-black text-white"
        buttonBgColor="bg-[#76b900] text-black hover:shadow-[0_2px_15px_#76b900]"
      />

      <JobCard
        title="Software Engineer"
        company="Netflix"
        description="Optimizing supply chains and enhancing customer experiences, this case study reveals AI's significant impact on inventory management in a major retail chain."
        imageSrc="/Netflix.png"
        route="/jobs/openai"
        bgColor="bg-black text-white"
        buttonBgColor="bg-[#e50914] hover:shadow-[0_2px_10px_#e50914]"
      />

      <JobCard
        title="Software Engineer"
        company="Spotify"
        description="Optimizing supply chains and enhancing customer experiences, this case study reveals AI's significant impact on inventory management in a major retail chain."
        imageSrc="/spotify.png"
        route="/jobs/openai"
        bgColor="bg-black text-white"
        buttonBgColor="bg-[#1ed760] text-black hover:shadow-[0_2px_10px_#1ed760]"
      />

      <JobCard
        title="Software Engineer"
        company="OpenAI"
        description="Optimizing supply chains and enhancing customer experiences, this case study reveals AI's significant impact on inventory management in a major retail chain."
        imageSrc="/OpenAi.png"
        route="/jobs/openai"
        bgColor="bg-blue-100"
        buttonBgColor=""
      />
    </div>
    </div>
  );
}
