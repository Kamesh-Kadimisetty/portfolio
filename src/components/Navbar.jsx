import logo from "../assets/K-logo1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
      <div className="flex items-center flex-shrink-0"> 
        <img className="w-10 mx-2" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a href="https://www.linkedin.com/in/kadimisetty-kumar-venkata-kamesh-b1b841300/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Kamesh-Kadimisetty" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/KameshK05" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/kamesh_kadimisetty/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
};

export default Navbar;
