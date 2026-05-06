import React, { useState, FC } from "react";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineMore,
  AiOutlineRight,
} from "react-icons/ai";

interface ProjectDetail {
  projectName: string;
  framework: string;
  cloud: string;
}

interface ProjectCardProps {
  projectDetail: ProjectDetail;
}

const ProjectCard: FC<ProjectCardProps> = ({ projectDetail }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const moreDetails = () => {
    console.log("clicked.. yes");
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="hover:bg-blue-50 hover:-translate-y-0.5 p-3 rounded-md bg-gray-50  border-l-4 border-blue-400 pl-3 mt-2">
      <p className="font-semibold">Project: {projectDetail.projectName}</p>
      <p>Frameworks: {projectDetail.framework}</p>
      <p>Cloud: {projectDetail.cloud}</p>

      <div onClick={moreDetails}
        className="flex flex-col justify-between items-center md:flex-row border-blue-200 border-2 gap-2 rounded-md p-2">
        <div className="flex  items-center gap-1">
          {<AiOutlineMore />}
          <p className="font-bold mb-0.5"> more details</p>
        </div>
        <div>{isExpanded ? <AiOutlineUp /> : <AiOutlineRight />}</div>
        <div
          className={`overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <p>
            Details: Project mainly focus on the member engagement, and giving the
            first glance of applications with landingpages. Each client will have
            their separate domain (i.e) White label application
          </p>
          <p className="text-body">
            <a
              href="https://carefirst.dev.memberactivities.com"
              className="inline-flex items-center font-medium text-fg-brand hover:underline text-blue-500"
            >
              carefirst.memberactivities.com
            </a>
          </p>
        </div>
      </div>

      {/* Structural Symmetry: Only render if expanded */}



      {/* <button
        onClick={moreDetails}
        className="bg-blue-500 text-white p-2 mt-1 font-bold rounded transition duration-300 ease-in-out"
      >
        {isExpanded ? "hide" : "more details"} */}
      {/* </button> */}
    </div>
  );
};

export default ProjectCard;
