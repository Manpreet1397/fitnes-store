import React from 'react'

const Form = () => {
  return (
    <div className='bg-black text-white px-8 lg:px-40 xl:px-48 py-32 flex flex-col justify-between items-center gap-10 md:h-[800px]'>
      <div className=' text-2xl md:text-4xl xl:text-6xl font-extrabold text-center uppercase'>
        <h1 className=' text-red-500'>You're one button away</h1>
        <h1>To meet your better self</h1>
      </div>
      <form action="" className='border-2 border-red-500 py-6 md:py-8 px-4 md:px-10 rounded-xl flex flex-col gap-4 w-[80%] md:w-[60%]'>
        <input className=' bg-transparent border-2 border-red-500 px-4 py-2 ' type="text" name="FName" id="fname" placeholder='Full Name' />
        <input className=' bg-transparent border-2 border-red-500 px-4 py-2 ' type="email" name="Email" id="fname" placeholder='someone@gamil.com' />
        <button className=' bg-red-500 text-white py-4 md:text-xl md:font-bold' type="submit">Start your Journey</button>
      </form>
    </div>
  )
}

export default Form
