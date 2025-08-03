import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="pb-4 border-b border-neutral-900">
      <motion.h1 
        // whileInView={{ opacity: 1, y: 0 }}
        // initial={{ opacity: 0, y: -100 }}
        // transition={{ duration: 1.0 }}
      className="my-20 text-4xl text-center">Projects🚀</motion.h1>
      <div>
      {PROJECTS.map((project, index) => (
        <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div 
              whileInView={{ opacity: 1,  x:0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.0 }}
          className="w-full lg:w-1/4">
          <img
            src={project.image}
            width={150}
            height={150}
            alt={project.title}
            className="mb-6 rounded"
          />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.0 }}
           className="w-full max-w-xl mb-6 lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Projects;


