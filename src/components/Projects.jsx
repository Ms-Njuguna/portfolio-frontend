import ProjectCard from "./ProjectCard"
import { useEffect, useState } from "react"
import { apiGet } from "../lib/api"

export default function Projects(){
  const [projects, setProjects] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    apiGet("/api/projects")
      .then(d => setProjects(d.projects || []))
      .catch(e => setError(e.message))
  }, [])

  return (
    <section id="projects" className="px-4 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold">Projects</h2>
        <p className="mt-2 text-slate-300 text-sm md:text-base">
          Case studies showcasing real-world features, performance, and UX polish.
        </p>
        {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}