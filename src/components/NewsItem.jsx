import React from "react";
import { Link } from "react-router-dom";

// Komponenta za prikaz posamezne novice
export default function NewsItem({ title, date, link, isHighlighted = false }) {
  return (
    <div className="mb-6">
      {/* Naslov novice - če je poudarjen, dodamo zeleno obrobo */}
      <h3
        className={`text-base font-medium ${
          isHighlighted
            ? "text-[#4BAC87] border border-[#4BAC87] p-1"
            : "text-[#4BAC87]"
        }`}
      >
        {/* Če imamo povezavo, prikažemo naslov kot povezavo, sicer kot navaden tekst */}
        {link ? <Link to={link}>{title}</Link> : title}
      </h3>

      {/* Datum novice */}
      <p className="text-xs text-gray-600 mt-1">{date}</p>
    </div>
  );
}
