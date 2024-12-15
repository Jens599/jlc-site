import { MdLocationPin, MdMail, MdOutlinePhoneAndroid } from "react-icons/md";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <>
      <div className="w-full h-8 bg-brand-green shadow-2xl"></div>
      <div className="w-full h-96 bg-brand-blue flex gap-8 justify-around items-center text-xl text-white px-32">
        <div className="">
          <div className="flex flex-col gap-4">
            <span className="font-black">We are JLC!</span>
            <span className="w-[20ch]">
              “Your future door to Japan” Come and study japanese language to
              make your dreams true.
            </span>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <span className="font-black">Open Hours:</span>
            <div className="flex flex-col gap-2">
              <span>Sunday - Friday: 8:30 am - 6 pm,</span>
              <span>Saturday: CLOSED</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-black">Follow Us</span>

          <span className="w-[20ch]">
            Follow us on social media to get regular updates about our
            activities.
          </span>

          <SocialLinks />
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-black">Official info:</span>

          <div className="flex gap-4 ">
            <MdLocationPin className="size-6" />
            <span className="w-[30ch]">
              1st Floor Samar Group Building (Opposite to Shankerdev Campus,)
              Putalisadak
            </span>
          </div>

          <div className="flex gap-4 ">
            <MdOutlinePhoneAndroid className="size-6" />
            <span className="">01-4168047, 9860235991</span>
          </div>
          <div className="flex gap-4 ">
            <MdMail className="size-6" />
            <div className="flex flex-col">
              <span>jlcgakkou@gmail.com</span> <span>ppuri7226@yahoo.com</span>
            </div>
          </div>
        </div>

        <div className="h-[calc(100%-4rem)] w-2 bg-brand-red/50pnpm  rounded-full"></div>
      </div>
    </>
  );
};

export default Footer;
