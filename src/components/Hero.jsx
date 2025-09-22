import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Kamesh.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="hero" className="pb-24 border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-5xl font-thin tracking-tight lg:mt-1 lg:text-6xl"
            >
              Kamesh Kadimisetty
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-tight text-transparent lg:text-3xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
             Full Stack Web Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-6 my-2 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full mt-8 lg:w-1/2 lg:p-8 lg:mt-0">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Kamesh"
              className="object-cover w-48 h-48 rounded-full lg:w-72 lg:h-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


