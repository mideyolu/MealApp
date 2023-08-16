import Logo from '../Images/logo.png'
import {HiMenuAlt3} from 'react-icons/hi'
import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Button from './Button'
const Navbar = () => {
  const [ isActive , setIsActive] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block h-8 w-8 lg:w-14 lg:h-14"
          />
          Recipe<span>Radar</span>
        </Link>

        <ul className="hidden md:flex text-white gap-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/#recipes">Explore</NavLink>
          </li>
         
        </ul>

        <Button
          title="Sign-in"
          containerStyles=" hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 transition-all duration-105 rounded-full min-w-[130px] "
        />

        <button
          className=" block md:hidden text-white"
          onClick={() => setIsActive((prev) => !prev)}
        >
          {isActive ? <FaTimes size={25} /> : <HiMenuAlt3 size={25} />}
        </button>
      </nav>

      <div className={`md:hidden block transition-all duration-500 absolute bg-black w-full ${isActive ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <nav
          className=' flex flex-col w-full px-4 pt-6 pb-10 text-white gap-6 text-[1rem]'
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/#recipes">Explore</NavLink>
        
        </nav>
      </div>
    </header>
  );
}

export default Navbar