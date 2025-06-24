import React from 'react'

const Hampton = () => {
  return (
    <>
      <div className='relative bg-gradient-to-r from-[#0a0a0f] via-[#121217] to-[#181624]'>


        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[75px]"
          >
            <defs>
              <linearGradient id="topBgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a0a0f" />
                <stop offset="50%" stopColor="#121217" />
                <stop offset="100%" stopColor="#181624" />
              </linearGradient>
            </defs>
            <path
              d="M0 120L1200 16.48 1200 0 0 0 0 120z"
              fill="url(#topBgGradient)"
            />
          </svg>

        </div>

        <img src="hampton_bg.webp" alt="Hampton"  className=''/>
        <img src="hampton.webp" alt="Hampton"  className='absolute right-0 top-0'/>
        <div className='absolute top-0 flex flex-col justify-center items-center w-full h-full'>
          <div>Hi</div>
        </div>
      </div>
    </>
  )
}

export default Hampton