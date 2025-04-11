import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white px-6 py-4 shadow-md">
      <div className="relative flex justify-between items-center max-w-7xl mx-auto">
        
        <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition">
          Home
        </Link>

        {/* Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
            5 Jobs That Interest Me
          </h1>
        </div>

        {/* Nav Links */}
        <div className="flex gap-4 text-sm font-medium">
          <Link href="/openai" className="hover:text-blue-400 transition">OpenAI</Link>
          <Link href="/nvidia" className="hover:text-[#76b900] transition">NVIDIA</Link>
          <Link href="/netflix" className="hover:text-[#e50914] transition">Netflix</Link>
          <Link href="/spotify" className="hover:text-[#1ed760] transition">Spotify</Link>
          <Link href="/apple" className="hover:text-blue-400 transition">Apple</Link>

          <a
            href="/JobsThatInterestMe.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline hover:text-blue-300 transition"
          >
            PDF
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
