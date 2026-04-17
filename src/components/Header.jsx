import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaPlus } from "react-icons/fa";

const Header = () => {
    // Shared links to avoid repetition
    const links = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#e3b577] font-bold" : "hover:text-[#e3b577]"}>Home</NavLink></li>
            <li><NavLink to="/AllCoffees" className={({ isActive }) => isActive ? "text-[#e3b577] font-bold" : "hover:text-[#e3b577]"}>All Coffees</NavLink></li>
            <li><NavLink to="/learnmore" className={({ isActive }) => isActive ? "text-[#e3b577] font-bold" : "hover:text-[#e3b577]"}>About Us</NavLink></li>
        </>
    );

    return (
        <header className="navbar bg-[#3b2a28] text-white px-2 md:px-8 py-3 shadow-lg sticky top-0 z-50">
            {/* Navbar Start: Mobile Menu & Logo */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#3b2a28] border border-[#e3b577]/20 rounded-box w-52">
                        {links}
                    </ul>
                </div>

                <Link to="/" className="flex items-center gap-2">
                    <span className="text-xl md:text-3xl font-semibold tracking-wide whitespace-nowrap">
                        ☕ <span className=" xs:inline">Espresso Emporium</span>
                    </span>
                </Link>
            </div>

            {/* Navbar Center: Desktop Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 text-lg">
                    {links}
                </ul>
            </div>

            {/* Navbar End: Action Button */}
            <div className="navbar-end">
                <Link to={"/addcoffee"}>
                    <button className="btn btn-sm md:btn-md flex items-center gap-2 px-3 md:px-6 bg-[#3b2a28] hover:bg-amber-500 border-2 border-[#e3b577] text-white transition-all duration-300 shadow-md rounded-lg">
                        <FaPlus className="text-xs md:text-sm" />
                        <span className="text-lg md:text-base font-bold">Add Coffee</span>
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;