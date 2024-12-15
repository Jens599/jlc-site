import { MdLocationPin, MdMail } from "react-icons/md";
import Nav from "./Nav";
import { FaClock, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full h-16 bg-brand-green flex justify-around items-center text-white px-16">
        <div className="flex gap-2">
          <MdMail className="size-6" />
          jlcgakkou@gmail.com
        </div>
        <div className="flex gap-2">
          <FaClock className="size-6" />
          Sun - Fri: 8:30 am - 06.00pm
        </div>
        <Link to="">
          <div className="flex gap-2">
            <MdLocationPin className="size-6" />
            Suwarna Marg, Kathmandu Next to Shanker Dev Campus
          </div>
        </Link>
        <Link
          to="/Study in Japan"
          className="bg-brand-red h-full items-center flex"
        >
          <div className="flex gap-2 items-center px-8 uppercase">
            Appointment
            <FaLongArrowAltRight className="size-6" />
          </div>
        </Link>
      </div>
      <Nav />
    </>
  );
};

export default Header;
