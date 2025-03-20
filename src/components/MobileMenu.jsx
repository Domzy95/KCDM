// MobileMenu.jsx
import { useState } from "react";
import { RiSearch2Line, RiCloseLine } from "react-icons/ri";

export default function MobileMenu({ menuOpen, setMenuOpen, handleLinkClick }) {
  // State za iskalni način znotraj mobilnega menija
  const [searchMode, setSearchMode] = useState(false);

  // Funkcija za preklapljanje iskalnega načina
  const toggleSearchMode = () => {
    setSearchMode(!searchMode);
  };

  return (
    <>
      {/* Mobilni navigacijski menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-[#4BAC87] text-white z-30 transition-all duration-300 flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Zapri gumb */}
        <div className="p-6 flex justify-end">
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <RiCloseLine />
          </button>
        </div>

        {searchMode ? (
          <div className="px-16 pt-12">
            <div className="flex border-2 border-white bg-[#4BAC87] rounded-none">
              <input
                type="text"
                placeholder="Iskanje"
                className="py-2 px-4 w-full bg-[#318565] text-white placeholder-white outline-none font-verb"
                autoFocus
              />
              <button
                className="bg-[#318565] px-4 text-white"
                onClick={() => setSearchMode(false)}
              >
                <RiCloseLine className="w-6 h-6" />
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Vertikalna črta ob strani */}
            <div className="absolute left-12 top-0 w-px h-full bg-[#5ebe9e]"></div>

            {/* Navigacijski meni */}
            <nav className="flex flex-col pl-16 gap-6 mt-4">
              <a
                style={{ fontWeight: 950 }}
                href="#"
                onClick={() => handleLinkClick("VSTOPNA STRAN")}
                className="font-verb2 text-sm  text-white hover:text-gray-200 transition-colors duration-300"
              >
                VSTOPNA STRAN
              </a>
              <a
                style={{ fontWeight: 950 }}
                href="#"
                onClick={() => handleLinkClick("ZNANJE")}
                className="font-verb2 text-sm text-white hover:text-gray-200 transition-colors duration-300"
              >
                ZNANJE
              </a>
              <a
                style={{ fontWeight: 950 }}
                href="#"
                onClick={() => handleLinkClick("AKTUALNO")}
                className="font-verb2 text-sm  text-white hover:text-gray-200 transition-colors duration-300"
              >
                AKTUALNO
              </a>
              <a
                style={{ fontWeight: 950 }}
                href="#"
                onClick={() => handleLinkClick("O KCDM")}
                className="font-verb2 text-sm  text-white hover:text-gray-200 transition-colors duration-300"
              >
                O KCDM
              </a>
            </nav>

            {/* Gumb "PLATFORMA DNA" v meniju */}
            <div className="mt-12 px-16">
              <button className="w-full font-normal text-sm py-3 px-4 border-2 border-dashed border-white text-white font-verb text-center hover:bg-[#3a9977] transition-colors duration-300">
                PLATFORMA DNA
              </button>
            </div>

            {/* Jezikovni gumbi in iskalna ikona */}
            <div className="mt-auto px-16 pb-12 flex justify-between items-center">
              <div className="flex gap-4">
                <button className="text-white font-verb hover:underline">
                  SI
                </button>
                <button className="text-white font-verb hover:underline">
                  EN
                </button>
              </div>
              <button className="text-white" onClick={toggleSearchMode}>
                <RiSearch2Line className="w-6 h-6 cursor-pointer" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Prekrivni element, ko je meni odprt */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
