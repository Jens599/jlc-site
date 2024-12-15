import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <ul className="gap-2 flex">
      <li>
        <Link to="">
          <CiFacebook />
        </Link>
      </li>
      <li>
        <Link to="">
          <CiTwitter />
        </Link>
      </li>
      <li>
        <Link to="">
          <CiInstagram />
        </Link>
      </li>
      <li>
        <Link to="">
          <FaTiktok />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
