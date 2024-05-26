import React from 'react'

const Cold = () => {
  return (
    <div>
      <div
        style={
          {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('./backgrbdbodybuil.png')`,
            backgroundImage: 'url(coldbg.png)',
            backgroundSize: 'cover', // Adjust as needed
            backgroundRepeat: 'no-repeat', // Adjust as needed
            width: '100%',
            height: '100vh',
          }
        }
        className='bg-black text-white h-auto md:h-dvh flex flex-col justify-between py-24 px-8 lg:px-40 xl:px-48  '>
        <div className='flex flex-col md:flex-row   '>
          <div className='flex items-center px-15'>
            <img className='w-full h-auto' src="bandha.png" alt="image" />
          </div>
          <div className='flex flex-col md:w-[50%]  gap-6 justify-center' >
            <div className=' text-5xl font-bold text-white '>
              <h1 className='text-red-600'>TOO COLD </h1>
              <h1>TO START TODAY? </h1>
            </div>
            <div className='text-white'>
              <p>Embark a transforming journey with us and witness a profound changes that we can bring in your life -be it your carrer, relationships or personal development.</p>
            </div>
            <div className='flex gap-10'>
              <div className="relative">
                <img src="lazy.png" alt="image" className="w-40 h-40" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                  <p className="text-white text-lg font-bold">is this you?</p>
                </div>
              </div>

              <div className='flex flex-col justify-center gap-2'>
                <a href="# " className='px-4 py-1 border-2 border-red-600 bg-red-600 hover:bg-red-900 rounded'>FREEZING YES</a>
                <a href="# " className='px-4 py-1 border-2 border-red-600 bg-black-600 hover:bg-red-900 rounded text-center'>NO</a>
              </div>

            </div>

          </div>
        </div>

      </div>


    </div>
  )
}

export default Cold
