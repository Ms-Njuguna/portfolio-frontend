export default function Navbar() {
    return(
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-yellow-900/10 border-b border-white/5">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <a href="#" className="text-xl font-extrabold tracking-tight">
                   <span className="text-yellow-950">Ms_Njuguna</span>
                   <span className="text-yellow-950">.dev</span>
                </a>
                <button
                className="md:hidden rounded-xl border border-white/10 px-3 py-2 text-sm"
                onClick={() => document.getElementById("nav-links")?.classList.toggle("hidden")}
                aria-label="Toggle menu"
                >
                   Menu
                </button>
                <ul id="nav-links" className="hidden md:flex gap-6 text-sm">
                    <li><a href="#projects" className="hover:text-yellow-950">Projects</a></li>
                    <li><a href="#skills" className="hover:text-yellow-950">Skills</a></li>
                    <li><a href="#contact" className="hover:text-yellow-950">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}