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
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <div className='flex md:w-1/2 w-full  flex-col justify-center bg-gray-200  items-center'>
                <Header />
                <Navbar />
                {/* </div>
            <div className='flex w-1/2 flex-col'> */}
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/about' element={<AboutMe />} />
                    <Route path='/mission' element={<Vision />} />
                    <Route path='/philanthropy' element={<Impact />} />
                    <Route path='/business' element={<Businesses />} />
                    <Route path='/investment' element={<InvestmentF />} />
                    <Route path='/leadership' element={<LeaderShip />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default HomePage
