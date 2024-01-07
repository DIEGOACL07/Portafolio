"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { motion } from 'framer-motion'
import { useState } from "react"
import { Avatar } from "../Avatar"
import { cardContent } from "./Work.data"

export function Work() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "660px",
            opacity: 1
        },
        collapsed: {
            width: "500px",
            opacity: 0.2
        }
    }

    return (
        <div className="h-screen">
            <Avatar />
            <div className="grid pb-32 md:min-h-screen mt-28 md:mt-0 place-items-center">
                <div>
                    <motion.h1
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="my-5 text-2xl text-center md:text-4-xl"
                    >Mis últimos  <span className="text-blue-600">Proyectos realizados.</span>
                    </motion.h1>
                    <motion.div
                        className="flex flex-col items-center h-full gap-5 px-2 md:flex-row"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {cardContent.map(({ id, title, imageUrl, description, link, skills }) => (
                            <motion.div key={id}
                                className={`card cursor-pointer h-[400px] bg-auto bg-no-repeat text-center bg-center rounded-[20px] ${id === expandedIndex && 'expanded'}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.5 }}
                                onClick={() => handleClick(id)}
                                style={{
                                    backgroundImage: `url(/assets/${imageUrl})`
                                }}
                            >
                                <div className="flex flex-col justify-end h-full">
                                    <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                                        <h2 className="text-xl font-semibold text-center text-white">{title}</h2>
                                        {id === expandedIndex && (
                                            <>
                                                <p>{description}</p>
                                                <div className="flex gap-5 mt-3">
                                                    {skills.map((data, index) => (
                                                        <p key={index}>{data.icon}</p>
                                                    ))}
                                                </div>
                                                <button className="bg-blue-400 text-white mt-7 p-2 rounded-lg">
                                                <a href={link} target="_blank" rel="noopener noreferrer">
                                                    VER DEMO
                                                </a>
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
