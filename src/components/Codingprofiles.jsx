import React from 'react'
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
const Codingprofiles = () => {
  return (
    <div className="pb-24 border-b border-neutral-900 ">
      <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      
       className="my-20 text-4xl text-center">Coding Profiles 🎯</motion.h1>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{ opacity:0, x:-100 }}
        transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
    {/* LEETCODE */}
  <motion.a
   variants={iconvariants(0)}
   initial="initial"
   animate="animate"
  href="https://www.leetcode.com/Kamesh_Kadimisetty" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="C++" width="40" height="40"/>
  </motion.a>
  {/* CODEFORCES */}
  <motion.a
  variants={iconvariants(0)}
  initial="initial"
  animate="animate"
  href="https://codeforces.com/profile/Kamesh_Kadimisetty" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg"  alt="Codeforces" width="40" height="40"/>
</motion.a>
{/* GFG */}
<motion.a
  variants={iconvariants(0)}
  initial="initial"
  animate="animate"
  href="https://auth.geeksforgeeks.org/user/KameshKadimisetty" target="_blank" rel="noreferrer">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GeeksforGeeks" width="50" height="50" />
</motion.a>
{/* CODECHEF */}
<motion.a
  variants={iconvariants(0)}
  initial="initial"
  animate="animate"
  href="https://www.codechef.com/users/kameshk" target="_blank" rel="noreferrer">
  <img src="https://cdn.codechef.com/images/cc-logo.svg" alt="CodeChef" width="80" height="80"/>
</motion.a>
{/* HACKERRANK */}
<motion.a
  variants={iconvariants(0)}
  initial="initial"
  animate="animate"
  href="https://www.hackerrank.com/KameshK2005" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="HackerRank" width="40" height="40" />
</motion.a>
    </motion.div>
    </div>
  )
}

export default Codingprofiles
