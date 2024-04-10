import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import Modal from "./Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/service", link: "Services" },
    { path: "/About", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-black text-white top-0 right-0 left-0">
      <nav className="p-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Design<span className="text-red-400">KJT</span>
        </a>

        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-white lg:flex gap-4 items-center hidden">
          <a className="hover:text-red-500">
            <FaFacebook />
          </a>
          <a className="hover:text-red-500">
            <FaDribbble />
          </a>
          <a className="hover:text-red-500">
            <FaTwitter />
          </a>
          <button
            onClick={openModal}
            className="bg-red-500 px-5 py-2 font-medium rounded hover:bg-white hover:text-red-500 transition-all duration-200 ease-in"
          >
            Log In
          </button>
        </div>

        <Modal openModal={isModalOpen} closeModal={closeModal} />

        <div onClick={toggleMenu} className="md:hidden">
          <button className="cursor-pointer">
            {isOpen ? (
              <span className="w-5 h-5 text-lg">X</span>
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
