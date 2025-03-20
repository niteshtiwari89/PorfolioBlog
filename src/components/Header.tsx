import Logo from '../assets/react.svg';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
    const location = useLocation(); // Get the current location (path)

    // Update the active section when the path changes
    useEffect(() => {
        const path = location.pathname;
        setActiveSection(path); // Set the active section to the current path
    }, [location]);

    // Toggle the mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <>
            <div className="flex w-full md:relative sticky top-0 flex-col bg-gray-200 justify-around items-center">
                <div className="w-full flex justify-around items-center shadow-md p-2">
                    <div className="w-1/6">
                        <img src={Logo} alt="profile" width="100%" />
                    </div>
                    <div className="w-5/6 pl-10">
                        <Link to="/">
                            <div className="text-xl font-bold">Gaurav Polshettiwar</div>
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center justify-between p-3">
                        {/* Hamburger Icon */}
                        <button onClick={toggleMenu} className="text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                </div>
                <div
                    className={`mobile-menu bg-gray-800 p-5 fixed top-0 right-0 w-64 h-0 overflow-hidden opacity-0 transition-all duration-100 ease ${isMenuOpen ? 'h-full opacity-100' : 'h-0 opacity-0'
                        }`}
                >
                    {/* Close Button (X) */}
                    <button onClick={toggleMenu} className="text-white absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    {/* Mobile menu links */}
                   <div className='mt-10'>
                   <div className={`${activeSection === '/about' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}>
                        <Link to="/about">About</Link>
                    </div>
                    <div className={`${activeSection === '/mission' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}>
                        <Link to="/mission">Mission</Link>
                    </div>
                    <div className={`${activeSection === '/philanthropy' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}>
                        <Link to="/philanthropy">Philanthropy</Link>
                    </div>
                    <div className={`${activeSection === '/business' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}>
                        <Link to="/business">Businesses</Link>
                    </div>
                    <div className={`${activeSection === '/investment' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}>
                        <Link to="/investment">Investments</Link>
                    </div>
                    <div className={`${activeSection === '/leadership' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}>
                        <Link to="/leadership">Thought Leadership</Link>
                    </div>
                    <div className={`${activeSection === '/contact' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}>
                        <Link to="/contact">Contact</Link>
                    </div>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Header;
