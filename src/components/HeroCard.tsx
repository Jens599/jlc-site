import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  icon: string;
  alt: string;
  title: string;
  statement: string;
}

const HeroCard = ({ icon, alt, title, statement }: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center m-6 bg-white shadow-2xl w-96 py-12.5 px-2 -translate-y-30 ">
      <div className="flex items-center justify-center w-1/3 bg-brand-green rounded-full aspect-square ">
        <img src={icon} alt={alt} />
      </div>
      <div className="text-2xl font-bold text-center text-brand-blue">
        {title}
      </div>
      <div className="text-gray-700 min-h-20 flex items-center justify-center text-center font-medium">
        {statement}
      </div>
      <Link
        to="/Study in Japan"
        className="font-bold border-2 border-gray-300 py-2 px-4 h-12 rounded-full origin-right transition relative outline  group/cta overflow-hidden "
      >
        <div className="flex items-center gap-4 relative">
          <span className="group-hover/cta:text-white delay-300">Get Started</span>
          <div className="p-2 text-white bg-brand-green rounded-full aspect-square">
            <FaLongArrowAltRight />
          </div>
        </div>
        <div className="absolute w-16 aspect-square bg-brand-green rounded-full -top-6 -translate-y-6 -right-3 group-hover/cta:scale-500 scale-1 transition-transform duration-1000 -z-1 ease-in-out"></div>
      </Link>
    </div>
  );
};

export default HeroCard;
