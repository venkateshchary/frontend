import ProjectCard from './projectCard.tsx';


function CompanyCard({ name, duration, projectDetails, logo }) {
    return (
        <div
            className="hover:shadow-sm hover:ring-1 border border-gray-100 transition ease-in-out duration-200 bg-white rounded-xl p-4 space-y-2 ml-6 mb-4">
            <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
                <img src={logo} alt="Apree health logo" className="rounded-xl w-20" />
                <strong className="text-lg font-bold">{name}</strong>
            </div>
            <p className="text-sm text-gray-500">Duration:{duration}</p>
            <div className="space-y-2">
                {
                    projectDetails.map((project) => (
                        <ProjectCard projectDetail={project} key={project.projectName} />
                    ))
                }
            </div>
        </div>
    )
}

export default CompanyCard