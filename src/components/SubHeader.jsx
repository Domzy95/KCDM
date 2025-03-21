import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import frame from "@/assets/images/frame.svg";
import subheaderimage from "@/assets/images/subheaderimage.png";

export default function SubHeader() {
  const [activeTab, setActiveTab] = useState("NOVICE");
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: "NOVICE", label: "NOVICE", path: "/novice" },
    {
      id: "PRIHAJAJOČI DOGODKI",
      label: "PRIHAJAJOČI\nDOGODKI",
      path: "/dogodki",
    },
    {
      id: "PRETEKLI DOGODKI",
      label: "PRETEKLI\nDOGODKI",
      path: "/pretekli-dogodki",
    },
  ];

  const renderLines = (text) => {
    return text.split("\n").map((line, i) => {
      return i > 0 ? [<br key={i} />, line] : line;
    });
  };

  // Preverimo, ali je trenutna pot "/novice"
  const isNewsPage = location.pathname === "/novice";

  return (
    <section className="flex bg-gray-100 flex-col items-center overflow-hidden w-full">
      {/* Container that adds max-width constraint and proper centering */}
      <div className="w-full max-w-[972px] mx-auto relative">
        <div className="md:hidden w-full">
          {isNewsPage ? (
            /* Za mobilne naprave na strani z novicami - Aktualno z puščico zgoraj namesto velikega naslova */
            <div className="pt-3 pb-3 px-4">
              <button
                onClick={() => navigate("/")}
                className="flex items-center"
              >
                <svg width="26" height="14" viewBox="0 0 26 14" fill="none">
                  <path
                    d="M1 7H25M1 7L7 1M1 7L7 13"
                    stroke="#4BAC87"
                    strokeWidth="2"
                  />
                </svg>
                <span
                  className="ml-4 font-verb2 text-[#4BAC87] uppercase"
                  style={{
                    fontWeight: 950,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "0.05em",
                    textDecoration: "underline",
                    textDecorationStyle: "dotted",
                    textDecorationThickness: "7.5%",
                    textUnderlineOffset: "13.5%",
                    textDecorationSkipInk: "auto",
                  }}
                >
                  Aktualno
                </span>
              </button>
            </div>
          ) : (
            /* Standardni prikaz za druge strani */
            <div className="pt-3 pb-3">
              <div className="w-16 border-t border-[#4BAC87] mx-4"></div>
              {/* Povezava na glavno stran ob kliku na "Aktualno" */}
              <Link to="/">
                <h1
                  className="text-3xl sm:text-4xl font-verb2 text-[#318565] text-left px-4"
                  style={{
                    fontWeight: 950,
                    letterSpacing: "-0.02em",
                    lineHeight: "90%",
                  }}
                >
                  Aktualno
                </h1>
              </Link>
            </div>
          )}

          <div className="relative w-full">
            <div className="overflow-x-auto w-full pl-[80px] touch-pan-x">
              <div className="flex space-x-4 min-w-max snap-x">
                {navItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <Link
                      to={item.path}
                      className={`px-2 py-2 whitespace-nowrap cursor-pointer snap-center shrink-0 ${
                        activeTab === item.id
                          ? "text-[#318565]"
                          : "text-[#4BAC87]"
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <span
                        className="font-verb2 text-xs"
                        style={{ fontWeight: 950, letterSpacing: "0.05em" }}
                      >
                        {renderLines(item.label)}
                      </span>
                    </Link>

                    {item.id !== "PRETEKLI DOGODKI" && (
                      <div className="h-8 w-px bg-[#D8D7D3] self-center"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300 opacity-50 pointer-events-none"></div>
          </div>
        </div>

        {isNewsPage ? (
          /* Za stran z novicami */
          <main className="flex w-full h-[206px] bg-[#4BAC87] flex-col relative">
            <div className="w-full h-full relative">
              {/* Za mobilne naprave - Novice naslov levo */}
              <div className="md:hidden w-full bg-[#4BAC87] flex flex-col justify-start pt-10 pb-8 px-4">
                <h1
                  className="text-5xl font-verb2 text-white text-left"
                  style={{
                    fontWeight: 950,
                    lineHeight: "90%",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Novice
                </h1>
              </div>

              {/* Za široke zaslone - Aktualno levo in Novice na vrhu v centru */}
              <div className="hidden md:block w-full h-full">
                <button
                  onClick={() => navigate("/")}
                  className="absolute top-10 left-8 flex items-center"
                >
                  <svg width="26" height="14" viewBox="0 0 26 14" fill="none">
                    <path
                      d="M1 7H25M1 7L7 1M1 7L7 13"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                  <span
                    className="ml-4 font-verb2 text-white uppercase"
                    style={{
                      fontWeight: 950,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0.05em",
                      textDecoration: "underline",
                      textDecorationStyle: "dotted",
                      textDecorationThickness: "7.5%",
                      textUnderlineOffset: "13.5%",
                      textDecorationSkipInk: "auto",
                    }}
                  >
                    Aktualno
                  </span>
                </button>

                <div className="w-full flex justify-center pt-10">
                  <h1
                    className="text-5xl font-verb2 text-white"
                    style={{
                      fontWeight: 950,
                      lineHeight: "90%",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Novice
                  </h1>
                </div>
              </div>
            </div>
          </main>
        ) : (
          <>
            {/* Desktop Layout */}
            <div className="hidden md:block relative">
              {/* Frame Pattern - This creates a container with the exact height we want */}
              <div
                className="w-[20%] h-[60px] relative"
                style={{ marginBottom: "-30px" }}
              >
                <div className="w-full h-[60px] absolute top-5 left-[-20px]">
                  <img
                    src={frame}
                    alt=""
                    className="h-[206px] w-[223px] object-cover"
                    style={{ objectPosition: "left top" }}
                  />
                </div>
              </div>

              {/* Green header section with extended height to accommodate image */}
              <div className="w-full bg-[#4BAC87] pt-[40px]">
                <div className="h-[350px] relative">
                  {/* Naslov Aktualno with more bottom margin */}
                  <div className="w-full flex justify-center pt-6">
                    <h1
                      style={{ fontWeight: 950, marginBottom: "40px" }}
                      className="text-4xl lg:text-[52px] font-verb2 text-white"
                    >
                      Aktualno
                    </h1>
                  </div>

                  {/* Desktop image directly in the green section */}
                  <div className="absolute right-8 top-[120px] w-[70%] flex justify-end">
                    <img
                      src={subheaderimage}
                      alt="Good Design Award"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Stranska navigacija */}
              <div className="w-full">
                <aside className="relative mt-2 ml-8 z-10">
                  <div className="absolute top-[-330px] left-[200px] h-[500px] w-[2px] bg-[#318565]"></div>
                  <nav>
                    {navItems.map((item, index) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        style={{ fontWeight: 950 }}
                        onClick={() => setActiveTab(item.id)}
                        className={`text-sm font-verb2 hover:text-[#318565] block p-2 ${
                          index > 0
                            ? "border-t-[1px] w-[15%] border-opacity-50 self-start"
                            : ""
                        } ${
                          activeTab === item.id
                            ? "text-[#318565]"
                            : "text-[#4BAC87]"
                        }`}
                      >
                        {renderLines(item.label)}
                      </Link>
                    ))}
                  </nav>
                </aside>
              </div>
            </div>

            {/* Mobile Layout with proper image positioning */}
            <div className="md:hidden relative">
              {/* Green header section with fixed height */}
              <div className="bg-[#4BAC87] h-[120px] w-full"></div>

              {/* Image positioned to overlap - border removed */}
              <div className="absolute top-[40px] left-0 right-0 z-10">
                <div className="w-full max-w-[400px] mx-auto px-4">
                  <img
                    className="w-full h-auto object-contain"
                    src={subheaderimage}
                    alt="Good Design Award"
                  />
                </div>
              </div>

              {/* Spacer to ensure content below doesn't overlap with image */}
              <div className="h-[120px]"></div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
