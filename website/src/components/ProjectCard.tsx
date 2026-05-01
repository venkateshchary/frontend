import React, { useState } from 'react';




function ProjectCard({ projectDetail }) {
    const initialState = false;
    const [isExpanded, setIsExpanded] = useState(initialState);

    const moreDetails = () => {
        console.log("clicked.. yes");
        setIsExpanded((prevState) => !prevState );
    };


    return (
        <div
            className="hover:bg-blue-50 hover:-translate-y-0.5 p-3 rounded-md bg-gray-50  border-l-4 border-blue-400 pl-3">
            <p className="font-semibold">Project: {projectDetail.projectName}</p>
            <p>Frameworks: {projectDetail.framework}</p>
            <p>Cloud: {projectDetail.cloud}</p>
            <div id="more-details" className={isExpanded ? "visible" : "hidden"}>
                <p>Details:</p>
            </div>
            <button onClick={moreDetails} className="bg-blue-500 text-white p-2 mt-1 font-bold rounded">
                {isExpanded ? 'hide' : 'more details'}
            </button>

        </div>
    )
}

export default ProjectCard