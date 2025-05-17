import React from "react";

const Book = () => (
  <div className="min-h-screen bg-[#181A1B] flex flex-col items-center justify-center px-4 mt-16">
    <h1 className="text-4xl font-bold text-gray-200 mb-4">Book a Meeting or Call</h1>
    <p className="text-gray-400 mb-8 text-center max-w-xl">
      Schedule a free consultation with SiteSpark. Fill out the form and we’ll get in touch to confirm your meeting or call.
    </p>
    <form
      action="https://formspree.io/f/xrbqjjpa"
      method="POST"
      className="bg-[#232526] rounded-lg p-8 w-full max-w-md shadow-lg space-y-6"
    >
      <div>
        <label className="block text-gray-300 mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-4 py-2 rounded bg-[#181A1B] text-gray-200 border border-[#232526] focus:outline-none focus:border-[#1EA7FF] transition"
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-4 py-2 rounded bg-[#181A1B] text-gray-200 border border-[#232526] focus:outline-none focus:border-[#1EA7FF] transition"
          type="email"
          id="email"
          name="email"
          placeholder="you@email.com"
          required
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2" htmlFor="date">
          Preferred Date & Time
        </label>
        <input
          className="w-full px-4 py-2 rounded bg-[#181A1B] text-gray-200 border border-[#232526] focus:outline-none focus:border-[#1EA7FF] transition"
          type="datetime-local"
          id="date"
          name="date"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2" htmlFor="message">
          Message (optional)
        </label>
        <textarea
          className="w-full px-4 py-2 rounded bg-[#181A1B] text-gray-200 border border-[#232526] focus:outline-none focus:border-[#1EA7FF] transition"
          id="message"
          name="message"
          rows={3}
          placeholder="What would you like to discuss?"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#1EA7FF] text-white font-semibold py-2 rounded hover:bg-[#1592d4] transition"
      >
        Book Now
      </button>
    </form>
  </div>
);

export default Book;