import React from "react";
import Link from "next/link";

const Hero: React.FC = () => (
  <section className="bg-[#181A1B] text-gray-200 py-20 px-4 flex flex-col items-center justify-center">
    {/* Logo and Tagline */}
    <div className="flex items-center mb-6">
      {/* Lightning Bolt Icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        <polygon
          points="18,2 6,18 15,18 14,30 26,14 17,14"
          fill="#a3a3a3" // gray-400
          stroke="#a3a3a3"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <span className="font-bold text-3xl select-none">
        <span className="text-gray-200">Site</span>
        <span className="text-gray-400">Spark</span>
      </span>
    </div>
    <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
      Ignite Your Online Presence
    </h1>
    <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-8">
      Modern, high-performance websites for online sellers. SiteSpark helps your business stand out with sleek design, robust development, and seamless user experiences.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
      <Link
        href="/services"
        className="bg-gray-700 text-white font-semibold px-6 py-3 rounded shadow hover:bg-gray-600 transition text-center"
      >
        Our Services
      </Link>
      <Link
        href="/contact"
        className="border border-gray-400 text-gray-200 font-semibold px-6 py-3 rounded hover:bg-[#232526] transition text-center"
      >
        Contact Us
      </Link>
      <Link
        href="/book"
        className="bg-[#232526] text-gray-200 font-semibold px-6 py-3 rounded border border-gray-400 hover:bg-gray-700 hover:text-white transition text-center"
      >
        Book a Call
      </Link>
    </div>
  </section>
);

export default Hero;