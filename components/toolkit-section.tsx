export default function ToolkitSection() {
  return (
    <section className="space-y-6" id="skills">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-neon-purple">02_Toolkit</h2>
        <div className="h-px flex-1 bg-border-dim"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="terminal-window">
          <div className="terminal-header"><span className="text-[10px]">LANGUAGES.CFG</span></div>
          <div className="p-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> PYTHON</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> JS/TS</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> JAVA</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> C++</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> SQL</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> RUST</div>
          </div>
        </div>
        <div className="terminal-window">
          <div className="terminal-header"><span className="text-[10px]">FRAMEWORKS.LIB</span></div>
          <div className="p-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> REACT</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> NEXTJS</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> NODE.JS</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> TAILWIND</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> EXPRESS</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> DJANGO</div>
          </div>
        </div>
        <div className="terminal-window">
          <div className="terminal-header"><span className="text-[10px]">INFRA.ENV</span></div>
          <div className="p-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> DOCKER</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> AWS</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> GIT</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> K8S</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> TERRAFORM</div>
            <div className="flex items-center gap-2"><span className="text-neon-purple">&gt;&gt;</span> POSTGRES</div>
          </div>
        </div>
      </div>
    </section>
  )
}
