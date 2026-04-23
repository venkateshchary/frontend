function UserInfoCard(){
    return (
        <section className="m-6">
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-8 p-4 border border-gray-100 shadow-sm rounded-xl">
            <div className="w-full md:w-3/5 space-y-6">
                <h4 className="text-xl text-orange-500">Hello, Welcome</h4>
                <h2 className="text-2xl font-bold">I m Venkatesh Vadla</h2>
                <p>I have 9 Years of experience in python programming worked on frameworks Flask and Django
                    Have good understanding of <strong>AWS Services(EC2, S3 Buckets, SQS and RDS with PSQL)</strong>
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Contact</button>
            </div>
            <div className="w-full md:w-2/5"><img src="img/alen.jpg" className="rounded-xl w-full" alt="venkatesh vadla"/> </div>
        </div>
    </section>
    )
}

export default UserInfoCard