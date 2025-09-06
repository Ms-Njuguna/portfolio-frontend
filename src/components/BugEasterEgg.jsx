import { useEffect, useRef, useState } from "react"

const rand = (min, max) => Math.random() * (max - min) + min

export default function BugEasterEgg() {
  const [pos, setPos] = useState({ x: 100, y: 300 })
  const [alive, setAlive] = useState(true)
  const [score, setScore] = useState(() => Number(localStorage.getItem("bugScore") || 0))
  const [angle, setAngle] = useState(0) // visible orientation
  const targetAngle = useRef(0) // desired orientation
  const vel = useRef({ dx: rand(-1, 1), dy: rand(-0.5, 0.5) })
  const wiggleRef = useRef(0)

  useEffect(() => {
    if (!alive) return

    let animationId
    const speed = 1.6

    const animate = () => {
      setPos(prev => {
        let { x, y } = prev
        let { dx, dy } = vel.current

        // occasionally wiggle/change direction slightly
        if (Math.random() < 0.02) {
          dx += rand(-0.4, 0.4)
          dy += rand(-0.4, 0.4)
          vel.current = { 
            dx: Math.max(-2, Math.min(2, dx)), 
            dy: Math.max(-2, Math.min(2, dy)) 
          }
        }

        // move
        x += dx * speed
        y += dy * speed

        // bounce at edges
        if (x < 10 || x > window.innerWidth - 40) {
          vel.current.dx *= -1
          dx = vel.current.dx
        }
        if (y < 60 || y > window.innerHeight - 40) {
          vel.current.dy *= -1
          dy = vel.current.dy
        }

        // set new target angle (movement direction)
        targetAngle.current = Math.atan2(dy, dx) * (180 / Math.PI)

        // smooth rotation → gradually move angle toward target
        setAngle(prevAngle => {
          const diff = targetAngle.current - prevAngle
          const wrappedDiff = ((diff + 540) % 360) - 180 // shortest path
          return prevAngle + wrappedDiff * 0.1 // smoothing factor
        })

        return { 
          x: Math.max(10, Math.min(x, window.innerWidth - 40)), 
          y: Math.max(60, Math.min(y, window.innerHeight - 40)) 
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [alive])

  function squash() {
    if (!alive) return
    setAlive(false)
    const newScore = score + 1
    setScore(newScore)
    localStorage.setItem("bugScore", String(newScore))

    setTimeout(() => {
      setPos({ 
        x: rand(20, window.innerWidth - 60), 
        y: rand(100, window.innerHeight - 60) 
      })
      vel.current = { dx: rand(-1, 1), dy: rand(-1, 1) }
      setAlive(true)
    }, 1200)
  }

  // Wiggle effect (legs crawling)
  wiggleRef.current += 0.2
  const wiggle = Math.sin(wiggleRef.current) * (alive ? 10 : 0) // 10° oscillation

  return (
    <>
      {/* Score counter */}
      <div
        className="fixed left-2 bottom-2 z-[60] text-xs px-2 py-1 rounded-lg bg-yellow-950/50 border border-white/10 text-yellow-950"
        title="Bugs squashed"
      >
        🪲 Squashed: <span className="font-semibold text-yellow-950">{score}</span>
      </div>

      {/* The bug */}
      <button
        onClick={squash}
        aria-label="Catch the bug"
        className={`fixed z-[61] select-none active:scale-95 transition-transform ${
          alive ? "opacity-90" : "opacity-30 scale-75"
        }`}
        style={{ 
          left: pos.x, 
          top: pos.y, 
          transform: `rotate(${angle + wiggle}deg)` 
        }}
        title={alive ? "Catch me!" : "Ouch!"}
      >
        <span className={`text-3xl ${alive ? "" : "line-through"}`}>🪲</span>
      </button>
    </>
  )
}
