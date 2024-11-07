import { Helmet } from "react-helmet";
import ServiceComp from "../../Components/service/services";
import service8 from "../../assets/images/service/service8.jpg";

const Interior = () => {
    return (
        <>
            <Helmet>
                <title>Interior Designing - CGD Consulting - Engineering Excellence</title>
            </Helmet>
            <ServiceComp
                serviceName={"Interior Designing"}
                description={"CGD Consulting is a leading provider of interior designing services, offering a comprehensive suite of solutions designed to enhance the functionality and aesthetic appeal of interior spaces. Our team of expert designers works closely with our clients to understand their vision and goals, as well as the unique requirements of their spaces. We provide end-to-end interior designing services, from conceptualization to implementation, ensuring seamless project execution and timely delivery. Our extensive experience in the industry, coupled with our use of cutting-edge technology and best practices, enables us to deliver superior results that exceed expectations. Whether it’s designing a commercial space or a residential interior, we pride ourselves on delivering bespoke solutions tailored to our clients’ unique needs."}
                url={service8}
            />
        </>
    );
}

export default Interior;