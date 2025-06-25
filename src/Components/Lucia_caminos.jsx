import React from "react";
import ImageWrapper from "./ImageWrapper/Index";
import { Maximize2 } from "lucide-react";

function Lucia_caminos() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-[#121217] to-[#181624] flex flex-col items-center justify-center text-white mb-40 mt-20">
      {/* Hero Image */}
      <div>
        <img src="/LUCIA_CAMINOS/hero.webp" className="w-[100vw] h-auto" />
      </div>

      {/* Character Name */}
      <div className="flex flex-col items-end pr-50 mt-10 w-full ">
        <h1 className="text-7xl font-bold text-[#fff9cb] font-stretch-75%">
          LUCIA CAMINOS
        </h1>
      </div>

      {/* Character Description and Images */}
      <div className="flex flex-row mt-10 w-full">
        <div className="flex flex-col items-end w-1/2 h-full overflow-hidden">
          <ImageWrapper
            src="/LUCIA_CAMINOS/Lucia_Caminos_01.png"
            className="w-full h-full overflow-hidden bg-[#fff9cc] mt-20"
            icon={<Maximize2 className="w-6 h-6" />}
          />
          <ImageWrapper
            src="/LUCIA_CAMINOS/Lucia_Caminos_05_1.jpg"
            className="w-[60%] h-auto overflow-hidden bg-[#fff9cc] mt-20 ml-60"
            icon={<Maximize2 className="w-6 h-6" />}
            scaleY={0.98}
            scaleX={0.97}
          />
        </div>
        <div className="flex flex-col items-start w-1/2 ">
          <h1 className="pl-25 font-bold text-5xl text-wrap text-[#ffb0c4] pr-70">
            Lucia’s father taught her to fight as soon as she could walk.
          </h1>
          <h2 className="pl-25 font-bold text-2xl text-wrap text-white mt-3 pr-70">
            Life has been coming at her swinging ever since. Fighting for her
            family landed her in the Leonida Penitentiary. Sheer luck got her
            out. Lucia’s learned her lesson — only smart moves from here.
          </h2>
          <ImageWrapper
            src="/LUCIA_CAMINOS/Lucia_Caminos_02_1.jpg"
            className="mt-10 w-[80%] mx-5 bg-[#fff9cc]"
            icon={<Maximize2 className="w-6 h-6" />}
          />
          <h2 className="pl-25 font-bold text-2xl text-wrap text-white mt-10 pr-70">
            More than anything, Lucia wants the good life her mom has dreamed of
            since their days in Liberty City — but instead of half-baked
            fantasies, Lucia is prepared to take matters into her own hands.
          </h2>
        </div>
      </div>

      {/* Additional Images */}
      <div className="relative flex items-center justify-center mt-40 w-full">
        <img
          src="/LUCIA_CAMINOS/hero_02.webp"
          alt="lucia caminos in car"
          className="w-full"
        />
        <span className="absolute bottom-0 z-100 text-7xl font-bold text-[#fff9cb] px-50 py-10 font-stretch-[80%]">
          "The only thing that matters is who you know and what you got."
        </span>
      </div>

      {/* Additional Images */}
      <div className="flex flex-row mt-20 w-full gap-4">
        <div className="flex flex-col items-end w-1/2 h-full overflow-hidden">
          <h2 className="w-1/2 font-bold text-2xl text-wrap text-white mt-10 mr-10">
            Fresh out of prison and ready to change the odds in her favor,
            Lucia’s committed to her plan — no matter what it takes.
          </h2>
          <ImageWrapper
            src="/LUCIA_CAMINOS/Lucia_Caminos_06_1.jpg"
            className="w-[80%] overflow-hidden bg-[#fff9cc] mt-20"
            icon={<Maximize2 className="w-6 h-6" />}
            scaleX={0.97}
            scaleY={0.98}
            />
        </div>
        <div className="flex flex-col items-start w-1/2">
          <h1 className="pl-25 font-bold text-5xl text-wrap text-[#ffb0c4] w-[60%]">
            A life with Jason could be her way out.
          </h1>
          <ImageWrapper
            src="/LUCIA_CAMINOS/Lucia_Caminos_04_1.jpg"
            className="mt-15 bg-[#fff9cc]"
            icon={<Maximize2 className="w-6 h-6" />}
            />
            <ImageWrapper
            src="/LUCIA_CAMINOS/Lucia_Caminos_03_1.jpg"
            className="mt-10 w-[70%] mx-5 bg-[#fff9cc]"
            icon={<Maximize2 className="w-6 h-6" />}
            />
        </div>
      </div>
    </div>
  );
}

export default Lucia_caminos;
