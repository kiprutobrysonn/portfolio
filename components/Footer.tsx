import MagicButton from "./MagicButton";
import Theuri from "../public/me.jpg";
import { socialMedia } from "@/data";
import Image from "next/image";

const Avatar = () => (
  <Image className="p-1 w-8 h-8 rounded-lg origin-top-left rotate-12" src={Theuri} alt="Theuri" loading="lazy"/>
);

const Footer = () => {
  return (
    <footer className="w-full pt-4 sm:pt-6 md:pt-8 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Get <span className="text-purple">started?</span>
        </h1>
        <p className="text-white-200 mt-4 sm:mt-6 md:mt-8 mb-5 text-center">
          Send me an email and I'll reach out to you asap!
        </p>
        <a href="mailto:theuridavid56@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<Avatar />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-12 md:mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <Image src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light py-4">
          © iamtheuri
        </p>
      </div>
    </footer>
  );
};

export default Footer;