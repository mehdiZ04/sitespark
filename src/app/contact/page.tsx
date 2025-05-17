import React from "react";

const Contact = () => (
  <div className="min-h-screen bg-[#181A1B] flex flex-col items-center justify-center px-4 py-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-4 text-center">
      Contact Us
    </h1>
    <p className="text-gray-400 mb-8 text-center max-w-xl text-base sm:text-lg">
      Have a question or want to work with SiteSpark? Fill out the form below or email us at{" "}
      <a href="mailto:hello@sitespark.com" className="text-gray-200 underline">hello@sitespark.com</a>.
    </p>
    <form
      action="https://formspree.io/f/xrbqjjpa"
      method="POST"
      className="bg-[#232526] rounded-lg p-4 sm:p-8 w-full max-w-md shadow-lg space-y-6"
    >
      <div>
        <label className="block text-gray-300 mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-4 py-2 rounded bg-[#181A1B] text-gray-200 border border-[#232526] focus:outline-none focus:border-gray-400 transition"
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
          className="w-full px-4 py-2 rounded bg-[#181A1B] text-gray-200 border border-[#232526] focus:outline-none focus:border-gray-400 transition"
          type="email"
          id="email"
          name="email"
          placeholder="you@email.com"
          required
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-4 py-2 rounded bg-[#181A1B] text-gray-200 border border-[#232526] focus:outline-none focus:border-gray-400 transition"
          id="message"
          name="message"
          rows={4}
          placeholder="How can we help you?"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-700 text-white font-semibold py-2 rounded hover:bg-gray-600 transition"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;