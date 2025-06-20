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
  const { scrollYProgress, scrollY } = useScroll();

  const maskSize = useSpring(
    useTransform(scrollYProgress, [0, 1], ["4800px", "250px"]),
    springVar
  );

  const maskPosition = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1200, 87]),
    springVar
  );

  const scaleOuter = useSpring(
    useTransform(scrollYProgress, [0, 1], [1.2, 1]),
    springVar
  );

  const opacityOuter = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0]),
    springVar
  );
  return (
    <div className="h-[300vh] bg-gradient-to-r from-[#121217] to-[#181624]">
      {/* Hero image */}
      <motion.div
        style={{
          scale: scaleOuter,
          opacity: opacityOuter,
        }}
        className="fixed inset-0 h-full w-full bg-[url('/Hero.jpg')] bg-fixed bg-cover"
      ></motion.div>

      <motion.div className="flex flex-col items-center h-full text-white fixed inset-0">
        <motion.img
          src="/gta_logo_purple.webp"
          style={{
            scale: useTransform(scrollYProgress, [0.99, 1], [0.8, 1]),
            opacity: useTransform(scrollYProgress, [0.99, 1], [0, 1]),
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
            opacity: useTransform(scrollYProgress, [0.95, 1], [0, 1]),
            //   position: useTransform(scrollYProgress, [0.9, 1], ["fixed", "absolute"]),
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
        className='fixed flex m-auth w-full h-full inset-0 [mask-image:url("/logo_white.svg")] [mask-repeat:no-repeat] bg-white'
        style={{
          maskSize: maskSize,
          maskPosition: useMotionTemplate`center ${maskPosition}px`,
        }}
      >
        {/* Inner image */}
        <motion.div
          style={{
            scale: scaleOuter,
          }}
          className="fixed inset-0 h-full w-full bg-[url('/Hero.jpg')] bg-fixed bg-cover"
        ></motion.div>
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
          }}
          className="fixed inset-0 h-full w-full bg-white"
        />
      </motion.div>
      {console.log(scrollY)}
    </div>
  );
}
