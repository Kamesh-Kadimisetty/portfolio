import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Gayatri Vidya Parishad College of Engineering, Visakhapatnam, India",
      duration: "2023-Present"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College, Visakhapatnam, India",
      duration: "2021-2023"
    },
    {
      degree: "Secondary",
      institution: "Sri Chaitanya Techno College, Visakhapatnam, India",
      duration: "2020-2021"
    }
  ];

  return (
    <div className="pb-16 border-b border-neutral-900">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className="my-20 text-4xl text-center"
      >
        Education🎓
      </motion.h1>
      
      {educationData.map((edu, index) => (
        <motion.section 
          key={index}
          className="mb-6 text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}  // Adding delay to stagger the animations
        >
          <motion.h2 
            className="mb-1 text-2xl font-bold"
            whileHover={{ scale: 1.05 }}  // Optional hover effect
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {edu.degree}
          </motion.h2>
          <motion.p 
            className="mb-1"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {edu.institution}
          </motion.p>
          <motion.p 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {edu.duration}
          </motion.p>
        </motion.section>
      ))}
    </div>
  );
};

export default Education;

