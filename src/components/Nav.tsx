import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import SocialLinks from "./SocialLinks";

const Nav = () => {
  return (
    <div className="w-full bg-white flex justify-around p-4 items-center shadow-sm font-medium">
      <div className="w-28">
        <img src={logo} alt="JLC logo" className="w-full" />
      </div>
      <nav className="">
        <ul className="flex gap-4 text-center">
          <li>
            <NavLink className="px-1" to="/Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="px-1" to="/About us">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink className="px-1" to="/Study in Japan">
              Study in Japan
            </NavLink>
          </li>
          <li>
            <NavLink className="px-1" to="/Our Team">
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink className="px-1" to="/FAQ">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink className="px-1" to="/Contact Us">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Nav;
