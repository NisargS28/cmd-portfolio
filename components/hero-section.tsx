"use client"

import { useState, useEffect } from "react"

export default function HeroSection() {
  const fullName = "Nisarg Solanki"
  const [displayedText, setDisplayedText] = useState("")
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const typeText = (i: number) => {
      if (i <= fullName.length) {
        setDisplayedText(fullName.slice(0, i))
        setIsDone(false)
        timeout = setTimeout(() => typeText(i + 1), 100)
      } else {
        setIsDone(true)
        timeout = setTimeout(() => eraseText(fullName.length), 2000)
      }
    }

    const eraseText = (i: number) => {
      if (i >= 0) {
        setDisplayedText(fullName.slice(0, i))
        setIsDone(false)
        timeout = setTimeout(() => eraseText(i - 1), 50)
      } else {
        timeout = setTimeout(() => typeText(0), 500)
      }
    }

    typeText(0)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="min-h-[70vh] flex flex-col justify-center" id="hero">
      <div className="terminal-window max-w-4xl">
        <div className="terminal-header">
          <div className="dot bg-red-500/50"></div>
          <div className="dot bg-yellow-500/50"></div>
          <div className="dot bg-green-500/50"></div>
          <span className="ml-4 text-[10px] opacity-50 uppercase tracking-widest">system_boot.sh</span>
        </div>
        <div className="p-6 md:p-10 space-y-6">
          <div className="text-neon-purple text-sm mb-4">$ whoami</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            {displayedText}
            <span className={`inline-block w-[3px] h-[1em] bg-white ml-1 align-middle ${isDone ? "animate-pulse" : "animate-blink"}`}>_</span>
          </h1>
          <div className="flex flex-wrap gap-4 text-sm md:text-lg">
            <span className="bg-neon-green/10 px-2 py-1 border border-neon-green/20">CS_STUDENT</span>
            <span className="bg-neon-green/10 px-2 py-1 border border-neon-green/20">FULLSTACK_ENGINEER</span>
            <span className="bg-neon-green/10 px-2 py-1 border border-neon-green/20">AI_RESEARCHER</span>
          </div>
          <p className="text-neon-green/80 max-w-2xl text-sm leading-relaxed">
            Initializing environment... [OK]<br />
            Architecting high-concurrency systems and low-latency interfaces. Focused on bridging algorithmic complexity with optimal user performance.
          </p>
          <div className="flex gap-6 pt-4">
            <a className="text-xs uppercase tracking-widest font-bold border-b-2 border-neon-green pb-1 hover:text-white transition-colors" href="#projects">&gt;&gt; EXECUTE_PROJECTS</a>
            <a className="text-xs uppercase tracking-widest font-bold border-b-2 border-neon-purple pb-1 text-neon-purple hover:text-white transition-colors" href="#contact">&gt;&gt; ESTABLISH_UPLINK</a>
          </div>
        </div>
      </div>
    </section>
  )
}
