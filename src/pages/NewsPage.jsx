import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ArticleItem = ({ title, date }) => (
  <div className="mb-6 group flex justify-end pr-8">
    <a
      href="#"
      className="block relative max-w-xl border-b border-[#D8D7D3]/50 pb-4 w-full"
    >
      <h3
        className="
          text-[#4BAC87]
          underline
          decoration-dotted
          font-bold
          leading-tight
          text-3xl
          md:text-5xl
          font-verb2
          mb-1
          break-words
          relative
          inline-block
          overflow-hidden
        "
      >
        <span
          className="
            absolute
            inset-0
            bg-[#4BAC87]
            z-0
            transform
            -translate-x-full
            group-hover:translate-x-0
            transition-transform
            duration-300
            ease-in-out
          "
        ></span>
        <span
          className="
            relative
            z-10
            group-hover:text-white
            transition-colors
            duration-300
          "
        >
          {title}
        </span>
      </h3>
      <p className="text-sm font-normal font-verb2 text-[#737A77] uppercase">
        {date}
      </p>
    </a>
  </div>
);

// Komponenta za paginacijo
const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center my-12 border-t border-b border-gray-200 py-6">
      {/* Leva puščica */}
      <button
        className={`flex items-center justify-center ${
          currentPage === 1 ? "text-gray-300" : "text-[#4BAC87]"
        }`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="w-5 h-5 stroke-[2]" />
      </button>

      {/* Številke strani */}
      <div className="flex mx-8 space-x-6">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`text-lg font-medium ${
              currentPage === index + 1
                ? "text-[#4BAC87]"
                : "text-gray-500 hover:text-[#4BAC87]"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Desna puščica */}
      <button
        className={`flex items-center justify-center ${
          currentPage === totalPages ? "text-gray-300" : "text-[#4BAC87]"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="w-5 h-5 stroke-[2]" />
      </button>
    </div>
  );
};

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const newsItems = [
    {
      id: 1,
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "3. APRIL 2025",
    },
    {
      id: 2,
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "3. APRIL 2025",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor lorem ipsum",
      date: "3. APRIL 2025",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor lorem ipsum",
      date: "3. APRIL 2025",
    },
    {
      id: 5,
      title: "Inovativnosti namenjamo premalo časa in prostora",
      date: "3. APRIL 2025",
    },
    {
      id: 6,
      title: "Inovativnosti namenjamo premalo časa in prostora",
      date: "3. APRIL 2025",
    },
    {
      id: 7,
      title: "Inovativnosti namenjamo premalo časa in prostora",
      date: "3. APRIL 2025",
    },
    {
      id: 8,
      title: "Inovativnosti namenjamo premalo časa in prostora",
      date: "3. APRIL 2025",
    },
    {
      id: 9,
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "3. APRIL 2025",
    },
    {
      id: 10,
      title: "Lorem ipsum dolor lorem ipsum",
      date: "3. APRIL 2025",
    },
    {
      id: 11,
      title: "Inovativnosti namenjamo premalo časa in prostora",
      date: "3. APRIL 2025",
    },
  ];

  const totalPages = 7;

  return (
    <section className="flex bg-gray-100 justify-center">
      {/* Glavna vsebina */}
      <div className="w-full max-w-[936px] flex flex-col">
        {/* List of articles */}
        <div className="p-6 md:p-12 space-y-8 pr-16 w-full mx-auto max-w-[936px]">
          {newsItems.map((news, index) => (
            <React.Fragment key={news.id}>
              {index === 4 && (
                <div className="relative mb-4 flex justify-end pr-8"></div>
              )}
              <ArticleItem title={news.title} date={news.date} index={index} />
            </React.Fragment>
          ))}
        </div>

        {/* Paginacija v točnem stilu kot na sliki */}
        <div className="flex items-center justify-center py-8 w-full max-w-[936px] mt-8 mb-12">
          {/* Leva puščica */}
          <button
            className={`text-[#4BAC87] flex items-center mr-6 ${
              currentPage === 1 ? "opacity-60" : ""
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
              <path
                d="M0.5 7H22.5M0.5 7L7 1M0.5 7L7 13"
                stroke="#4BAC87"
                strokeWidth="2"
              />
            </svg>
          </button>

          {/* Številke strani */}
          <div className="flex space-x-6">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`text-lg ${
                  currentPage === index + 1
                    ? "text-[#4BAC87] font-medium"
                    : "text-gray-500 hover:text-[#4BAC87]"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Desna puščica */}
          <button
            className={`text-[#4BAC87] flex items-center ml-6 ${
              currentPage === totalPages ? "opacity-60" : ""
            }`}
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
          >
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
              <path
                d="M23.5 7H1.5M23.5 7L17 1M23.5 7L17 13"
                stroke="#4BAC87"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
