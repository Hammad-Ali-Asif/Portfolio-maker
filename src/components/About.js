import React from "react";

const About = ({ profilePic, skills, interests, description }) => {
  const skillList = skills.split(",").map((skill) => skill.trim());

  return (
    <section
      id="about"
      className="bg-gray-100 py-16 px-4 text-center md:text-left"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Picture */}
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-purple-500">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 mb-4">{description}</p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Skills:</h3>
            <ul className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
              {skillList.map((skill, index) => (
                <li
                  key={index}
                  className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Interests:</h3>
            <p className="text-gray-700 mt-2">{interests}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
