export default function LogsSection() {
  return (
    <section className="space-y-6" id="experience">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-neon-purple">04_Logs</h2>
        <div className="h-px flex-1 bg-border-dim"></div>
      </div>
      <div className="space-y-4">
        <div className="terminal-window p-4 flex gap-6">
          <div className="text-xs text-neon-purple font-bold border-r border-border-dim pr-6 shrink-0 w-24">2023_Q3</div>
          <div className="space-y-1">
            <div className="text-sm font-bold uppercase">Full_Stack_Intern @ TechCorp</div>
            <p className="text-xs opacity-70">Integrated Node.js microservices. Optimized frontend payload size by 25%. System refactoring specialist.</p>
          </div>
        </div>
        <div className="terminal-window p-4 flex gap-6">
          <div className="text-xs text-neon-purple font-bold border-r border-border-dim pr-6 shrink-0 w-24">2023_Q1</div>
          <div className="space-y-1">
            <div className="text-sm font-bold uppercase">Teaching_Assistant @ University</div>
            <p className="text-xs opacity-70">Mentored 50+ units in Python fundamentals. Debugged complex algorithmic implementations.</p>
          </div>
        </div>
        <div className="terminal-window p-4 flex gap-6">
          <div className="text-xs text-neon-purple font-bold border-r border-border-dim pr-6 shrink-0 w-24">2024_EST</div>
          <div className="space-y-1">
            <div className="text-sm font-bold uppercase">B.S. Computer Science</div>
            <p className="text-xs opacity-70">Focus: OS Architecture &amp; AI Systems. Tech University Academic Distinction.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
