import Image from "next/image";
import logo from "../assets/icons/alifshop-logo 1.png";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { SlBasket, SlHeart } from "react-icons/sl";

const Header = () => {
  return (
    <div className="Header p-3 sm:p-5 bg-white fixed z-10 top-0 ring-0 left-0 w-full shadow-md">
      <div className="container mx-auto">
        <div className="header flex flex-wrap items-center justify-between gap-4 sm:justify-around">
          <div className="logo">
            <Image
              src={logo}
              alt="Company Logo"
              width={80}
              height={80}
              className="w-[80px] sm:w-[100px]"
            />
          </div>
          <div className="but hidden sm:flex">
            <button className="flex items-center gap-2 bg-yellow-400 p-2 rounded-lg">
              <IoMdMenu className="text-lg sm:text-xl" />
              <p className="text-sm sm:text-base font-medium">
                Tovarlar katalogi
              </p>
            </button>
          </div>
          <form
            action=""
            className="flex-grow flex items-center max-w-sm shadow-xl rounded-md border border-yellow-600">
            <input
              type="text"
              className="flex-grow px-2 sm:px-4 py-2 text-sm sm:text-base text-gray-700 outline-none"
              placeholder="Search..."
            />
            <button className="bg-yellow-500 text-white px-2 sm:px-4 py-2 border-l-0 rounded-r-md">
              <CiSearch className="text-lg sm:text-xl" />
            </button>
          </form>
          <button className="flex flex-col items-center">
            <SlBasket className="text-xl sm:text-2xl" />
            <p className="text-xs sm:text-sm font-medium">Savat</p>
          </button>
          <button className="flex flex-col items-center">
            <SlHeart className="text-xl sm:text-2xl" />
            <p className="text-xs sm:text-sm font-medium">Sevimlilar</p>
          </button>
          <button className="p-2 border border-yellow-500 rounded-md text-sm sm:text-base">
            Kirish
          </button>
          <div className="language">
            <div className="dropdown flex gap-1">
              <button className="p-1 text-sm sm:text-base text-gray-700 hover:text-gray-900">
                Rus /
              </button>
              <button className="p-1 text-sm sm:text-base text-gray-700 hover:text-gray-900">
                Uz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
