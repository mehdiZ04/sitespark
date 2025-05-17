import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="bg-[#181A1B] text-gray-400 py-8 px-4 mt-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      {/* Left: Logo and Copyright */}
      <div className="flex items-center space-x-2">
        {/* Lightning Bolt Icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="18,2 6,18 15,18 14,30 26,14 17,14"
            fill="#1EA7FF"
            stroke="#1EA7FF"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span className="font-bold text-lg">
          <span className="text-gray-200">Site</span>
          <span className="text-[#1EA7FF]">Spark</span>
        </span>
        <span className="ml-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SiteSpark. All rights reserved.
        </span>
      </div>
      {/* Right: Footer Links */}
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-[#1EA7FF] transition">Home</Link>
        <Link href="/services" className="hover:text-[#1EA7FF] transition">Services</Link>
        <Link href="/contact" className="hover:text-[#1EA7FF] transition">Contact</Link>
        <Link href="/about" className="hover:text-[#1EA7FF] transition">About</Link>
      </div>
    </div>
  </footer>
);

export default Footer;