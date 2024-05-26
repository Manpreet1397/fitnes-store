import React from 'react'

const About = () => {
    return (
        <div className='bg-black text-white px-8 lg:px-40 xl:px-48 py-8 flex flex-col md:flex-row h-auto md:h-screen'>
            <div className=' md:w-[50%] flex justify-center'>
                <img className=' h-[100%]' src="./body.png" alt="image" />
            </div>
            <div className=' md:w-[50%] flex flex-col justify-center text-center md:text-start gap-4'>
                <div className=' text-xl md:text-2xl xl:text-4xl font-extrabold text-center md:text-start uppercase'>
                    <h1>About your mentor</h1>
                    <h1 className=' text-red-500'>COACH JOE WILLIAMS</h1>
                </div>
                <p className='flex flex-col gap-4'>
                    <p>
                    Cooch Joo is a dodicated titnoss ptofossional passionate about guiding individuals on their wellness journeys. With a background in personat training and a commitment to o holistic pproach. Coach Williams empowets clients to achieve lasting rosutts.
                    </p>
                    <p>
                    His coaching style seamlessly blends choltenging
                    workouts with motivational support. creating an
                    environment where individuots not only witness physical
                    transformations but also cuRivate a positive mindset
                    </p>
                </p>
                <div>
                <button className=' px-4 py-2 bg-red-600 text-white border-2 rounded-xl'>Work with Manpreet</button>
            </div>
            </div>
            
        </div>
    )
}

export default About
