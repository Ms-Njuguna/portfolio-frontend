import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="px-4 pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-white-900 to-slate-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div>
                   <motion.h1
                   initial={{opacity: 0, y: 20}}
                   animate={{opacity: 1, y: 0}}
                   transition={{duration: 0.6}}
                   className="text-3xl md:text-5xl font-extrabold leading-tight"
                   >
                       Hi, I’m <span className="text-brand-primary">Patricia Njuguna</span> — Full Stack Engineer
                   </motion.h1>
                   <motion.p
                   initial={{opacity: 0}}
                   animate={{opacity: 1}}
                   transition={{delay: 0.2, duration: 0.6}}
                   className="mt-4 text-black md:text-lg"
                   >
                        I build fast, elegant, and scalable web apps with React, Flask, and modern tooling.
                   </motion.p>
                   <motion.div
                   initial={{opacity: 0}}
                   animate={{opacity: 1}}
                   transition={{delay: 0.4, duration: 0.6}}
                   className="mt-8 flex gap-3"
                   >
                        <a href="#projects" className="px-5 py-3 rounded-2xl bg-brand-primary hover:bg-purple-500 font-semibold">
                            Explore Projects
                        </a>
                        <a href="#contact" className="px-5 py-3 rounded-2xl border border-white/10 hover:border-white/20">
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* playful but subtle: animated gradient orb */}
                <motion.div
                initial={{opacity: 0, scale: 0.95}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.6}}
                className="relative h-56 md:h-80 rounded-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/30 via-brand-accent/20 to-transparent"
                >
                    <div className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-3xl" />
                    <div className="absolute inset-0 border border-white/10 rounded-3xl" />
                    <div className="absolute inset-6 rounded-2xl bg-slate-950/30 backdrop-blur-sm border border-white/5 flex items-center justify-center">
                        <span className="text-sm md:text-base text-black px-6 text-center">
                            Clean UX • Fast APIs • Delightful micro-interactions ✨
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}