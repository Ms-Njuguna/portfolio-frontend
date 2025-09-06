import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="px-4 pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-yellow-900 to-yellow-50/5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div>
                   <motion.h1
                   initial={{opacity: 0, y: 20}}
                   animate={{opacity: 1, y: 0}}
                   transition={{duration: 0.6}}
                   className="text-3xl md:text-5xl font-extrabold leading-tight"
                   >
                       Hi, I’m <span className="text-brand-primary">Ms_Njuguna</span> — Full Stack Software Engineer
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
                        <a href="#projects" className="px-5 py-3 rounded-2xl border border-white/50 bg-yellow-950  text-yellow-50 hover:bg-yellow-800/30 hover:border-yellow-950  hover:text-yellow-950 font-semibold">
                            Explore Projects
                        </a>
                        <a href="#contact" className="px-5 py-3 rounded-2xl border border-white/50 hover:border-white/70">
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* playful but subtle: animated gradient orb */}
                {/* wow factor: interactive particle orb */}
                <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6 }}
                 className="relative h-56 md:h-80 rounded-3xl overflow-hidden 
                    bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                   from-yellow-950 via-yellow-700 to-yellow-50"
                >
                    {/* subtle blurred glow layer */}
                    <div className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-tr from-yellow-900 to-yellow-100 rounded-3xl" />

                    {/* outer white boundary (from your original) */}
                    <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />

                    {/* drifting glowing particles */}
                    {Array.from({ length: 35 }).map((_, i) => (
                        <motion.div
                         key={i}
                         className="absolute w-1.5 h-1.5 rounded-full bg-yellow-200 shadow-md"
                         style={{
                            filter: "drop-shadow(0 0 4px rgba(255, 255, 150, 0.8))",
                         }}
                         initial={{
                            x: Math.random() * 300,
                            y: Math.random() * 220,
                            opacity: 0,
                            scale: 0.8 + Math.random() * 0.6,
                         }}
                         animate={{
                            x: [Math.random() * 300, Math.random() * 300],
                            y: [Math.random() * 220, Math.random() * 220],
                            opacity: [0.2, 1, 0.2],
                            scale: [0.8, 1.2, 0.8],
                         }}
                         transition={{
                            duration: 6 + Math.random() * 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                         }}
                        />
                    ))}

                    {/* glass card with text */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="absolute inset-6 rounded-2xl 
                            bg-yellow-950/20 backdrop-blur-md 
                            border border-white/5 
                            flex items-center justify-center shadow-lg z-10"
                    >
                        <span className="text-sm md:text-base text-yellow-50 px-6 text-center font-medium">
                            Clean UX • Fast APIs • Delightful micro-interactions
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}