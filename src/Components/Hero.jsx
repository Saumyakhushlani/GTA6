"use client";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
  scale,
} from "framer-motion";

const springVar = {
  stiffness: 100,
  damping: 20,
};

export default function Hero() {
  const { scrollY } = useScroll();

  const maskSize = useSpring(
    useTransform(scrollY, [0, 776], ["4800px", "250px"]),
    springVar
  );

  const maskPosition = useSpring(
    useTransform(scrollY, [0, 776], [-1200, 87]),
    springVar
  );

  const scaleOuter = useSpring(
    useTransform(scrollY, [0, 776, 1552], [1.2, 1, 0]),
    springVar
  );

  const opacityOuter = useSpring(
    useTransform(scrollY, [0, 155.2], [1, 0]),
    springVar
  );
  return (
    <motion.div
      className="h-[1552px] bg-gradient-to-r from-[#121217] to-[#181624] z-0"
      style={{
        opacity: useTransform(scrollY, [776, 1552], [1, 0]),
      }}
    >
      {/* Hero image */}
      <motion.div
        style={{
          scale: scaleOuter,
          opacity: opacityOuter,
        }}
        className="fixed inset-0 h-full w-full bg-[url('/Hero.jpg')] bg-fixed bg-cover bg-center"
      ></motion.div>

      <motion.div className="flex flex-col items-center h-full text-white fixed inset-0">
        <motion.img
          src="/gta_logo_purple.webp"
          style={{
            scale: useTransform(scrollY, [700, 776,1000, 1552], [0.8, 1,1, 0]),
            opacity: useTransform(scrollY, [700, 776,1000, 1552], [0, 1,1, 0]),
          }}
          className="mt-[30px] scale-60"
        />
        <motion.h3
          className="w-full text-center uppercase font-bold leading-[86%] text-4xl md:text-8xl tracking-[-0.04em] md:tracking-[-0.0125em] antialiased mb-25 fixed bottom-35"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% -25vh,rgba(212, 66, 95, 1) 0%, rgba(224, 127, 105, 1) 50%, rgba(230, 168, 115, 1) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textWrap: "balance",
            opacity: useTransform(scrollY, [700, 776,1000, 1100], [0, 1,1, 0]),
            scale: useTransform(scrollY, [1000, 1552], [1, 0]),
          }}
        >
          Coming
          <br />
          May 26
          <br />
          2026
        </motion.h3>
      </motion.div>

      {/* Mask image */}
      <motion.div
        className='fixed flex m-auth w-full h-full inset-0 [mask-image:url("/logo_white.svg")] [mask-repeat:no-repeat] bg-white z-0 mask-center'
        style={{
          maskSize: maskSize,
          maskPosition: useMotionTemplate`center ${maskPosition}px`,
          opacity: useTransform(scrollY, [776, 1000], [1, 0]),
        }}
      >
        {/* Inner image */}
        <motion.div
          style={{
            scale: scaleOuter,
          }}
          className="fixed inset-0 h-full w-full bg-[url('/Hero.jpg')] bg-fixed bg-cover bg-center"
        ></motion.div>
        <motion.div
          style={{
            opacity: useTransform(scrollY, [700, 776], [0, 1]),
          }}
          className="fixed inset-0 h-full w-full bg-white"
        />
      </motion.div>
    </motion.div>
  );
}
