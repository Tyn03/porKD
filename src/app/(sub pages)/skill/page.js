"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "react-loaders";
import WordCloud from "./wordcloud";
import AnimatedLetters from "../../../components/AnimatedLetters";
import den from "../../../../public/background/den.jpg"
const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Image
            src={den}
            alt="Next.js Portfolio website's about page background image"
            className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-100"
            priority
            sizes="100vw"
          />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="text-zone flex-1 text-gray-300">
          <h1 className="text-4xl font-bold text-blue-400">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
          I have a strong foundation in both development and operations, with expertise in full-stack web development, 
          data structures, and object-oriented programming (OOP). I specialize in building scalable web applications, 
          designing efficient algorithms, and writing clean, modular, and reusable code. My skill set spans full-stack, devops, 
          and I am committed to staying updated with the latest technologies to tackle complex challenges effectively.


          </p>
          
        </div>

        <div className="tagcloud-wrap flex-1 flex justify-center items-center">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Skills;
