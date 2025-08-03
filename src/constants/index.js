import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `I'm a passionate Frontend Web Developer with a knack for crafting robust and scalable web applications.I’ve honed my skills in cutting-edge front-end technologies like React and Tailwind CSS.
I enjoy leveraging my technical skills and creativity to build innovative solutions . Whether it's developing responsive, high-performance websites or creating seamless user interfaces.
I'm always eager to learn new tools and stay updated with industry trends to ensure the solutions I deliver are modern, efficient, and future-proof`;

export const ABOUT_TEXT = `I am currently pursuing a BTech in Information Technology. As a dedicated and versatile front-end developer, I have a passion for creating efficient and user-friendly web applications. Over time, I have gained hands-on experience with a range of technologies, including HTML, CSS, JavaScript, React, and Tailwind CSS. 
My journey into web development started with a deep curiosity about how things work, which has now evolved into a career focused on continuous learning and adapting to new challenges. I am passionate about exploring innovative projects and always excited to work on new and creative solutions.
Outside of coding, I enjoy staying active, exploring emerging technologies, and contributing to open-source and web development projects.`;

export const PROJECTS = [
  {
    title: "AgriConnect",
    image: project1,
    description:
      "A platform for Farmers to network and increase their revenue by selling their products directly to the customers.",
    technologies: ["React","Tailwindcss","ExpressJs","MongoDB","Flask","Firebase"],
  },
  {
    title: "Amazon Clone",
    image: project6,
    description:
      "A full-stack eCommerce website with user authentication, product listings, cart management, and secure checkout by using ReactJs and firebase . Features include a responsive UI, real-time updates, and seamless user experience.",
    technologies: ["React","Tailwindcss","Firebase"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React","Tailwindcss","Firebase"],
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Javascript"],
  // },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, education and contact information.",
  //   technologies: ["React", "Tailwindcss"],
  // },
];
