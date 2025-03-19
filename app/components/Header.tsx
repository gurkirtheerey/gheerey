import { assets } from "@/assets/assets";
import Image from "next/image";
const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 h-screen">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile_img"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Gurkirt Heerey
        <Image src={assets.hand_icon} alt="hand_icon" className="w-6" />
      </h3>
      <h1 className="text-3xl md:text-6xl lg:text-[66px] font-Ovo">
        frontend software engineer based in Sacramento.
      </h1>
      <p>
        I am a frontend engineer from California, USA with 6 years of experience
        in multiple companies like Linqto and Novo Technologies.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full text-white flex items-center gap-2 bg-black"
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt="right_arrow_white"
            className="w-4"
          />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt="download_icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
