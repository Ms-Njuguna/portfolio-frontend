import { useState } from "react"
import { apiPost } from "../lib/api"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({ type: "", msg: "" })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: "", msg: "" })
    try {
      await apiPost("/api/contact", form)
      setStatus({ type: "ok", msg: "Thanks! I’ll get back to you shortly." })
      setForm({ name: "", email: "", message: "" })
    } catch (e) {
      setStatus({ type: "err", msg: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="px-4 py-14 md:py-20 bg-slate-900/40">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold">Contact</h2>
        <p className="mt-2 text-slate-300 text-sm md:text-base">
          Don’t ghost me 👻 — drop a message!
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-3 outline-none focus:border-brand-accent"
              value={form.name} onChange={e=>setForm(f=>({...f, name: e.target.value}))}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-3 outline-none focus:border-brand-accent"
              value={form.email} onChange={e=>setForm(f=>({...f, email: e.target.value}))}
              type="email" required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-3 outline-none focus:border-brand-accent min-h-[120px]"
              value={form.message} onChange={e=>setForm(f=>({...f, message: e.target.value}))}
              required
            />
          </div>
          <button
            disabled={loading}
            className="w-full md:w-auto px-6 py-3 rounded-2xl bg-brand-accent hover:bg-cyan-400 text-slate-950 font-semibold disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status.msg && (
            <p className={`mt-3 text-sm ${status.type==="ok"?"text-emerald-400":"text-red-400"}`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
