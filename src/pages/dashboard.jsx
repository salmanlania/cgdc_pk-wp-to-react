import { Carousel, Image } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import Swiper navigation styles
import { SwiperSlide, Swiper } from 'swiper/react';
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/serrvice3.jpg";
import service4 from "../assets/images/service4.jpg";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";
import video1 from "../assets/images/banner/video-1.mp4";
import video2 from "../assets/images/banner/video-2.mp4";
import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export const isHome = true;

const DashBoard = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            once: true,     // Animation only once while scrolling
        });
    }, []);
    return (
        <>
            <div className="banner font-outfit items-center justify-center md:justify-start">
                <Helmet>
                    <title>CGD Consulting - Engineering Excellence</title>
                </Helmet>
                <Carousel effect="fade" autoplay>
                    <div className="bannerOne relative banner">
                        {/* Background Video */}
                        <video autoPlay muted loop className="background-video">
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* Overlay Image */}
                        <div className="dotted-overlay"></div>

                        <div className="banner-text md:block w-7/12 lg:w-5/12 absolute top-1/2 transform -translate-y-1/2 lg:static lg:top-auto lg:transform-none">
                            <h1 data-aos="fade-right" className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">Solutions That Redefine Excellence</h1>
                            <p className="my-3 text-xs">Elevate your engineering game with CGD Consulting. Our solutions are tailored to meet your unique needs, with a focus on innovation, sustainability, and delivering maximum value to your business.</p>
                        </div>
                        <div className="banner-text-right w-6/12">
                            <p className='lg:text-right md:block hidden'>International Islamic University Islamabad - Designed by Hafeez Habibi</p>
                        </div>
                        <p data-aos="fade-left" className='absolute top-3/4 w-9/12 mx-6 my-4 md:hidden block z-10 text-white transform -translate-y-3/4'>International Islamic University Islamabad - Designed by Hafeez Habibi</p>
                    </div>

                    <div className="bannerTwo relative banner">
                        {/* Background Video */}
                        <video autoPlay muted loop className="background-video">
                            <source src={video2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* Overlay Image */}
                        <div className="dotted-overlay"></div>

                        <div className="banner-text md:block w-7/12 lg:w-6/12 absolute top-1/2 transform -translate-y-1/2 lg:static lg:top-auto lg:transform-none">
                            <h1 className="text-white text-4xl lg:text-5xl font-bold">Engineering Excellence That Exceeds Expectations</h1>
                            <p className="my-3 text-xs">Driven by a passion for innovation and quality, CGD Consulting continues to push the boundaries of engineering excellence...</p>
                        </div>
                        <div className="banner-text-right w-6/12">
                            <p className='lg:text-right md:block hidden'>International Islamic University Islamabad - Designed by Hafeez Habibi</p>
                        </div>
                        <p className='absolute top-3/4 w-9/12 mx-6 my-4 md:hidden block z-10 text-white transform -translate-y-3/4'>International Islamic University Islamabad - Designed by Hafeez Habibi</p>
                    </div>
                </Carousel>
            </div>
            <div className='py-16 font-jost px-4 bg-stone-100 overflow-hidden' >
                <div data-aos="fade-right">
                    <h1 className='text-center text-4xl text-stone-600 font-bold'>OUR SERVICES</h1>
                </div>
                <div data-aos="fade-left">
                    <p className='text-center my-3 lg:text-lg text-stone-400'>From concept to execution, CGD Consulting delivers engineering excellence with precision and professionalism.</p>
                </div>
                <div className="my-8" data-aos="fade-left">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={1000} // Smooth transition speed in milliseconds
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination', // Custom class for positioning
                        }}
                        navigation={true}
                        breakpoints={{
                            100: {
                                slidesPerView: 1,
                            },
                            540: {
                                slidesPerView: 2,
                            },
                            840: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[FreeMode, Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <span className='serviceImage'>
                                <Image src={service1} preview={false} />
                                <span className="overlayText font-sm">
                                    <h1>TOWN PLANNING</h1>
                                </span>
                            </span>
                        </SwiperSlide>

                        <SwiperSlide>
                            <span className='serviceImage'>
                                <Image src={service2} preview={false} />
                                <span className="overlayText font-sm">
                                    <h1>ARCHITECTURE</h1>
                                </span>
                            </span>
                        </SwiperSlide>

                        <SwiperSlide>
                            <span className='serviceImage'>
                                <Image src={service3} preview={false} />
                                <span className="overlayText font-sm">
                                    <h1>MEP DESIGNING</h1>
                                </span>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span className='serviceImage'>
                                <Image src={service4} preview={false} />
                                <span className="overlayText font-sm">
                                    <h1>PROJECT MANAGEMENT</h1>
                                </span>
                            </span>
                        </SwiperSlide>

                    </Swiper>
                    {/* Pagination container */}
                    <div className="custom-pagination"></div>
                </div>
            </div>
            <div className="py-16 font-jost px-4 overflow-hidden">
                <div data-aos="fade-right">
                    <h1 className='text-center text-4xl text-stone-600 font-extrabold'>LATEST PROJECTS</h1>
                </div>
                <div data-aos="fade-left">
                    <p className='text-center my-3 lg:text-lg text-stone-400'>Innovative engineering solutions for a better tomorrow – CGD Consulting’s latest projects are driving progress and shaping the future.</p>
                </div>
                <div className="my-12">
                    <Row gutter={[20, 24]}>
                        <Col className="gutter-row" xs={24} sm={12} md={8} >
                            <div className="projectImage relative overflow-hidden">
                                <Image src={project1} preview={false} className="object-cover w-full h-full" />
                                <span className="absolute inset-0"></span>
                                <span className="overlayText absolute font-medium bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded overflow-hidden text-ellipsis">
                                    <h1 className="text-sm sm:text-sm md:text-base lg:text-base">PETARIANS HOUSING</h1>
                                </span>
                            </div>
                        </Col>
                        <Col className="gutter-row" xs={24} sm={12} md={8} >
                            <div className="projectImage relative overflow-hidden">
                                <Image src={project2} preview={false} className="object-cover w-full h-full" />
                                <span className="absolute inset-0"></span>
                                <span className="overlayText absolute font-medium bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded overflow-hidden text-ellipsis">
                                    <h1 className="text-sm sm:text-sm md:text-base lg:text-base">MASTER PLANNING OF JACOBABAD CITY</h1>
                                </span>
                            </div>
                        </Col>
                        <Col className="gutter-row" xs={24} sm={12} md={8} >
                            <div className="projectImage relative overflow-hidden">
                                <Image src={project3} preview={false} className="object-cover w-full h-full" />
                                <span className="absolute inset-0"></span>
                                <span className="overlayText absolute font-medium bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded overflow-hidden text-ellipsis">
                                    <h1 className="text-sm sm:text-sm md:text-base lg:text-base">MASTER PLANNING OF SHIKARPUR CITY</h1>
                                </span>
                            </div>
                        </Col>
                        <Col className="gutter-row" xs={24} sm={12} md={8} >
                            <div className="projectImage relative overflow-hidden">
                                <Image src={project4} preview={false} className="object-cover w-full h-full" />
                                <span className="absolute inset-0"></span>
                                <span className="overlayText absolute font-medium bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded overflow-hidden text-ellipsis">
                                    <h1 className="text-sm sm:text-sm md:text-base lg:text-base">MASTER PLANNING OF KAMBAR CITY</h1>
                                </span>
                            </div>
                        </Col>
                        <Col className="gutter-row" xs={24} sm={12} md={8} >
                            <div className="projectImage relative overflow-hidden">
                                <Image src={project5} preview={false} className="object-cover w-full h-full" />
                                <span className="absolute inset-0"></span>
                                <span className="overlayText absolute font-medium bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded overflow-hidden text-ellipsis">
                                    <h1 className="text-sm sm:text-sm md:text-base lg:text-base">MASTER PLANNING OF KANDHKOT CITY</h1>
                                </span>
                            </div>
                        </Col>
                        <Col className="gutter-row" xs={24} sm={12} md={8} >
                            <div className="projectImage relative overflow-hidden">
                                <Image src={project6} preview={false} className="object-cover w-full h-full" />
                                <span className="absolute inset-0"></span>
                                <span className="overlayText absolute font-medium bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded overflow-hidden text-ellipsis">
                                    <h1 className="text-sm sm:text-sm md:text-base lg:text-base">SINDH EDUCATION CITY</h1>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div >
        </>
    );
}

export default DashBoard;
