
const AboutMe = () => {
    return (
        <>
            <div className="m-10 section" id='about'>
                <div className="font-bold text-xl ">
                    About Me
                </div>
                <div className="w-full mt-5">
                    <div className="font w-full font-bold flex justify-center">
                        Visionary Entrepreneur | Investor | Global Business Leader</div>
                    <div className="large-first-letter">
                        My entrepreneurial journey began in 2009 while pursuing my MBA, where I identified emerging opportunities in transformative industries. With a foundation in computer science, finance, and strategic business management, I developed innovative business models that evolved into a portfolio of industry-leading companies under BlackBridge Group. Today, my businesses span technology, financial services, renewable energy, infrastructure, and high-growth consumer markets.
                    </div>
                    <div className="large-first-para mt-3">
                        <p>My journey has been shaped by three fundamental principles:</p>
                        <ul className=" list-disc pl-6 mt-4 space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">✔</span> Innovation – Harnessing cutting-edge technology to transform industries.
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✔</span> Sustainability – Integrating ESG principles for long-term business resilience.
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✔</span> Wealth Creation – Building high-value enterprises that drive economic progress.
                            </li>
                        </ul>
                    </div>
                    <div className="large-first-para mt-4">
                    I firmly believe that technology, finance, and infrastructure are the key pillars of economic progress. By integrating AI, blockchain, smart infrastructure, and digital finance innovations, my companies are at the forefront of global industrial transformation.
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
