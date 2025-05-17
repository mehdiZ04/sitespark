import React from "react";

const services = [
  {
    title: "Custom Website Development",
    description:
      "Tailored, high-performance websites built to match your brand and business goals. Responsive, fast, and SEO-friendly.",
    icon: (
      <svg className="w-8 h-8 text-[#1EA7FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" stroke="currentColor" />
        <path d="M3 9h18" strokeWidth="2" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Robust online stores with secure payments, inventory management, and seamless shopping experiences for your customers.",
    icon: (
      <svg className="w-8 h-8 text-[#1EA7FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeWidth="2" stroke="currentColor" />
        <circle cx="7" cy="21" r="1" strokeWidth="2" stroke="currentColor" />
        <circle cx="17" cy="21" r="1" strokeWidth="2" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Modern, intuitive interfaces that engage users and drive conversions. We focus on both aesthetics and usability.",
    icon: (
      <svg className="w-8 h-8 text-[#1EA7FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" />
        <path d="M8 15s1.5-2 4-2 4 2 4 2" strokeWidth="2" stroke="currentColor" />
        <path d="M9 9h.01M15 9h.01" strokeWidth="2" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, and security monitoring to keep your site running smoothly and securely.",
    icon: (
      <svg className="w-8 h-8 text-[#1EA7FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 8v4l3 3" strokeWidth="2" stroke="currentColor" />
        <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Custom Dashboards",
    description:
      "Powerful, user-friendly dashboards tailored to your business needs. Visualize data, manage content, and control your operations with ease.",
    icon: (
      <svg className="w-8 h-8 text-[#1EA7FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="2" stroke="currentColor" />
        <path d="M7 17V7M12 17V12M17 17V14" strokeWidth="2" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Deployment & Hosting",
    description:
      "Seamless deployment and reliable hosting for your websites and applications. We ensure your project is live, secure, and always available.",
    icon: (
      <svg className="w-8 h-8 text-[#1EA7FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.07-6.07l-1.41 1.41M6.34 17.66l-1.41 1.41M17.66 17.66l-1.41-1.41M6.34 6.34L4.93 7.75" strokeWidth="2" stroke="currentColor" />
        <circle cx="12" cy="12" r="5" strokeWidth="2" stroke="currentColor" />
      </svg>
    ),
  },
];

const Services = () => (
  <div className="min-h-screen bg-[#181A1B] text-gray-200 flex flex-col items-center px-4 py-12">
    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
    <p className="text-gray-400 mb-10 text-center max-w-2xl">
      SiteSpark offers a full suite of web development services to help your business shine online. From custom builds to ongoing support, we deliver modern solutions for online sellers.
    </p>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl w-full">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="bg-[#232526] rounded-lg p-8 flex items-start space-x-4 shadow-lg hover:shadow-xl transition"
        >
          <div>{service.icon}</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-400">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;