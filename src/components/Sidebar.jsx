import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaGraduationCap, FaFolder, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeSidebar();
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'technologies', label: 'Skills', icon: FaCode },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'projects', label: 'Projects', icon: FaFolder },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <>
      {/* Toggle Button - Always visible */}
      <button 
        onClick={toggleSidebar} 
        className="fixed z-50 p-3 text-white transition-colors duration-200 border rounded-md shadow-lg top-4 left-4 bg-neutral-800 hover:bg-neutral-700 border-neutral-600"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Content */}
      <div className={`fixed top-0 left-0 z-40 h-full bg-neutral-900 text-neutral-300 p-4 
        transition-transform duration-300 ease-in-out shadow-xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        w-48 border-r border-neutral-700`}>
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <nav className="flex flex-col gap-4 mt-16">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="flex items-center gap-3 px-3 py-2 text-left transition-colors duration-200 rounded hover:text-white hover:bg-neutral-800"
                  >
                    <IconComponent size={16} className="text-neutral-400" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
