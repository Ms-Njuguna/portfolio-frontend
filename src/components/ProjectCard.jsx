import { motion } from "framer-motion"

function ProjectCard({p}) {
    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{duration: 0.4}}
        className="group relative rounded-3xl overflow-hidden border border-white/10 bg-orange-950/70 hover:bg-orange-950/80"
        >
            <img
            src={p.image}
            alt={p.title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            />
            <div className="p-4 md:p-6">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg md:text-xl font-semibold">{p.title}</h3>
                    <span className="text-xs md:text-sm text-yellow-50/80">{p.tagline}</span>
                </div>
                <p className="mt-2 text-yellow-50/80 text-sm md:text-base">{p.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                    {p.stack.map((s, i) => (
                        <li key={i} className="px-2 py-1 rounded-xl border border-yellow-50/20">{s}</li>
                    ))}
                </ul>
                <div className="mt-4 flex gap-3 text-sm">
                   {p.links.github && <a className="underline hover:text-yellow-950" href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>}
                   {p.links.live && <a className="underline hover:text-yellow-950" href={p.links.live} target="_blank" rel="noreferrer">Live</a>}
                </div>
                <details className="mt-3">
                    <summary className="cursor-pointer text-sm text-yellow-50/80">Highlights</summary>
                    <ul className="mt-2 list-disc list-inside text-sm text-yellow-50/50">
                        {p.highlights.map((h,i)=><li key={i}>{h}</li>)}
                    </ul>
                </details>
            </div>
        </motion.div>
    )
}

export default ProjectCard;