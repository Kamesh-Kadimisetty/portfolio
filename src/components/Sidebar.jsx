import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 h-full">
      <button onClick={toggleSidebar} className="p-4 text-white lg:hidden">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar Content */}
      <div className={`lg:flex flex-col items-center w-64 h-full bg-neutral-900 text-neutral-300 p-4 
        ${isOpen ? "block" : "hidden"} lg:block`}>
        <nav className="flex flex-col gap-4 mt-10">
          <a href="#hero" className="hover:text-white" onClick={closeSidebar}>Home</a>
          <a href="#about" className="hover:text-white" onClick={closeSidebar}>About</a>
          <a href="#technologies" className="hover:text-white" onClick={closeSidebar}>Technologies</a>
          <a href="#education" className="hover:text-white" onClick={closeSidebar}>Education</a>
          <a href="#projects" className="hover:text-white" onClick={closeSidebar}>Projects</a>
          <a href="#contact" className="hover:text-white" onClick={closeSidebar}>Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
