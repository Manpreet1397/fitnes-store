import React from 'react'

const Hit = () => {
  return (
    <div>
      <div
        style={
          {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('./backgrbdbodybuil.png')`,
            backgroundSize: 'cover', // Adjust as needed
            backgroundRepeat: 'no-repeat', // Adjust as needed
            width: '100%',
            height: '100vh',
          }
        }
        className='bg-black text-white h-auto md:h-dvh flex flex-col justify-between py-8 px-8 lg:px-40 xl:px-48 '>
        <div className='flex justify-between'>
          <div className='flex  flex-col w-[50%]  gap-6 justify-center' >

            <div className=' text-5xl font-bold text-white '>
              <h1 className='text-red-600'>HIT PLAY ▶️ </h1>
              <h1>DON'T SAY NEXT DAY? </h1>
            </div>
            <div className='text-white'>
              <p>Embark a transforming journey with us and witness a profound changes that we can bring in your life -be it your carrer, relationships or personal development.</p>
            </div>
            <img src="photo.png" alt="image" />
          </div>
          <div className='flex justify-center items-center px-15 w-[50%]'>
            <img className='h-[80%]' src="./hit.png" alt="image" />
          </div>

        </div>
      </div>



    </div>

  )


}

export default Hit
