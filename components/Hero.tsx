import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { IoMdCloudDownload } from "react-icons/io";
import DownloadResume from "./DownloadResume";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hi, I'm David
          </p>
          <TextGenerateEffect
            words="Kenyan Based Web Developer"
            className="text-center text-[40px] sm:text-2xl md:text-5xl lg:text-6xl"
          />
            <DownloadResume
              title="Download Resume"
              icon={<IoMdCloudDownload />}
              position="right"
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;
