const ServiceComp = ({ description, serviceName, url }) => {
    return (
        <>
            <div className="service">
                <div className={`relative serviceImg bg-[url('./assets/images/${url}')] h-[30vh] bg-no-repeat bg-cover bg-center md:h-[50vh] md:bg-top flex items-center justify-center`}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    {/* Content */}
                    <h1 className="uppercase font-bold font-outfit lg:text-5xl text-4xl text-white text-center relative">
                        <b>{serviceName}</b>
                    </h1>
                </div>

                <div className="py-16 px-4">
                    <div className="font-light font-jost mx-auto text-justify lg:leading-loose leading-relaxed">
                        <p className="max-w-xl mx-auto">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceComp;