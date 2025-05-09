import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 h-screen">
      <motion.div
        viewport={{ once: true }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.headshot}
          alt="headshot"
          className="rounded-full w-32"
        />
      </motion.div>
      <motion.h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hey! I&apos;m Gurkirt Heerey
        <Image src={assets.hand_icon} alt="hand_icon" className="w-6" />
      </motion.h3>
      <motion.h1
        viewport={{ once: true }}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-3xl md:text-6xl lg:text-[66px] font-Ovo"
      >
        frontend software engineer based in Sacramento.
      </motion.h1>
      <p>
        With 6 years of experience as a software engineer, I&apos;m ready to
        bring my skills and expertise to the right role.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full text-white flex items-center gap-2 bg-black dark:bg-transparent dark:text-white dark:border-white"
          viewport={{ once: true }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt="right_arrow_white"
            className="w-4"
          />
        </motion.a>
        <motion.a
          href="/gurkirt_heerey_resume.pdf"
          download="Gurkirt-Heerey-Resume.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:border-white/50 dark:text-black dark:bg-white"
          viewport={{ once: true }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          my resume
          <Image
            src={assets.download_icon}
            alt="download_icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
