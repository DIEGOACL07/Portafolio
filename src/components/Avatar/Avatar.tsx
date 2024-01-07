"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Avatar() {
    return (
        <motion.div variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit="hidden " className="bottom-0 right-6 hidden md:inline-block md:absolute -z-1">
            <Image src="/assets/avatar.png" width="220" height="220" className="w-full h-full" alt="Avatar" />
        </motion.div>
    )
}
