"use client"
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { motion } from 'framer-motion';
import { useState } from "react";
import CountUp from "react-countup";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
import { dataAboutSkills, dataCounter } from "./About.data";

export function About() {
    const [index, setIndex] = useState(0)

    return (
        <div className="flex items-center justify-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">

            <motion.div
                initial={motionTransitionsAbout.initial}
                animate={motionTransitionsAbout.animate}
                transition={motionTransitionsAbout.transition}
            >
                <h1 className="mb-6 md:text-4xl">Full-Stack || <span className="text-blue-600">Devops || Cloud</span></h1>

                <div className="grid justify-between grid-cols-2 gap-3 my-8 md:flex md:grid-cols-4 md:gap-6">
                    {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                        <div key={id} className={`${lineRight && 'ltr'}`}>
                            <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100'}`}>
                                <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-blue-600">
                                    + <CountUp end={endCounter} start={0} duration={5} />
                                </p>
                                <p className="text-xs uppercase max-w-[100px]">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col mt-1 mb-1 md:flex-row justify-evenly md:mt-18 md:mb-5">
                    {dataAboutSkills.map((dataText, itemIndex) => {
                        const { id, text } = dataText;

                        return (
                            <div key={id}
                                className={`${index === id ? 'text-blue-600 duration-300 transition-all border-blue-600' : 'border-white'} 
                                        cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
                                onClick={() => setIndex(itemIndex)}
                            >
                                <p className="mr-4 text-md md:text-lg">{text}</p>
                                {index === id ? (
                                    <BiDownArrow />
                                ) : (
                                    <BiLeftArrow />
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className="max-w-4xl p-4 mx-auto bg-blue-600/20 rounded-xl">
                    <div className="grid grid-cols-3 gap-4 mx-auto">
                        {dataAboutSkills[index].skills.map((items, index) => (
                            <div key={index} className="flex items-center">
                                <span>{items.title}</span>
                            </div>
                        ))}
                    </div>
                </div>


            </motion.div>
        </div>
    )
}
