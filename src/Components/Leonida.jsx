import React from 'react'

const Leonida = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#121217] to-[#181624] relative'>
                <img src="/leonida_site.webp" alt="leonida" className='w-full md:h-auto h-[75vh] object-cover' />


                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block w-[calc(100%+1.3px)] h-[75px] transform scale-x-[-1]"
                    >
                        <defs>
                            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#121217" />
                                <stop offset="100%" stopColor="#181624" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                            fill="url(#bgGradient)"
                        />
                    </svg>
                </div>



            </div>

            <div className='bg-gradient-to-r from-[#121217] to-[#181624] md:h-[90vh] h-[45vh] flex flex-col md:flex-row  justify-center items-center gap-5'>
                <h1 className='text-8xl font-bold max-w-md text-transparent bg-clip-text'
                    style={{
                        backgroundImage: 'linear-gradient(to left,  #f585a8, #df3a93)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                    }}
                >Only in Leonida</h1>
                <div
                    className="max-w-2xs text-3xl font-bold text-transparent bg-clip-text"
                    style={{
                        backgroundImage: 'linear-gradient(to left,  #f585a8, #df3a93)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                    }}

                >
                    When the sun fades and the neon glows, everyone has something to gain — and more to lose.
                </div>
            </div>
        </>
    )
}

export default Leonida