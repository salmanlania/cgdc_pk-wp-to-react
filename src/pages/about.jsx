import { Col, Image, Row } from "antd";
import Eye from "../assets/images/abouteye.jpg";
import Mission from "../assets/images/aboutmission.jpg";

const About = () => {
    return (
        <>
            <div className="about">
                <div className="aboutImage flex items-center justify-center">
                    <h1 className="uppercase font-bold font-outfit lg:text-5xl text-4xl text-white text-center">
                        <b>About Us</b>
                    </h1>
                </div>
                <div className="bg-zinc-600 py-16 px-4">
                    <div className="text-white font-light font-jost mx-auto text-justify lg:leading-loose leading-relaxed">
                        <p className="max-w-xl mx-auto">
                            CGD Consulting is a leading consulting firm renowned for its expertise in urban planning, architecture, and engineering. Founded by Hafeez Habibi, the company has accomplished successful projects in Pakistan and internationally and is known for its dedication to providing high-quality services at affordable prices. CGD Consulting has worked with a wide range of clients from both the public and private sectors, including multinationals, public and private limited companies, and various government organizations, including forces. The company is committed to offering personalized service and maintaining a high level of quality for each client and every project. In addition to its expertise in urban planning, architecture, and engineering, CGD Consulting is also highly respected for its professionalism and reliability. The company is well-equipped to help clients efficiently achieve their goals and is dedicated to providing the best possible service at all times. CGD Consulting is a trusted and respected consulting firm that is comfortable to help clients achieve their goals and realize their vision for their projects.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-7xl">
                        <Row gutter={[0, 0]}>
                            <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12} style={{ marginBottom: "-5px" }}>
                                <Image src={Eye} preview={false} className="m-0 p-0 w-full" />
                            </Col>
                            <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12} style={{ marginBottom: "-5px" }}>
                                <div className="flex flex-col font-jost justify-center items-start h-full lg:mx-16 mb-12 mx-5 text-zinc-400" style={{ minHeight: '100px' }}>
                                    <h1 className="uppercase font-bold text-3xl text-zinc-500">Vision</h1>
                                    <p className="mt-2 text-base">
                                        To be the most trusted firm in the region of innovative design, project management, and consulting engineering services through our commitment to quality, safety, sustainability, and client satisfaction.
                                    </p>
                                </div>
                            </Col>
                            <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12} style={{ marginBottom: "-5px" }}>
                                <div className="flex flex-col justify-center font-jost items-start h-full lg:mx-16 mb-12 mx-5 text-zinc-400" style={{ minHeight: '100px' }}>
                                    <h1 className="uppercase font-bold text-3xl text-zinc-500">Mission</h1>
                                    <p className="mt-2 text-base">
                                        We are dedicated to providing high quality architectural designs, technical expertise, and project management services to our clients in a manner centered on trust and professionalism.
                                    </p>
                                </div>
                            </Col>
                            <Col className="gutter-row" xs={24} sm={12} md={12} lg={12} xl={12} style={{ marginBottom: "-5px" }}>
                                <Image src={Mission} preview={false} className="m-0 p-0 w-full" />
                            </Col>
                        </Row>
                    </div>
                </div>


            </div>
        </>
    );
}

export default About;