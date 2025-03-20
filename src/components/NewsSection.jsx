import React from "react";
import { ArrowRight } from "lucide-react";

// Komponenta za prikaz članka z naslovom, datumom in povezavo
const ArticleItem = ({ title, date }) => (
  <div className="border-b border-[#D8D7D3]/50 mb-6 pb-4 group">
    <a href="#" className="block relative">
      <h3
        className="
          text-[#4BAC87] 
          underline 
          decoration-dotted
          font-normal 
          leading-[1.2] 
          text-lg 
          sm:text-xl 
          font-georgia 
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
      <p className="text-sm font-normal tracking-[.05em] font-verb2 text-[#737A77]">
        {date}
      </p>
    </a>
  </div>
);
// Komponenta za prikaz dogodka z lokacijo, datumom in naslovom
const EventItem = ({ location, date, title }) => (
  <div className="border-b border-[#D8D7D3]/50 mb-8 pb-4">
    <div
      style={{ fontWeight: 950 }}
      className="font-verb2 text-[#3D5F52] text-sm mb-1"
    >
      {location}
    </div>
    <p className="text-sm font-normal tracking-[.05em] font-verb2 text-[#737A77]">
      {date}
    </p>
    <a
      href="#"
      className="text-[#4BAC87] underline decoration-dotted font-normal leading-[1.2] text-lg sm:text-xl font-georgia break-words"
    >
      {title}
    </a>
  </div>
);

// Komponenta za prikaz naslova razdelka z zgornjo obrobo
const SectionTitle = ({ title }) => (
  <div className="border-t border-[#4BAC87]/50 mb-8">
    <span
      style={{ fontWeight: 950 }}
      className="px-2 text-sm text-[#75726E] font-verb2"
    >
      {title}
    </span>
  </div>
);

export default function NewsSection() {
  // Podatki o člankih
  const articles = [
    {
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "1-3 APRIL 2025",
    },
    {
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "1-3 APRIL 2025",
    },
    {
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "1-3 APRIL 2025",
    },
    {
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "1-3 APRIL 2025",
    },
    {
      title: "Nagrada Good Design Award Avstralija za projekt KCDM",
      date: "1-3 APRIL 2025",
    },
  ];

  // Podatki o dogodkih
  const events = [
    {
      location: "AMSTERDAM, NIZOZEMSKA IN ONLINE",
      date: "1-3 APRIL 2025",
      title: "Design Management Europe konferenca",
    },
    {
      location: "LJUBLJANA, SLOVENIJA",
      date: "1-3 APRIL 2025",
      title: "Design Management Europe konferenca",
    },
    {
      location: "AMSTERDAM, NIZOZEMSKA IN ONLINE",
      date: "1-3 APRIL 2025",
      title: "Design Management Europe konferenca",
    },
  ];

  return (
    <div className="bg-gray-100 w-full overflow-x-hidden">
      <div className="max-w-[920px] mx-auto px-4 py-8">
        <div className="xl:flex xl:flex-col xl:items-end">
          {/* Main article with vertical line */}
          <div className="relative pb-4 xl:w-2/3 mb-8 md:mb-12">
            <div className="mt-0 md:mt-[50px] pl-4 sm:pl-8">
              {/* Title of main article */}
              <h2
                style={{ fontWeight: 950 }}
                className="text-[#4BAC87] tracking-[-.02em] leading-[0.9] text-[32px] md:text-[52px] font-verb2 mb-4 break-words -mt-8 md:mt-0" /* Moderated negative margin */
              >
                Nagrada Good Design Award Avstralija za projekt KCDM
              </h2>
              {/* Vsebina glavnega članka */}
              <p className="text-[#3D5F52] font-georgia text-[24px] md:text-[32px] font-normal mb-4 max-w-3xl break-words">
                Kompetenčni center za design management svojim članom ponuja
                nabor pristopov, orodij in znanj -, ki podjetju omogoča, da
                design uporablja za doseganje poslovnih ciljev.
              </p>
              {/* Datum glavnega članka */}
              <p className="text-sm font-normal tracking-[.05em] font-verb2 text-[#737A77]">
                1-3 APRIL 2025
              </p>
            </div>
          </div>
          {/* Razdelitev na dva stolpca */}
          <div className="flex flex-col md:flex-row gap-12 xl:w-2/3">
            {/* Levi stolpec - Novice */}
            <div className="w-full px-2 md:w-1/2">
              {/* Naslov razdelka */}
              <SectionTitle title="NOVICE" />

              {/* Seznam novic */}
              {articles.map((article, index) => (
                <ArticleItem
                  key={index}
                  title={article.title}
                  date={article.date}
                />
              ))}

              {/* Povezava za več novic */}
              <a
                href="#"
                className="inline-flex items-center text-[#4BAC87] text-sm font-medium mt-4"
              >
                <span className="underline decoration-dotted">VEČ NOVIC</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Desni stolpec - Dogodki */}
            <div className="w-full md:w-1/2">
              {/* Naslov razdelka */}
              <SectionTitle title="NAPOVEDUJEMO" />

              {/* Seznam dogodkov */}
              {events.map((event, index) => (
                <EventItem
                  key={index}
                  location={event.location}
                  date={event.date}
                  title={event.title}
                />
              ))}

              {/* Povezava za več dogodkov */}
              <a
                href="#"
                className="inline-flex items-center text-[#4BAC87] text-sm font-medium mt-4"
              >
                <span className="underline decoration-dotted">
                  VEČ DOGODKOV
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
