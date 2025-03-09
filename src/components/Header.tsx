import Logo from '../assets/react.svg'

const Header = () => {
    return (
        <>
            <div className='flex w-full flex-col justify-between items-center'>
                <div className='w-full flex justify-around items-center'>
                    <div className='w-1/6'>
                        <img src={Logo} alt='profile' width={"100%"} />
                    </div>
                    <div className='w-5/6 pl-10'>
                        <div className='text-xl font-bold'>
                            Gaurav Polshettiwar
                        </div>
                        <div className='font-light'>
                            Entrepreneur | Investor | Philanthropist<br />
                            Building the Future of Technology, Finance, Infrastructure & Retail
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
