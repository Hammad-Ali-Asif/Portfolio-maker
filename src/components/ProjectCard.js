import React from "react";

const ProjectCard = ({ title, description, image, github }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 h-full flex flex-col">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded mb-4"
        />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 font-semibold underline mt-4 inline-block"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
