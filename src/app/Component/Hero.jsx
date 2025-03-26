"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="col-span-7 place-self-center text-center sm:text-left px-6 sm:px-12 lg:px-20">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-wrap">
              Hello, I'm {""}
            </span>
            <br />
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              <TypeAnimation
                sequence={["Agashi", 1000, "Web Developer", 1000]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg xl:text-xl break-words">
            A skilled web developer proficient in HTML, CSS, and JavaScript, with expertise in Bootstrap for responsive design. Experienced in frontend development using ReactJS and knowledgeable in Python for backend development or scripting tasks.
          </p>
          <div className="flex gap-4 mt-6">
            
            <a
              href="#contact" 
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black"
              aria-label="Hire Me"
            >
              <span> Hire Me</span>
            </a>

            
            <a
              href="/Agashi_CV.pdf"  
              download="Agashi_CV"
              className="px-1 py-1 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 bg-gradient-to-br from-blue-500 to-purple-500"
              aria-label="Download CV"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="col-span-5 flex justify-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden">
            <Image
              src="/boy.jpg"
              height={250}
              width={250}
              className="w-full h-full object-cover"
              alt="Profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
