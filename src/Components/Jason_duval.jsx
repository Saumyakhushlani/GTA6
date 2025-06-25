import React from "react";
import ImageWrapper from "./ImageWrapper/Index";
import { Maximize2 } from "lucide-react";

function Jason_duval() {
    return (
      <> 
        {/* Vice city paragraph */}
        <div className="h-screen w-screen bg-gradient-to-r from-[#121217] to-[#181624] flex items-center justify-center">
          <div className="mx-48">
            <h2 className="text-7xl font-bold bg-clip-text text-transparent bg-[#DC3991]">
              Vice City, USA.
            </h2>
            <p className="text-4xl leading-12 font-semibold text-left mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#E04092] to-[#F6A483]">
              Jason and Lucia have always known the deck is stacked against
              them. But when an easy score goes wrong, they find themselves on
              the darkest side of the sunniest place in America, in the middle
              of a criminal conspiracy stretching across the state of Leonida —
              forced to rely on each other more than ever if they want to make
              it out alive.
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-screen h-auto"
            src="/JASON/Lucia_hugs_Jason.webp"
            alt="Jason hugs lucia"
          />
        </div>
        {/* about Jason */}
        <div className="w-screen h-auto bg-gradient-to-r from-[#121217] to-[#181624]">
          <div
            id="jason_description"
            className="flex justify-center mb-48 ml-60 mt-16"
          >
            <div id="left" className="w-[40%] mr-5 flex flex-col items-start">
              <div>
                <h1 className="text-7xl mt-10 tracking-wide font-extrabold text-[#fff9cb] font-stretch-75%">
                  JASON DUVAL
                </h1>
              </div>
              <div className="mt-20 mr-40">
                <h1 className="text-[#ffb0c4] leading-10  font-semibold text-4xl text-wrap">
                  Jason wants an easy life, but things just keep getting harder.
                </h1>
              </div>
              <div className="mt-10 mr-40">
                <h1 className="text-white tracking-wide leading-7  font-semibold text-2xl text-wrap">
                  Jason grew up around grifters and crooks. After a stint in the
                  Army trying to shake off his troubled teens, he found himself
                  in the Keys doing what he knows best, working for local drug
                  runners. It might be time to try something new.
                </h1>
              </div>
              <div id="img">
                <ImageWrapper
                  src="/JASON/Jason_Duval_01_Cropped.jpg"
                  className="mt-24 bg-[#fff9cc] min-h-screen"
                  icon={<Maximize2 className="size-6" />}
                />
              </div>
            </div>
            <div id="right" className="w-[60%] mt-40 flex flex-col items-start">
              <ImageWrapper
                src="/JASON/Jason_Duval_02_Cropped.jpg"
                className="mt-24 bg-[#fff9cc] w-full"
                icon={<Maximize2 className="size-6" />}
              />
              <ImageWrapper
                src="/JASON/Jason_Duval_06_Cropped.jpg"
                className="mt-6 bg-[#fff9cc] w-[60%]"
                icon={<Maximize2 className="size-6" />}
              />
            </div>
          </div>
          {/* jason full page image */}
          <div className="flex items-center justify-center mt-40 w-full relative">
            <img src="/JASON/Jason_Duval_03.webp" className="w-full" />
            <span className="absolute bottom-0 z-10 text-7xl font-bold text-[#fff9cb] pl-50 pr-72 mr-52 text-start uppercase py-12 font-stretch-[85%]">
              "If anything happens, I'm right behind you."
            </span>
          </div>
          {/* More about jason */}
          <div
            id="more_about_jason"
            className="flex justify-center mb-36 mr-60 mt-16"
          >
            <div id="left" className="w-[60%] mt-30 flex flex-col items-end">
              <div className="mx-40 pl-30">
                <h1 className="text-[#ffb0c4] leading-10  font-semibold text-4xl text-wrap">
                  Another day in paradise, right?
                </h1>
              </div>
              <ImageWrapper
                src="/JASON/Jason_Duval_05_Cropped.jpg"
                className="mt-24 bg-[#fff9cc] w-full"
                icon={<Maximize2 className="size-6" />}
              />
              <ImageWrapper
                src="/JASON/Jason_Duval_04_Cropped.jpg"
                className="mt-6 bg-[#fff9cc] w-[60%]"
                icon={<Maximize2 className="size-6" />}
              />
            </div>
            <div id="right" className="w-[40%] ml-5 mt-20 flex flex-col items-start">
              <div className="mt-24 mx-20">
                <h1 className="text-white tracking-tight leading-7  font-semibold text-2xl text-wrap">
                  Meeting Lucia could be the best or worst thing to ever happen
                  to him. Jason knows how he'd like it to turn out but right
                  now, it's hard to tell.
                </h1>
              </div>
              <div id="img">
                <ImageWrapper
                  src="/JASON/Jason_Duval_07_Cropped.jpg"
                  className="mt-24 bg-[#fff9cc] min-h-screen"
                  icon={<Maximize2 className="size-6" />}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}


export default Jason_duval