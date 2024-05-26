import React from 'react'

const Hero = () => {
    return (
        <div
            style={
                {
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('./backgrbdbodybuil.png')`,
                    backgroundImage: 'url(hero1.png)',
                    backgroundSize: 'cover', // Adjust as needed
                    backgroundRepeat: 'no-repeat', // Adjust as needed
                    width: '100%',
                    height: '100vh',
                    backgroundPosition: 'right-10px',
                }
            }
            className='bg-black text-white h-dvh flex flex-col gap-10 md:gap-2 md:justify-between py-24 px-8 lg:px-40 xl:px-48 '>
            <div className='flex'>
                <div className='flex flex-col text-center md:text-start md:w-[50%] gap-6' >
                    <div className=' text-5xl font-bold text-white '>
                        <h1 className='text-red-600'>Don't Pause</h1>
                        <h1>Yout Better Self awaits you</h1>
                    </div>
                    <div className='text-white'>
                        <p>Step boldy into future where better self thrives!</p>
                    </div>
                    <div className='flex py-2 justify-center md:justify-start'>
                        <a href="#  " className='px-2 py-1 border-2 border-red-600 bg-red-600 hover:bg-red-900 rounded' >RESTART YOUR JOURNEY</a>
                    </div>
                </div>
                <div className=' hidden w-[50%]'>
                    <div className='w-[50%] h-[100%] relative overflow-hidden'>

                    </div>


                </div>
            </div>
            <div className='flex justify-center items-center gap-6 py-4 flex-wrap'>
                <div>
                    <img className=' h-20' src="forbes.png" alt="image" />
                </div>
                <div>
                    <img className=' h-20' src="ted.png" alt="image" />
                </div>
                <div>
                    <img className=' h-20' src="cnbc.png" alt="image" />
                </div>

            </div>
        </div>
    )
}

export default Hero
