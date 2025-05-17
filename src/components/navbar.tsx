"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#181A1B] border-b border-[#232526]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-white">SiteSpark</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-white text-gray-300">Home</Link>
          <Link href="/services" className="hover:text-white text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-white text-gray-300">Contact</Link>
          <Link href="/about" className="hover:text-white text-gray-300">About</Link>
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#181A1B] border-t border-[#232526] px-4 pb-4">
          <Link href="/" className="block py-2 text-gray-300 hover:text-white" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" className="block py-2 text-gray-300 hover:text-white" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" className="block py-2 text-gray-300 hover:text-white" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/about" className="block py-2 text-gray-300 hover:text-white" onClick={() => setOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;