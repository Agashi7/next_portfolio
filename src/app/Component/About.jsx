"use client";
import React,{useState,useTransition} from 'react'
import Image from 'next/image'
import Tab from './Tab';

const Tab_data= [
    {
        title: "Skills",
        id: "Skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>Bootstrap</li>
                <li>Jquery</li>
                <li>React js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Python Fullstack at Sla, Chennai</li>
                <li>Completed B.E in P.S.R ENGINEERING COLLEGE  Sivakasi</li>
                <li>St paul's Mat Hr Sec School, Kovilpatti</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "Certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>The completion of HTML in Greatlearning</li>
                <li>The completion of CSS in Greatlearning</li>
                <li>The completion of Javascript in Guvi</li>
                <li>The completion of Python in Guvi</li>
            </ul>
        ),
    },
];

const About = () => {
    const[tab, setTab]= useState("Skills")
    const [isPending ,startTransition] = useTransition();

    const handleChange = (id) => {
        startTransition(() => {
            setTab(id);
        })

    }
  return (
    <section id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ml-8'>
           <Image src='/about-image.png' width={500} height={500} alt='About pic'/>
           <div className='mt-4 md:mt-0 text-left flex  flex-col h-full'>
            <h2 className='text-4xl font-bold mb-4'>About Me</h2>
            <p className='text-base md:text-lg'>Agashi A, a dedicated Frontend Developer  Proficient
 in HTML, CSS, JavaScript,Python and frameworks like
 Bootstrap and jQuery. Skilled in user-centric design
 principles, prototyping, and collaborative
 development. Eager to apply my expertise and
 creativity to deliver high-quality frontend solutions
 within a dynamic team environment</p>
            <div className="flex flex-row mt-8 justify-start space-x-4">
                <Tab selectTab={() => handleChange("Skills")} active={tab==="Skills"}>Skills</Tab>
                <Tab selectTab={() => handleChange("Education")} active={tab==="Education"}>Education</Tab>
                <Tab selectTab={() => handleChange("Certifications")} active={tab==="Certifications"}>Certifications</Tab>


            </div>
            <div className='mt-8'>
                {Tab_data.find((t) => t.id === tab).content}
            </div>
           </div>
        </div>
    </section>
  )
}

export default About