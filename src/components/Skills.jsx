import Gauge from "./Gauge"

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Flask", level: 80 },
  { name: "SQL/ORM", level: 78 },
  { name: "Tailwind", level: 88 },
  { name: "Git/GitHub", level: 92 },
]

export default function Skills() {
    return (
      <section id="skills" className="px-4 py-14 md:py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold">Skills</h2>
          <p className="mt-2 text-slate-300 text-sm md:text-base">
            Breadth across the stack with depth in frontend performance and API design.
          </p>
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-5">
            {skills.map((s, i) => <Gauge key={s.name} pct={s.level} label={s.name} delay={i*0.1} />)}
          </div>
        </div>
      </section>
    )
}