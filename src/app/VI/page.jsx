import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'


const page = () => {
  return (
    <div className='bg-[#111111] min-h-screen'>
      <Hero/>
      <Navbar/>
      {/* <Footer/> */}
    </div>
  )
}

export default page
