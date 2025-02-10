import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom"; // Use 'react-router-dom' instead of 'react-router'
import { FaRegUser, FaBell, FaBars } from "react-icons/fa";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useAuth } from "../utils";

const Navbar = ({ theme, toggleTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useAuth();

    const navLinks = [
        { name: "Home", route: "/" },
        { name: "Gallery", route: "/gallery" },
        { name: "Categories", route: "/categories" },
        { name: "About Us", route: "/about" },
        { name: "Something more", route: "/hello" },
    ];

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="flex justify-between bg-background text-text w-full py-4 px-5 xl:px-12">
            <div className="flex w-full items-center">
                {/* Desktop Navigation */}
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.route}
                                className={({ isActive }) =>
                                    isActive ? "text-accent" : "hover:text-accent"
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Desktop Icons */}
                <div className="hidden xl:flex items-center space-x-5">
                    <button
                        onClick={toggleTheme}
                        className="text-text hover:text-accent"
                    >
                        {theme === "dark" ? (
                            <IoSunnyOutline className="h-6 w-6" />
                        ) : (
                            <IoMoonOutline className="h-6 w-6" />
                        )}
                    </button>
                    {user ? (
                        <>
                            <Link className="flex items-center hover:text-accent" to="/profile">
                                <FaRegUser className="h-6 w-6" />
                            </Link>
                            <Link className="flex items-center relative hover:text-accent" to="/notifications">
                                <FaBell className="h-6 w-6" />
                                <span className="absolute -mt-5 ml-4">
                                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                                </span>
                            </Link>
                        </>
                    ) : (
                        <Link className="flex items-center hover:text-accent" to="/login">
                            <FaRegUser className="h-6 w-6" />
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="xl:hidden flex items-center">
                <button
                    onClick={handleMobileMenuToggle}
                    className="text-text hover:text-accent"
                >
                    <FaBars className="h-6 w-6" />
                </button>

                {isMobileMenuOpen && (
                    <div className="absolute top-16 right-0 bg-background text-text w-full shadow-lg py-4 px-6 rounded-md">
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.route}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-accent"
                                                : "hover:text-accent"
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                            {user ? (
                                <>
                                    <Link className="flex items-center hover:text-accent" to="/profile">
                                        <FaRegUser className="h-6 w-6" />
                                    </Link>
                                    <Link className="flex items-center relative hover:text-accent" to="/notifications">
                                        <FaBell className="h-6 w-6" />
                                        <span className="absolute -mt-5 ml-4">
                                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                                        </span>
                                    </Link>
                                </>
                            ) : (
                                <Link className="flex items-center hover:text-accent" to="/login">
                                    <FaRegUser className="h-6 w-6" />
                                </Link>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
