import { useState } from 'react';
import { Popover, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons'; // Importing a menu icon from Ant Design
import "../../../App.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const content = (
        <div>
            <a className="block hover:text-red-800 hover:underline">First Link</a>
            <a className="block hover:text-red-800 hover:underline">Second Link</a>
            <a className="block hover:text-red-800 hover:underline">Third Link</a>
            <a className="block hover:text-red-800 hover:underline">Fourth Link</a>
            <a className="block hover:text-red-800 hover:underline">Fifth Link</a>
        </div>
    );

    return (
        <header className="navbar text-gray-600 body-font font-outfit relative z-50">
            <div className="container mx-auto flex justify-between items-center px-5 lg:px-8 py-2">
                {/* Logo */}
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="https://cgdc.pk/wp-content/uploads/elementor/thumbs/new-logo-CGDC-1-q1gw78zdegrbioveykwne97sg4kqfnyc4nm6ga8xc6.png" alt="Logo" />
                </a>

                {/* Menu Button for Small Screens */}
                <Popover
                    content={content}
                    title="Menu"
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
                <nav className="hidden md:flex md:ml-auto font-bold font-outfit flex-wrap items-center text-base justify-center">
                    <a className="text-white hover:text-red-800 hover:underline underline-offset-8"><span className="mr-5 py-5">First Link</span></a>
                    <a className="text-white hover:text-red-800 hover:underline underline-offset-8"><span className="mr-5 py-5">Second Link</span></a>
                    <a className="text-white hover:text-red-800 hover:underline underline-offset-8"><span className="mr-5 py-5">Third Link</span></a>
                    <a className="text-white hover:text-red-800 hover:underline underline-offset-8"><span className="mr-5 py-5">Fourth Link</span></a>
                    <a className="text-white hover:text-red-800 hover:underline underline-offset-8"><span className="mr-5 py-5">Fifth Link</span></a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
