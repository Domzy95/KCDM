import { Input } from "@/components/ui/input";
import { IoLogoVenmo } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import republikaslovenije from "@/assets/images/republikaslovenije.svg";
import slovenskisklad from "@/assets/images/slovenskisklad.svg";
import humanfrog from "@/assets/images/humanfrog.svg";

export default function Footer() {
  return (
    <footer className="p-4 sm:p-6 bg-gray-100 overflow-x-hidden w-full">
      {/* Main container with max width constraint */}
      <div className="max-w-[960px] mx-auto">
        {/* Top section - Newsletter signup and social media */}
        <div className="flex flex-col md:flex-row justify-between border-t-[8px] border-b-[8px] border-[#D8D7D3] py-6">
          {/* Newsletter section - Appears first on mobile, right side on desktop */}
          <div className="mb-8 md:mb-0 md:order-2 md:w-1/2">
            <h3
              style={{ fontWeight: 950 }}
              className="font-verb2 text-[14px] text-black mb-4"
            >
              NAROČITE SE NA NAŠE E-NOVICE
            </h3>

            {/* Input with arrow */}
            <div className="relative">
              <Input
                style={{ fontWeight: 400 }}
                className="w-full h-[48px] text-[16px] pr-12 rounded-none border-[#D8D7D3] bg-white border-2 font-verb hover:border-[#4BAC87] hover:shadow-md transition-all duration-200"
                placeholder="Vnesite svoj e-naslov"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                <ArrowRight className="h-5 w-5 text-[#4BAC87]" />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-2 mt-4">
              <Checkbox
                id="terms"
                className="data-[state=checked]:bg-[#4BAC87] rounded-none bg-white border-[#D8D7D3] mt-1"
              />
              <label
                style={{ fontWeight: 400 }}
                htmlFor="terms"
                className="text-sm font-verb2 text-[14px] leading-tight"
              >
                Strinjam se s pogoji uporabe
              </label>
            </div>
          </div>

          {/* Social Media section - Appears second on mobile, left side on desktop */}
          <div className="md:order-1">
            <h3
              style={{ fontWeight: 950 }}
              className="font-verb2 text-[14px] text-black mb-4"
            >
              SPREMLJAJTE NAS
            </h3>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full hover:bg-green-900 bg-[#4BAC87] flex items-center justify-center">
                <FaFacebook className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full hover:bg-green-900 bg-[#4BAC87] flex items-center justify-center">
                <FaLinkedin className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full hover:bg-green-900 bg-[#4BAC87] flex items-center justify-center">
                <IoLogoVenmo className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Archive content */}
        <div className="border-b-[2px] py-8">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left side - Archive description */}
            <div className="md:w-1/2 md:border-b-0 mb-8 border-b-[8px] md:mb-0">
              {/* Title */}
              <h3
                style={{ fontWeight: 950 }}
                className="font-verb2 text-[14px] text-[#4BAC87] mb-4"
              >
                Arhivske vsebine
              </h3>

              {/* Description paragraph */}
              <p
                style={{ fontWeight: 400 }}
                className="text-[#737A77] leading-5 tracking-normal font-verb text-[14px] mb-6 max-w-full sm:max-w-lg break-words"
              >
                Lorem ipsum dolor sit amet consectetur. Tempus blandit enim eget
                nunc enim. Tincidunt feugiat id eleifend eget. Fames condimentum
                scelerisque sollicitudin feugiat tellus lorem tristique iaculis.
                Mauris feugiat placerat.
              </p>
            </div>

            {/* Right side - Logos */}
            <div className="md:w-1/2 flex items-center justify-center md:justify-end">
              <div className="flex items-center md:gap-8 sm:gap-4">
                <img
                  src={republikaslovenije}
                  alt="Republika Slovenije"
                  className="h-10 sm:h-12 w-auto"
                />
                <div className="border-r-[1px] border-[#D8D7D3] h-8 sm:h-12 mx-1"></div>
                <img
                  src={slovenskisklad}
                  alt="Slovenski sklad"
                  className="h-10 sm:h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright and links section */}
      <div className="max-w-[960px] mx-auto py-4 text-sm text-[#737A77] border-gray-200 mt-8">
        <div className="flex flex-wrap items-center gap-x-3">
          <span className="font-verb font-normal break-words">
            © Kompetenčni center za Design Management
          </span>
          <span className="hidden sm:inline">•</span>
          <a
            href="/pogoji-uporabe"
            className="font-verb font-normal text-[#4BAC87] hover:underline break-words"
          >
            Pogoji uporabe
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href="/politika-zasebnosti"
            className="text-[#4BAC87] font-verb font-normal hover:underline break-words"
          >
            Politika zasebnosti
          </a>
        </div>

        <div className="mt-2">
          <a
            href="https://humanfrog.com"
            className="flex flex-wrap items-center font-verb font-normal text-[#4BAC87] hover:underline"
          >
            <span className="break-words">
              Oblikovanje in razvoj spletnih strani: Humanfrog
            </span>
            <img
              src={humanfrog}
              alt="Humanfrog logo"
              className="ml-2 h-5 w-5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
