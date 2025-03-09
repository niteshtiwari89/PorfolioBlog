import Header from './Header'
import '../App.css'
import Welcome from './Welcome'
import AboutMe from './AboutMe'
import Vision from './Vision'
import Impact from './Impact'
import Businesses from './Businesses'
import Navbar from './Navbar'
import InvestmentF from './InvestmentsF'
import LeaderShip from './LeaderShip'
import Contact from './Contact'

const HomePage = () => {
    return (
        <>
            <div className='flex w-1/2  flex-col justify-center bg-gray-200  items-center'>
                <Header />
                <Navbar />
                {/* </div>
            <div className='flex w-1/2 flex-col'> */}
                <Welcome />
                <AboutMe />
                <Vision />
                <Impact />
                <Businesses />
                <InvestmentF />
                <LeaderShip />
                <Contact />
            </div>
        </>
    )
}

export default HomePage
