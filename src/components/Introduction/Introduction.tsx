import { fadeIn } from '@/utils/motionTransitions';
import { motion } from 'framer-motion';
import Image from 'next/image';


export function Introduction() {
    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/profleof.png" priority width="450" height="450" style={{margin:'0px 0px 200px 0px'}} alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                            <h1 className="mb-5 text-4xl leading-tight md:mb-10 text-blue-500">Software Developer <br /></h1>
                            <p className="max-w-sm  mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-xl">
                            Soy Diego, recién graduado en mi carrera técnica y actualmente Full Stack Developer. Mi enfoque autodidacta, adaptable y proactivo me capacita para abordar los desafíos con determinación. Mi dedicación al aprendizaje me ha llevado a explorar con pasión las áreas de DevOps y Cloud. Esta búsqueda constante de conocimiento es mi motor para crecer, tanto en mis habilidades técnicas como en mi desarrollo profesional.
                            </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="https://publuu.com/flip-book/355799/813374" target='blank' className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-sky-600/50">
                                CV
                            </a>
                            <a href="https://github.com/DIEGOACL07" target='blank' className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-sky-600/50">
                                Ver proyectos
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
