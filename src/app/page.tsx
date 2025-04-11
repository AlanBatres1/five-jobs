import JobCard from "@/components/JobCard";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col items-center p-10 gap-6">
        <JobCard
          title="Software Engineer"
          company="OpenAI"
          description="I want to work at OpenAI because they're leading the future of AI and making a big impact on the world."
          imageSrc="/OpenAi.png"
          route="/openai"
          bgColor="bg-white text-black"
          buttonBgColor="bg-white text-black border-1 border-black hover:text-white hover:bg-black"
        />

        <JobCard
          title="Software Engineer"
          company="NVIDIA"
          description="NVIDIA is doing amazing things with AI and graphics. It's a great place to grow and learn new tech."
          imageSrc="/NVIDIA.png"
          route="/nvidia"
          bgColor="bg-black text-white"
          buttonBgColor="bg-[#76b900] text-black hover:shadow-[0_2px_15px_#76b900]"
        />

        <JobCard
          title="Software Engineer"
          company="Netflix"
          description="Netflix uses cool tech to power entertainment for millions. I'd love to be a part of that team."
          imageSrc="/Netflix.png"
          route="/netflix"
          bgColor="bg-black text-white"
          buttonBgColor="bg-[#e50914] hover:shadow-[0_2px_10px_#e50914]"
        />

        <JobCard
          title="Software Engineer"
          company="Spotify"
          description="Spotify combines music and tech in a fun way. I'd enjoy working on features people use every day."
          imageSrc="/spotify.png"
          route="/spotify"
          bgColor="bg-black text-white"
          buttonBgColor="bg-[#1ed760] text-black hover:shadow-[0_2px_10px_#1ed760]"
        />

        <JobCard
          title="Software Engineer"
          company="Apple"
          description="Apple builds sleek and powerful products. It would be awesome to help create tools people love."
          imageSrc="/apple.png"
          route="/apple"
          bgColor="bg-white text-black"
          buttonBgColor="bg-white text-black border-1 border-black hover:text-white hover:bg-black"
        />
      </div>
    </div>
  );
}
