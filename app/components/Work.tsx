import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Work = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center mx-auto max-w-2xl mt-5 mb-12 font-Ovo">
        From working on large scale applications to small solo projects,
        I&apos;ve built a variety of projects using the technologies listed
        above.
      </p>

      <div className="grid grid-cols-auto gap-5 my-10 dark:text-black">
        {workData.map(({ bgImage, title, description }, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_0_#000] duration-300 group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="https://github.com/gurkirtheerey"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-300 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right-arrow-bold"
          className="w-4"
        />
      </Link>
    </div>
  );
};

export default Work;
