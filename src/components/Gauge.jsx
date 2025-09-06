import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function Gauge({ pct, label, delay=0 }) {
  const r = 44, c = 2*Math.PI*r
  const stroke = (100 - pct) / 100 * c

  return (
    <div className="flex flex-col items-center">
        <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-28 md:h-28">
         <circle cx="50" cy="50" r={r} fill="none" className="stroke-yellow-50/50" strokeWidth="10" />
         <motion.circle
           cx="50" cy="50" r={r} fill="none"
           stroke="currentColor" strokeWidth="10" className="text-black"
           strokeDasharray={c} strokeDashoffset={c}
           initial={{ strokeDashoffset: c }}
           whileInView={{ strokeDashoffset: stroke }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay }}
           strokeLinecap="round"
           transform="rotate(-90 50 50)"
          />
          <text x="50" y="55" textAnchor="middle" className="fill-yellow-50/70 text-sm font-semibold">{pct}%</text>
        </svg>
        <span className="mt-2 text-xs md:text-sm text-yellow-50/90">{label}</span>
    </div>
  )
}

export default Gauge;