import { useState } from 'react';
import { Popover, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from "../../../assets/images/new-logo-banner.png";
import LogoGray from "../../../assets/images/CGDC-Logo.png";
import "../../../App.css";
import { Link } from 'react-router-dom';

import { useLocation } from "react-router-dom";


const useIsHome = () => {
    const location = useLocation();
    return location.pathname === "/";
};
const Navbar = () => {
    const isHome = useIsHome();  // Call the function here

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const content = (
        <div>
            <Link to={"/"} >
                <a className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Home</a>
            </Link>
            <Link to={"/about"}>
                <a className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">About us</a>
            </Link>
            <a className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Our services</a>
            <a className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Projects</a>
            <Link to={"/ourteam"}>
                <a className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Our Team</a>
            </Link>
            <a className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Careers</a>
            <a className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Affiliations</a>
            <a className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">NEWS</a>
            <Link to={"/contact"}>
                <a className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Contact us</a>
            </Link>
        </div>
    );

    return (
        <header className={`${isHome ? "navbar" : "bg-white"} text-gray-600 body-font font-outfit relative z-50`}>
            <div className="container mx-auto flex justify-between items-center px-5 lg:px-8 py-2">
                {/* Logo */}
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {isHome
                        ?
                        <img src={Logo} alt="Logo" />
                        :
                        <img src={LogoGray} alt="Logo" />
                    }
                </a>

                {/* Menu Button for Small Screens */}
                <Popover
                    content={content}
                    title=" "
                    trigger="click"
                    placement="bottom"
                    onOpenChange={isOpen}
                    onPopupAlign={toggleMenu}

                >
                    <Button className="md:hidden p-2 -mt-5 text-gray-900">
                        <MenuOutlined />
                    </Button>
                </Popover>

                {/* Navigation for Desktop */}
                <nav className="hidden md:flex md:ml-auto  font-outfit flex-wrap items-center text-base justify-center">
                    <Link to={"/"}>
                        <a className={`${isHome ? "text-white" : "text-black"}  hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">HOME</span></a>
                    </Link>
                    <Link to={"/about"}>
                        <a className={`${isHome ? "text-white" : "text-black"}  hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">ABOUT US</span></a>
                    </Link>
                    <Link to={""}>
                        <a className={`${isHome ? "text-white" : "text-black"}  hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">OUR SERVICES</span></a>
                    </Link>
                    <Link to={""}>
                        <a className={`${isHome ? "text-white" : "text-black"}  hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">PROJECTS</span></a>
                    </Link>
                    <Link to={"/ourteam"}>
                        <a className={`${isHome ? "text-white" : "text-black"}  hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">OUR TEAM</span></a>
                    </Link>
                    {/* <Link to={""}> */}
                    <a className={`${isHome ? "text-white" : "text-black"}  hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">CAREERS</span></a>
                    {/* </Link>
                    <Link to={""}> */}
                    <a className={`${isHome ? "text-white" : "text-black"}  hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">AFFILIATIONS</span></a>
                    {/* </Link>
                    <Link to={""}> */}
                    <a className={`${isHome ? "text-white" : "text-black"}  hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">NEWS</span></a>
                    {/* </Link> */}
                    <Link to={"/contact"}>
                        <a className={`${isHome ? "text-white" : "text-black"}  hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">CONTACT US</span></a>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
