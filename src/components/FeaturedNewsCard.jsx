import React from "react";
// Komponenta za prikaz izpostavljene novice
export default function FeaturedNewsCard({ title, content, date }) {
  return (
    <div className="relative mb-8">
      {/* Zelena navpična črta na levi strani */}
      <div className="absolute left-[-20px] top-0 w-[2px] h-full bg-[#4BAC87]"></div>

      {/* Naslov z zeleno barvo */}
      <h2 className="text-[#4BAC87] text-3xl font-bold leading-tight mb-4">
        {title}
      </h2>

      {/* Vsebina novice */}
      <p className="text-gray-800 mb-6">{content}</p>

      {/* Datum novice */}
      <p className="text-sm text-gray-600 mt-4">{date}</p>
    </div>
  );
}
