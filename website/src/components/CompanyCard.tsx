function CompanyCard({companyDetails}) {
    return (
        <div
            className="hover:shadow-sm hover:ring-1 border border-gray-100 transition ease-in-out duration-200 bg-white rounded-xl p-4 space-y-2">
            <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
                <img src="img/Apree_Health_Logo.jpg" className="rounded-xl w-20"/>
                <strong className="text-lg font-bold">{companyDetails.name}</strong>
            </div>
            <p className="text-sm text-gray-500">Duration:{companyDetails.duration}</p>
            <div className="space-y-2">
                <div
                    className="hover:bg-blue-50 hover:-translate-y-0.5 p-3 rounded-md bg-gray-50 border-l-4 border-blue-400 pl-3">
                    <p className="font-semibold">Project: Admin Portal</p>
                    <p>Frameworks: Django</p>
                    <p>Cloud: GCP</p>
                </div>
                <div
                    className="hover:bg-blue-50 hover:-translate-y-0.5 p-3 rounded-md bg-gray-50  border-l-4 border-blue-400 pl-3">
                    <p className="font-semibold">Project: Files To BQ</p>
                    <p>Frameworks: Flask</p>
                    <p>Cloud: GCP</p>
                </div>
            </div>
        </div>
    )
}

export default CompanyCard