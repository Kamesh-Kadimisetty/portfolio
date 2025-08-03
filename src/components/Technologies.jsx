import { motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});
  const Technologies = () => {
  return (
    <div id="technologies" className="pb-24 border-b border-neutral-900 ">
      <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      
       className="my-20 text-4xl text-center">Technologies👨‍💻</motion.h1>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{ opacity:0, x:-100 }}
        transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
        
  <motion.a 
      variants={iconvariants(0)}
      initial="initial"
      animate="animate"
        href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" width="40" height="40"/>
  </motion.a>
  <motion.a
   variants={iconvariants(0)}
   initial="initial"
   animate="animate"
  href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" width="40" height="40"/>
  </motion.a>
  <motion.a 
   variants={iconvariants(0)}
   initial="initial"
   animate="animate"
  href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="40" height="40"/>
  </motion.a>
  <motion.a
   variants={iconvariants(0)}
   initial="initial"
   animate="animate"
  href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="40" height="40"/>
  </motion.a>
  <motion.a 
   variants={iconvariants(0)}
   initial="initial"
   animate="animate"
  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
  </motion.a>
  <motion.a
   variants={iconvariants(0)}
   initial="initial"
   animate="animate"
  href="https://www.java.com" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" width="40" height="40"/>
  </motion.a>
  <motion.a
   variants={iconvariants(0)}
   initial="initial"
   animate="animate"
  href="https://www.python.org" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="40" height="40"/>
  </motion.a>
  <motion.a
   variants={iconvariants(0)}
   initial="initial"
   animate="animate"
  href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React.js" width="40" height="40"/>
  </motion.a>
  <motion.a
   variants={iconvariants(0)}
   initial="initial"
   animate="animate"
  href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
   <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"       alt="tailwind" width="40" height="40"/>
  </motion.a>
    <motion.a 
      variants={iconvariants(0)}
      initial="initial"
      animate="animate"
    href="https://cloud.google.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" width="40" height="40"/>
  </motion.a>
  <motion.a
      variants={iconvariants(0)}
      initial="initial"
      animate="animate"
  href="https://git-scm.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" width="40" height="40"/>
  </motion.a>
      </motion.div>
    </div>
  );
};

export default Technologies;
