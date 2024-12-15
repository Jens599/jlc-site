import { FaLongArrowAltRight } from "react-icons/fa";
import HeroCard from "../components/HeroCard";
import { homeCards } from "../data/home";
import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";
import heroBG from "../assets/heroBG.png";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full relative overflow-hidden">
        <img
          src={hero}
          alt=""
          className="col-span-full place-self-center object-cover absolute -z-1 w-full"
        />
        <div className="flex flex-col items-end justify-center w-full text-white uppercase h-150 ">
          <div className="flex flex-col items-end gap-4 font-bold">
            <span className="text-8xl text-shadow">Study In</span>
            <span className="text-8xl text-shadow">Japan</span>
            <Link to="/Study in Japan">
              <div className="flex items-center gap-6 py-2 pr-2 pl-4 rounded-full bg-brand-red text-shadow shadow hover:bg-brand-green transition">
                View Details
                <div className="p-2 text-2xl bg-white rounded-full aspect-square">
                  <FaLongArrowAltRight className="size-6 text-brand-red" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full relative">
        <img
          src={heroBG}
          alt="Pattern"
          className="w-full -z-1 absolute object-cover object-bottom aspect-[3/1]"
        />
        <div className="flex flex-col items-center md:flex-row justify-center w-full">
          {homeCards.map((card) => (
            <HeroCard
              icon={card.icon}
              alt={card.alt}
              title={card.title}
              statement={card.statement}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
