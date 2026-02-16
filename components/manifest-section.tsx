export default function ManifestSection() {
  return (
    <section className="space-y-6" id="about">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-neon-purple">01_Manifest</h2>
        <div className="h-px flex-1 bg-border-dim"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 terminal-window p-6 space-y-4">
          <p className="text-sm leading-relaxed">
            Final year CS candidate at Tech University. Specialist in automation and systems architecture. Evolution from primitive scripting to enterprise-grade stack development complete.
          </p>
          <p className="text-sm leading-relaxed">
            Current core focus: Neural network optimization and reactive frontend patterns. Active contributor to the open-source ecosystem.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-3 border border-border-dim bg-cyber-darker text-center">
              <div className="text-neon-purple text-xl font-bold">3+</div>
              <div className="text-[10px] opacity-50">EXP_YRS</div>
            </div>
            <div className="p-3 border border-border-dim bg-cyber-darker text-center">
              <div className="text-neon-purple text-xl font-bold">10+</div>
              <div className="text-[10px] opacity-50">PROJ_COUNT</div>
            </div>
            <div className="p-3 border border-border-dim bg-cyber-darker text-center">
              <div className="text-neon-purple text-xl font-bold">2</div>
              <div className="text-[10px] opacity-50">NODE_INTERNS</div>
            </div>
            <div className="p-3 border border-border-dim bg-cyber-darker text-center">
              <div className="text-neon-purple text-xl font-bold">3.8</div>
              <div className="text-[10px] opacity-50">SYS_GPA</div>
            </div>
          </div>
        </div>
        <div className="terminal-window p-2 grayscale contrast-125 hover:grayscale-0 transition-all duration-500 relative overflow-hidden">
          <img
            alt="Biometric scan"
            className="w-full h-full object-cover object-top"
            src="/nisarg.jpeg"
          />
          <div className="absolute inset-0 border-[20px] border-cyber-purple/20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
