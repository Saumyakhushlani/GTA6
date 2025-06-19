"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
    const [isnavbarOpen, setNavbarOpen] = useState(false)
    const [selectedtab, setSelectedtab] = useState("People")
    const [image, setImage] = useState("/logo.png")
    const [imageKey, setImageKey] = useState(0)

    const tabs = ["People", "Places", "Trailers", "Downloads"]

    const peoples = [
        { name: "JASON DUVAL", img: "/jason.webp" },
        { name: "LUCIA CAMINOS", img: "/lucia.webp" },
        { name: "CAL HAMPTON", img: "/cal.webp" },
        { name: "BOOBIE IKE", img: "/boobie.webp" },
        { name: "DRE'QUAN PRIEST", img: "/drequan.webp" },
        { name: "REAL DIMEZ", img: "/dimez.webp" },
        { name: "RAUL BAUTISTA", img: "/raul.webp" },
        { name: "BRIAN HEDER", img: "/brian.webp" },
    ];

    const places = [
        { name: "VICE CITY", img: "/vice.webp" },
        { name: "LEONIDA KEYS", img: "/leonida.webp" },
        { name: "GRASSRIVERS", img: "/Grassrivers.webp" },
        { name: "PORT GELLHORN", img: "/port.webp" },
        { name: "AMBROSIA", img: "/Ambrosia.webp" },
        { name: "MOUNT KALAGA", img: "/mount.webp" }
    ];

    const trailer=[
        {sno:2,name:"Grand Theft Auto VI Trailer 2",date:"May 6,2025",time:"2:47",img:"/trailer2.webp"},
        {sno:1,name:"Grand Theft Auto VI Trailer 1",date:"December 4,2023",time:"1:31",img:"/trailer1.webp"},
    ]

    const handleImageChange = (newImage) => {
        setImage(newImage)
        setImageKey(prev => prev + 1)
    }

    const handleImageReset = () => {
        setImage("/logo.png")
        setImageKey(prev => prev + 1)
    }

    return (
        <div className='relative'>

            <div className='flex flex-row justify-between items-center text-2xl p-3 relative'>
                <div className='font-bold text-white text-4xl'>VI</div>

                <button
                    onClick={() => setNavbarOpen(!isnavbarOpen)}
                    className='fixed z-50 right-4 top-4 w-8 h-8 flex flex-col justify-center items-center gap-1'
                >
                    <motion.span
                        className="w-6 h-1 bg-white block"
                        animate={{
                            rotate: isnavbarOpen ? 45 : 0,
                            y: isnavbarOpen ? 4 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.span
                        className="w-6 h-1 bg-white block"
                        animate={{
                            rotate: isnavbarOpen ? -45 : 0,
                            y: isnavbarOpen ? -4 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                </button>
            </div>

            <AnimatePresence>
                {isnavbarOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                        className='fixed top-0 right-0 h-screen bg-gradient-to-r from-[#16151f] to-[#181622] md:w-[45vw] w-[90vw] z-40 shadow-2xl md:p-10 p-5  mb-10'
                    >
                        <div className='flex rounded-full my-6 md:gap-3 justify-start md:mb-20'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setSelectedtab(tab)}
                                    className={`md:px-5 px-3 py-3 md:text-md text-sm font-semibold rounded-full transition-all duration-300 ${selectedtab === tab
                                        ? 'bg-white text-gray-900'
                                        : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className='text-white'>
                            {selectedtab === "People" && (
                                <div className='flex flex-col md:justify-center h-[60vh] pl-2'>
                                    {peoples.map((e) => (
                                        <div 
                                            key={e.name} 
                                            className='hover:text-[#fff9cb] text-white md:text-6xl text-4xl mt-0.6 font-sans font-semibold md:tracking-tighter' 
                                            onMouseEnter={() => handleImageChange(e.img)} 
                                            onMouseLeave={() => handleImageReset()}
                                        >
                                            {e.name}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {selectedtab === "Places" && (
                                <div className='flex flex-col md:justify-center h-[60vh] pl-2'>
                                    {places.map((e) => (
                                        <div 
                                            key={e.name} 
                                            className='hover:text-[#fff9cb] text-white md:text-6xl text-4xl mt-0.6 font-sans font-semibold md:tracking-tight' 
                                            onMouseEnter={() => handleImageChange(e.img)} 
                                            onMouseLeave={() => handleImageReset()}
                                        >
                                            {e.name}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {selectedtab === "Trailers" && (
                                <div>
                                    {trailer.map((e)=>(
                                        <div key={e.sno} className='relative bg-[#1a1927] flex md:flex-row flex-col justify-start items-center mt-4 gap-3'>
                                            <div className='absolute md:bottom-2 md:left-3 bottom-20 left-3 text-sm bg-gray-800 p-0.5 text-white font-semibold'>{e.time}</div>
                                            <img src={e.img} alt={e.img} className='h-45'/>
                                            <div className=''>
                                                <div className='text-white text-xl'>{e.name}</div>
                                                <div className='text-gray-400 mt-2'>{e.date}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {selectedtab === "Downloads" && (
                                <div>
                                    <p>Downloads content goes here</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isnavbarOpen && (
                    <motion.img
                        key={imageKey} 
                        src={image}
                        className='w-[75vw] fixed left-0 z-10 top-0 object-cover h-full'
                        initial={{ 
                            x: 0, 
                             
                            opacity: 0,
                            filter: "blur(10px)"
                        }}
                        animate={{ 
                            x: "-10vw", 
                          
                            opacity: 1,
                            filter: "blur(0px)"
                        }}
                        exit={{ 
                            
                            opacity: 0,
                            filter: "blur(5px)",
                            transition: { duration: 0.3 }
                        }}
                        transition={{ 
                            duration: 2,
                            ease: "easeOut",
                            scale: { duration: 0.6 },
                            filter: { duration: 0.4 },
                            opacity:{duration:0.4}
                        }}
                    />
                )}
            </AnimatePresence>

        </div>
    )
}

export default Navbar