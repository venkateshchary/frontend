
function ProjectCard({projectDetail}) {
    return (
        <div
            className="hover:bg-blue-50 hover:-translate-y-0.5 p-3 rounded-md bg-gray-50  border-l-4 border-blue-400 pl-3">
            <p className="font-semibold">Project: {projectDetail.projectName}</p>
            <p>Frameworks: {projectDetail.framework}</p>
            <p>Cloud: {projectDetail.cloud}</p>
        </div>
    )
}

export default ProjectCard