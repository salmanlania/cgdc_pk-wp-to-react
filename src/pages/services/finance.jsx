import { Helmet } from "react-helmet";
import ServiceComp from "../../Components/service/services";
import service7 from "../../assets/images/service/service7.jpg";

const Finance = () => {
    return (
        <>
            <Helmet>
                <title>Financial Feasibility - CGD Consulting - Engineering Excellence</title>
            </Helmet>
            <ServiceComp
                serviceName={"Financial Feasibility"}
                description={"CGD Consulting is a leading provider of financial feasibility services, offering a range of solutions designed to help our clients make informed decisions about their projects. Our team of expert economists and analysts works closely with our clients to understand their goals and objectives, as well as the financial implications of their projects. We provide end-to-end financial feasibility services, from project appraisal to financial modeling and investment analysis, ensuring seamless project execution and timely delivery. Our extensive experience in the industry, coupled with our use of cutting-edge technology and best practices, enables us to deliver superior results that exceed expectations."}
                url={service7}
            />
        </>
    );
}

export default Finance;