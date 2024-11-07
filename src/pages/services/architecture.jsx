import { Helmet } from "react-helmet";
import ServiceComp from "../../Components/service/services";
import service1 from "../../assets/images/service/service1.jpg";

const Architecture = () => {
    return (
        <>
            <Helmet>
                <title>Architecture - CGD Consulting - Engineering Excellence</title>
            </Helmet>
            <ServiceComp
                serviceName={"Architecture"}
                description={"CGD Consulting is a leading provider of architecture services, offering a comprehensive suite of solutions designed to meet the diverse needs of our clients. Our team of expert architects is committed to delivering innovative and sustainable designs that optimize functionality, enhance aesthetic appeal, and elevate user experience. We provide end-to-end architectural services, from conceptualization to construction, ensuring seamless project execution and timely delivery. Our extensive experience in the industry, coupled with our cutting-edge technology and a collaborative approach, enables us to deliver superior results that exceed expectations. Whether it’s designing a residential complex or a commercial building, we pride ourselves on delivering bespoke solutions tailored to our clients’ unique needs. At CGD Consulting, we are dedicated to creating exceptional architectural designs that not only meet but surpass our clients’ expectations."}
                url={service1}
            />
        </>
    );
}

export default Architecture;