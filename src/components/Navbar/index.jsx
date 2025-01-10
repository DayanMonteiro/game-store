import { motion } from "framer-motion";
import "./navbar.css";
import { useState } from "react";
import { RiGameFill } from "react-icons/ri";
import { NavbarData } from "../../data/MockData";
import { FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0,
        }}
        className="navbar-container"
      >
        <div className="navbar-logo">
          <RiGameFill /> Game Store
        </div>

        <div className="navbar-menu">
          <ul>
            {NavbarData.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="navbar-link">
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <a href="/profile" className="navbar-link">
                <FaRegUser />
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-hamburger">
          <MdMenu
            className="hamburger-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </motion.div>

      {menuOpen && (
        <div className="navbar-mobile-menu">
          <ul>
            {NavbarData.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="navbar-link">
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <a href="/profile" className="navbar-link">
                <FaRegUser />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
