import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaGraduationCap, FaFolder, FaEnvelope  } from "react-icons/fa";

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
    { id: 'experience', label: 'Experience', icon: FaBars  },
    { id: 'projects', label: 'Projects', icon: FaFolder },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className="fixed z-50 p-2 text-white transition-colors duration-200 bg-gray-800 rounded-md top-4 left-4 hover:bg-gray-700"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 z-50 h-full bg-gray-900 text-white 
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        w-64 shadow-xl`}>
        
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
              <span className="text-lg font-bold text-white">K</span>
            </div>
            <div>
              <h3 className="font-semibold">Kamesh Kadimisetty</h3>
              <p className="text-sm text-gray-400">Full Stack Web Developer</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className="flex items-center w-full px-4 py-3 text-left text-gray-300 transition-colors duration-200 rounded-lg hover:text-white hover:bg-gray-800"
                  >
                    <IconComponent size={18} className="mr-3" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;