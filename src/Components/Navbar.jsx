"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
    const [isnavbarOpen, setNavbarOpen] = useState(false)
    const [selectedtab, setSelectedtab] = useState("People")


    const tabs = ["People", "Places", "Trailers", "Downloads"]

    const peoples = [
        { name: "JASON DUVAL", img: "" },
        { name: "LUCIA CAMINOS", img: "" },
        { name: "CAL HAMPTON", img: "" },
        { name: "BOOBIE IKE", img: "" },
        { name: "DRE'QUAN PRIEST", img: "" },
        { name: "REAL DIMEZ", img: "" },
        { name: "RAUL BAUTISTA", img: "" },
        { name: "BRIAN HEDER", img: "" },
    ];

    const places = [
        { name: "VICE CITY", img: "" },
        { name: "LEONIDA KEYS", img: "" },
        { name: "GRASSRIVERS", img: "" },
        { name: "PORT GELLHORN", img: "" },
        { name: "AMBROSIA", img: "" },
        { name: "MOUNT KALAGA", img: "" }
    ];


    return (
        <div className='relative'>

            <div className='flex flex-row justify-between items-center text-2xl p-3 relative z-40'>
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
                        className='fixed top-0 right-0 h-screen  bg-gradient-to-r from-[#16151f] to-[#181622]  md:w-[45vw] w-[90vw] z-30 shadow-2xl md:p-10 p-5 md:pt-0 pt-15'
                    >


                        <div className='flex rounded-full my-6 md:gap-3 justify-start mb-10'>


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
                                        <div key={e.name} className='hover:text-[#fff9cb] text-white md:text-6xl text-4xl mt-0.6 font-sans font-semibold md:tracking-tighter'>{e.name}</div>
                                    ))}
                                </div>
                            )}

                            {selectedtab === "Places" && (
                                <div className='flex flex-col md:justify-center h-[60vh] pl-2'>
                                    {places.map((e) => (
                                        <div key={e.name}  className='hover:text-[#fff9cb] text-white md:text-6xl text-4xl mt-0.6 font-sans font-semibold md:tracking-tight'>{e.name}</div>
                                    ))}
                                </div>
                            )}

                            {selectedtab === "Trailers" && (
                                <div>
                                    <p>Trailers content goes here</p>
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
        </div>
    )
}

export default Navbar   