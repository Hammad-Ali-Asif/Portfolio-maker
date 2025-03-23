import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Projects = ({ projects }) => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    // Load initial project data
    if (Array.isArray(projects)) {
      setProjectList(projects);
    }
  }, [projects]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(projectList);
    const [movedItem] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, movedItem);
    setProjectList(reordered);
  };

  if (!projectList.length) {
    return (
      <div id="projects" className="py-16 text-center text-gray-500">
        No projects to display.
      </div>
    );
  }

  return (
    <section id="projects" className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
        My Projects
      </h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="projectCards" direction="horizontal">
          {(provided) => (
            <div
              className="flex flex-wrap justify-center gap-6"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {projectList.map((project, index) => (
                <Draggable
                  key={`project-${index}`}
                  draggableId={`project-${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="w-full sm:w-80"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ProjectCard {...project} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default Projects;
