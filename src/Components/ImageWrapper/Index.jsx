"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * ImageWrapper component that displays an image with a hover effect.
 * @param {Object} props - Component properties.
 * @param {string} props.src - Source URL of the image.
 * @param {ReactNode} props.icon - Icon to display on hover.
 * @param {string} props.alt - Alternative text for the image.
 * @param {string} props.className - Additional CSS classes for styling.
 * @param {string} [props.bgcolor="#36364e"] - Background color of the icon container.
 * @param {string} [props.colorOnHover="#fff9cc"] - Color of the icon.
 * @param {number} [props.scaleX=0.98] - Scale factor for the X-axis on hover.
 * @param {number} [props.scaleY=0.97] - Scale factor for the Y-axis on hover.
 * @returns {JSX.Element} Rendered ImageWrapper component.
 * @example
 * <ImageWrapper
 *   src="/path/to/image.jpg"
 *   icon={<SomeIcon />}
 *  alt="Description of image"
 *  className="custom-class"
 *  bgcolor="#123456"
 *  colorOnHover="#abcdef"
 * />
 * @description This component uses Framer Motion for animations and provides a hover effect that changes the icon's background color and text color. The image scales down slightly on hover for a subtle effect.
 * It is designed to be reusable and customizable with props for the image source, icon, alt text, className, background color, and hover color.
 */

function Index({
  src,
  icon,
  alt,
  className,
  bgcolor = "#36364e",
  colorOnHover = "#fff9cc",
  scaleX = 0.98,
  scaleY = 0.97,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full flex items-center justify-center`}
      >
        <motion.img
          whileHover={{
            scaleX, scaleY
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          src={src}
          alt={alt}
        />
        <motion.div
          className={`absolute bottom-5 right-5 p-4 rounded-full`}
          animate={{
            backgroundColor: isHovered ? colorOnHover : bgcolor,
            color: isHovered ? bgcolor : colorOnHover,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
      </div>
    </div>
  );
}

export default Index;
