export default function Navbar() {
    return(
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/60 border-b border-white/5">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <a href="#" className="text-xl font-extrabold tracking-tight">
                   <span className="text-brand-primary">Patricia</span>
                   <span className="text-brand-accent">.dev</span>
                </a>
                <button
                className="md:hidden rounded-xl border border-white/10 px-3 py-2 text-sm"
                onClick={() => document.getElementById("nav-links")?.classList.toggle("hidden")}
                aria-label="Toggle menu"
                >
                   Menu
                </button>
                <ul id="nav-links" className="hidden md:flex gap-6 text-sm">
                    <li><a href="#projects" className="hover:text-brand-primary">Projects</a></li>
                    <li><a href="#skills" className="hover:text-brand-primary">Skills</a></li>
                    <li><a href="#contact" className="hover:text-brand-primary">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}