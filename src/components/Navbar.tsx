import { useEffect, useState } from "react";
const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    // Scroll handler to update the active section based on scroll position
    const handleScroll = () => {
        const sections = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;
        let currentSection = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='sticky top-0 bg-gray-800 justify-center items-center flex flex-wrap w-full'>
                <div className='flex flex-wrap mt-3 mb-3 w-full justify-around items-center space-x-2 pr-10 pl-10'>
                    {/* <div className={`${activeSection === 'welcome' ? 'bg-blue-700' : 'bg-blue-500'} pr-2 pl-2 text-white mt-2 rounded-md p-2`}>Home</div> */}
                    <div className={`${activeSection === 'about' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}>
                        <a href="#about"> About</a>
                    </div>
                    <div className={`${activeSection === 'mission' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}>
                        <a href="#about"> Mission</a>
                    </div>
                    <div className={`${activeSection === 'philanthropy' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}><a href="#philanthropy">Philanthropy</a></div>
                    <div className={`${activeSection === 'business' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}><a href="#business">Businesses</a></div>
                    <div className={`${activeSection === 'investment' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}><a href="#investment">
                        Investments</a>
                    </div>
                    <div className={`${activeSection === 'leadership' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}><a href="#leadership">Thought Leadership</a></div>
                    <div className={`${activeSection === 'contact' ? 'bg-blue-700' : ''} pr-2 pl-2 text-white mt-2 rounded-md p-2`}><a href="#contact">Contact</a></div>
                </div>
            </div>
        </>
    )
}

export default Navbar
