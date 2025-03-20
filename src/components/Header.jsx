// Header.jsx
import { useState } from "react";
import logo from "@/assets/images/logo.svg";
import { RiSearch2Line, RiMenuFill, RiCloseLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [activeLink, setActiveLink] = useState("AKTUALNO");
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-gray-100 py-4">
      {/* Glavni container s fiksno širino */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex justify-between items-center">
        {/* Levi del - logotip in navigacija */}
        <div className="flex items-center space-x-2 lg:space-x-2">
          {/* Logotip */}
          <div>
            <img
              src={logo}
              alt="KCDM Logo"
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto min-w-[100px]"
            />
          </div>

          {/* Vertikalna črta - minimalen razmak */}
          <div className="hidden lg:block">
            <div className="border-l-[1px] border-[#318565] h-[102px] mx-2"></div>
          </div>

          {/* Navigacija - maksimalno premaknjena levo */}
          <nav className="hidden lg:flex flex-col gap-[13px] font-verb2 -ml-3">
            <a
              href="#"
              onClick={() => handleLinkClick("ZNANJE")}
              className={`${
                activeLink === "ZNANJE" ? "text-[#318565]" : "text-[#4BAC87]"
              } hover:text-[#318565] transition-colors pl-1`}
              style={{ fontWeight: 950 }}
            >
              ZNANJE
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick("AKTUALNO")}
              className={`${
                activeLink === "AKTUALNO" ? "text-[#318565]" : "text-[#4BAC87]"
              } hover:text-[#318565] transition-colors pl-1`}
              style={{ fontWeight: 950 }}
            >
              AKTUALNO
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick("O KCDM")}
              className={`${
                activeLink === "O KCDM" ? "text-[#318565]" : "text-[#4BAC87]"
              } hover:text-[#318565] transition-colors pl-1`}
              style={{ fontWeight: 950 }}
            >
              O KCDM
            </a>
          </nav>
        </div>

        {/* Desni del - funkcionalnosti za desktop */}
        <div className="hidden lg:flex items-center ml-auto space-x-8">
          {/* Iskalno polje */}
          <div className="relative mr-6">
            <RiSearch2Line
              className="w-7 h-7 text-[#4BAC87] cursor-pointer hover:text-[#318565] transition"
              onClick={() => setSearchOpen(!searchOpen)}
            />
            <input
              type="text"
              placeholder="Išči..."
              className={`absolute top-full left-0 mt-2 p-2 border rounded-md shadow-md transition-all ${
                searchOpen ? "w-48 opacity-100" : "w-0 opacity-0"
              }`}
              style={{
                borderColor: "#4BAC87",
                backgroundColor: "white",
                color: "#4BAC87",
              }}
            />
          </div>

          {/* Gumbi */}
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              className="font-verb border-2 border-dashed border-[#4BAC87] text-[#4BAC87] hover:bg-[#4BAC87] hover:text-white rounded-none"
            >
              PLATFORMA DNA
            </Button>

            <div className="border-l h-9 border-[#D8D7D3]"></div>

            <Button
              variant="ghost"
              className="font-verb text-[#4BAC87] hover:bg-[#4BAC87] hover:text-white rounded-none"
            >
              ENG
            </Button>
          </div>
        </div>

        {/* Mobilni meni gumb */}
        <div className="lg:hidden flex items-center">
          <div className="w-px h-11 bg-[#4BAC87] mr-3"></div>
          <button
            className="text-[#4BAC87] text-3xl"
            onClick={toggleMenu}
            aria-label="Odpri meni"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenuFill />}
          </button>
        </div>
      </div>

      {/* Mobilni meni */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
      />
    </header>
  );
}
