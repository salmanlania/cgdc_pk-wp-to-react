import { Carousel } from 'antd';
import '../App.css';
import Navbar from '../Components/Common/Navigation/navbar';

const DashBoard = () => {
    return (
        <div className="banner font-outfit items-center justify-center md:justify-start">
            <Navbar />
            <Carousel effect="fade" autoplay>
                <div className="bannerOne relative">
                    <div className="banner-text md:block w-7/12 lg:w-5/12 absolute top-1/2 transform -translate-y-1/2 lg:static lg:top-auto lg:transform-none">
                        <h1 className="text-white lg:text-5xl text-4xl font-bold">Solutions That Redefine Excellence</h1>
                        <p className="my-3 text-xs">Elevate your engineering game with CGD Consulting. Our solutions are tailored to meet your unique needs, with a focus on innovation, sustainability, and delivering maximum value to your business.</p>
                    </div>
                    <div className="banner-text-right w-6/12">
                        <p className='lg:text-right md:block hidden'>International Islamic University Islamabad - Designed by Hafeez Habibi</p>
                    </div>
                    <p className='absolute top-3/4 w-9/12 mx-6 my-4 md:hidden block z-10 text-white transform -translate-y-3/4'>International Islamic University Islamabad - Designed by Hafeez Habibi</p>
                </div>
                <div className="bannerTwo">
                    <div className="banner-text md:block w-7/12 lg:w-6/12 absolute top-1/2 transform -translate-y-1/2 lg:static lg:top-auto lg:transform-none">
                        <h1 className="text-white lg:text-5xl text-3xl font-bold">Enginnering Excellence That Exceeds Expectations</h1>
                        <p className="my-3 text-xs">Driven by a Passion for Innovation and Quality, CGD Consulting Continues to Push the Boundaries of Engineering Excellence. Our Proven Track Record of Success and Client Satisfaction Sets Us Apart as a Leading Engineering Consultant in the Industry.</p>
                    </div>
                    <div className="banner-text-right w-6/12">
                        <p className='lg:text-right md:block hidden '>International Islamic University Islamabad - Designed by Hafeez Habibi</p>
                    </div>
                    <p className='absolute top-3/4  w-9/12 mx-6 my-4 md:hidden block z-10 text-white transform -translate-y-3/4'>International Islamic University Islamabad - Designed by Hafeez Habibi</p>
                </div>
            </Carousel>
        </div>
    );
}

export default DashBoard;
