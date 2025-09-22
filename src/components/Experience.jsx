import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <h1 className="my-20 text-4xl text-center">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="flex flex-wrap mb-8 lg:justify-center"
          >
            {/* Left side - Year */}
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </div>

            {/* Right side - Role, Company, Project, Description, Tech */}
            <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-1 text-xl font-bold">{experience.role}</h6>
            <p className="mb-2 text-sm font-medium text-purple-300">
                {experience.company}
              </p>

              {/* Project Name */}
              {experience.project && (
                <p className="mb-2 text-sm font-medium text-purple-200">
                  Project: {experience.project}
                </p>
              )}

              <p className="mb-4 text-neutral-400">
                {experience.description}
              </p>

              {/* Technologies */}
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 mt-4 mr-2 text-sm font-medium text-purple-500 rounded bg-neutral-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
