import React from "react";

const works = [
  { title: "Elegance", video: "/1.mp4", url: "#" },
  { title: "Mald", video: "/2.mp4", url: "#" },
  { title: "TechPulse", video: "/3.mp4", url: "#" },
];

const rotations = ["-rotate-0", "rotate-0", "rotate-0"];

const WorkExamples: React.FC = () => (
  <section className="w-full py-16 bg-[#181A1B]">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Our Work</h2>
    <div className="relative w-full overflow-x-hidden">
      <div className="flex animate-scroll-horizontal space-x-16 pointer-events-none" style={{ width: "max-content" }}>
        {/* First row */}
        {works.map((work, idx) => (
          <a
            href={work.url}
            key={`first-${idx}`}
            className={`min-w-[400px] max-w-md bg-[#232526] rounded-2xl shadow-2xl overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-300 ${rotations[idx % rotations.length]}`}
            style={{ aspectRatio: "4/3" }}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
          >
            <video
              src={work.video}
              className="w-full h-64 object-cover"
              autoPlay
              loop
              muted
              playsInline
              draggable={false}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-100">{work.title}</h3>
            </div>
          </a>
        ))}
        {/* Duplicate for seamless infinite scroll */}
        {works.map((work, idx) => (
          <a
            href={work.url}
            key={`second-${idx}`}
            className={`min-w-[400px] max-w-md bg-[#232526] rounded-2xl shadow-2xl overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-300 ${rotations[idx % rotations.length]}`}
            style={{ aspectRatio: "4/3" }}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
          >
            <video
              src={work.video}
              className="w-full h-64 object-cover"
              autoPlay
              loop
              muted
              playsInline
              draggable={false}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-100">{work.title}</h3>
            </div>
          </a>
        ))}
      </div>
      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#181A1B] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#181A1B] to-transparent pointer-events-none" />
    </div>
  </section>
);

export default WorkExamples;