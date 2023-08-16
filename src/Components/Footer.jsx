import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "./Button";
const Footer = () => {
  return (
    <footer className="text-white py-20 bg-[#000] relative">
      <div className=" container mx-auto px-20 py-20 flex flex-col gap-10 md:flex-row justify-between">
        <div className="flex items-center justify-center">
          <p className="font-bold text-center">
            Recipe<span className="text-green-300 text-xl">Radar</span>
          </p>
        </div>

        <div>
          <p className=" text-md lg:text-lg mb-2">Quick Links</p>

          <div className=" text-slate-100 text-start mb-4 flex flex-col md:mb-0">
            <NavLink
              to="/"
              className=" hover:text-[#808080] transition-all duration-300 hover:scale-105"
            >
              Home
            </NavLink>
            <NavLink
              to="/#recipes"
              className=" hover:text-[#808080] transition-all duration-300 hover:scale-105"
            >
              Explore
            </NavLink>
            <NavLink
              to="/favorites"
              className=" hover:text-[#808080] transition-all duration-300 hover:scale-105"
            >
              Favorites
            </NavLink>
            <NavLink
              to="/"
              className=" hover:text-[#808080] transition-all duration-300 hover:scale-105"
            >
              Others
            </NavLink>
          </div>
        </div>

        <div>
          <p className=" text-md lg:text-lg mb-2">Legal Terms</p>

          <div className=" text-slate-100 text-start mb-4 flex flex-col md:mb-0">
            <NavLink
              to="/"
              className=" hover:text-[#808080] transition-all duration-300 hover:scale-105"
            >
              Terms and Conditions
            </NavLink>
            <NavLink
              to="/"
              className=" hover:text-[#808080] transition-all duration-300 hover:scale-105"
            >
              About
            </NavLink>
            <NavLink
              to="/"
              className=" hover:text-[#808080] transition-all duration-300 hover:scale-105"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/"
              className=" hover:text-[#808080] transition-all duration-300 hover:scale-105"
            >
              History
            </NavLink>
            <NavLink
              to="/"
              className=" hover:text-[#808080] transition-all duration-300 hover:scale-105"
            >
              Copyrights
            </NavLink>
          </div>
        </div>
      </div>

      <div className=" flex  items-center justify-center flex-col lg:flex-col-reverse">
        <div className="flex items-center gap-4">
          <p className=" text-md lg:text-lg mb-2">Social Links</p>

          <Button
            title="Sign-Up"
            containerStyles="bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 transition-all duration-105 rounded-full min-w-[130px] "
          />
        </div>

        <div className=" text-slate-100 flex items-center gap-6 mt-4 lg:mt-0 lg:mb-4">
          <NavLink
            to="/"
            className=" bg-pink-600 text-black px-2 py-2 rounded-xl hover:rounded-none hover:rounded-tr-lg hover:rounded-bl-lg duration-200"
          >
            <FaInstagram size={23} />
          </NavLink>
          <NavLink
            to="/"
            className=" bg-blue-600 text-black px-2 py-2 rounded-xl hover:rounded-none hover:rounded-tr-lg hover:rounded-bl-lg duration-200"
          >
            <FaTwitter size={23} />
          </NavLink>
          <NavLink
            to="/"
            className=" bg-green-600 text-black px-2 py-2 rounded-xl hover:rounded-none hover:rounded-tr-lg hover:rounded-bl-lg duration-200"
          >
            <FaWhatsapp size={23} />
          </NavLink>
          <NavLink
            to="/"
            className=" bg-blue-600 text-black px-2 py-2 rounded-xl hover:rounded-none hover:rounded-tr-lg hover:rounded-bl-lg duration-200"
          >
            <FaFacebook size={23} />
          </NavLink>
        </div>
      </div>
      <div className=" text-white absolute transform top-[95%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <span className=" whitespace-nowrap">
          Oluwuyi <span className=" text-xl text-green-500 leading-10">Olumide&nbsp;</span> &copy; 2023
        </span>
      </div>
    </footer>
  );
};

export default Footer;
