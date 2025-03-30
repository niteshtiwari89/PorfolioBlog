import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";  // Import Link and useLocation from react-router-dom

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');
    // const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to handle the mobile menu
    const location = useLocation();  // Get the current location (path)

    // Update the active section when the path changes
    useEffect(() => {
        const path = location.pathname;
        setActiveSection(path);  // Set the active section to the current path
    }, [location]);

    // // Toggle the mobile menu
    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <>
            {/* Desktop Navigation */}
            <div className='sticky top-0 md:flex hidden md:bg-white shadow-md bg-gray-800 justify-center items-center flex flex-wrap w-full'>
                <div className='flex flex-wrap mt-3 mb-3 w-full justify-around items-center space-x-2 pr-10 pl-10'>
                    <div className={`${activeSection === '/about' ? 'bg-blue-700 md:text-white' : ''} pr-2 pl-2 md:text-black text-white mt-2 rounded-md p-2`}>
                        <Link to="/about">About</Link>
                    </div>
                    <div className={`${activeSection === '/mission' ? 'bg-blue-700 md:text-white' : ''} pr-2 pl-2 md:text-black text-white mt-2 rounded-md p-2`}>
                        <Link to="/mission">Mission</Link>
                    </div>
                    <div className={`${activeSection === '/philanthropy' ? 'bg-blue-700 md:text-white' : ''} pr-2 pl-2 md:text-black text-white mt-2 rounded-md p-2`}>
                        <Link to="/philanthropy">Philanthropy</Link>
                    </div>
                    <div className={`${activeSection === '/business' ? 'bg-blue-700 md:text-white' : ''} pr-2 pl-2 md:text-black text-white mt-2 rounded-md p-2`}>
                        <Link to="/business">Businesses</Link>
                    </div>
                    <div className={`${activeSection === '/investment' ? 'bg-blue-700 md:text-white' : ''} pr-2 pl-2 md:text-black text-white mt-2 rounded-md p-2`}>
                        <Link to="/investment">Investments</Link>
                    </div>
                    <div className={`${activeSection === '/leadership' ? 'bg-blue-700 md:text-white' : ''} pr-2 pl-2  md:text-black text-white mt-2 rounded-md p-2`}>
                        <Link to="/leadership">Thought Leadership</Link>
                    </div>
                    <div className={`${activeSection === '/contact' ? 'bg-blue-700 md:text-white' : ''} pr-2 pl-2 md:text-black text-white mt-2 rounded-md p-2`}>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            
        </>
    );
}

export default Navbar;
