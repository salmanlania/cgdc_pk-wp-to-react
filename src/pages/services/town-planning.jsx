import { Helmet } from "react-helmet";
import ServiceComp from "../../Components/service/services";
import service2 from "../../assets/images/service/service2.jpg";

const TownPlanning = () => {
    return (
        <>
            <Helmet>
                <title>Town Planning - CGD Consulting - Engineering Excellence</title>
            </Helmet>
            <ServiceComp
                serviceName={"Town Planning"}
                description={"CGD Consulting is a trusted provider of town planning services, helping our clients navigate the complexities of urban planning and development. Our team of experienced professionals leverages their expertise to deliver innovative and sustainable solutions that optimize land use, enhance public spaces, and foster economic growth. We provide end-to-end town planning services, from site analysis and feasibility studies to zoning and land use regulations, ensuring that our clients’ projects are not only viable but also align with their goals and objectives. Our collaborative approach and use of cutting-edge technology enable us to deliver superior results that meet and exceed our clients’ expectations. At CGD Consulting, we are committed to creating vibrant, inclusive, and resilient communities through our town planning services."}
                url={service2}
            />
        </>
    );
}

export default TownPlanning;