import { serviceData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        viewport={{ once: true }}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        viewport={{ once: true }}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center mx-auto max-w-2xl mt-5 mb-12 font-Ovo"
      >
        With my skills and expertise, I am able to provide a range of services
        to help you achieve your goals.
      </motion.p>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-all duration-300 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
