import Image from 'next/image'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 border-r border-border-dim bg-cyber-darker z-50 flex flex-col">
      <div className="p-6 border-b border-border-dim mb-8">
        <span className="text-neon-purple font-bold text-xl tracking-tighter">CMD_CENTER v1.0</span>
        <div className="text-[10px] text-neon-green/50 mt-1 uppercase tracking-widest">System Status: Active</div>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        <a className="group flex items-center gap-3 p-3 rounded hover:bg-neon-green/10 transition-colors" href="#hero">
          <span className="material-symbols-outlined text-neon-green">terminal</span>
          <span className="hidden md:inline text-sm uppercase tracking-widest font-bold">Root</span>
        </a>
        <a className="group flex items-center gap-3 p-3 rounded hover:bg-neon-green/10 transition-colors" href="#about">
          <span className="material-symbols-outlined text-neon-green">fingerprint</span>
          <span className="hidden md:inline text-sm uppercase tracking-widest font-bold">Manifest</span>
        </a>
        <a className="group flex items-center gap-3 p-3 rounded hover:bg-neon-green/10 transition-colors" href="#skills">
          <span className="material-symbols-outlined text-neon-green">extension</span>
          <span className="hidden md:inline text-sm uppercase tracking-widest font-bold">Toolkit</span>
        </a>
        <a className="group flex items-center gap-3 p-3 rounded hover:bg-neon-green/10 transition-colors" href="#projects">
          <span className="material-symbols-outlined text-neon-green">account_tree</span>
          <span className="hidden md:inline text-sm uppercase tracking-widest font-bold">Operations</span>
        </a>
        <a className="group flex items-center gap-3 p-3 rounded hover:bg-neon-green/10 transition-colors" href="#experience">
          <span className="material-symbols-outlined text-neon-green">history</span>
          <span className="hidden md:inline text-sm uppercase tracking-widest font-bold">Logs</span>
        </a>
        <a className="group flex items-center gap-3 p-3 rounded hover:bg-neon-green/10 transition-colors" href="#contact">
          <span className="material-symbols-outlined text-neon-green">alternate_email</span>
          <span className="hidden md:inline text-sm uppercase tracking-widest font-bold">Uplink</span>
        </a>
      </nav>
      
      <div className="p-4 border-t border-border-dim">
        <div className="text-[10px] text-neon-purple mb-2">AUTH_USER</div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-neon-green overflow-hidden">
            <img
              alt="Profile"
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_DN2qJKKfpFwP1xPC5axxyDdhFT99fkdMNxxcf9_hl-auahPXpKUDA6l4F4M1GRwfCNUG_IxMRBHzvvV9LtkbXHcImfuE0raQXm7_4wPRFDBKiMluFfNNred_Fo0R7dByn_IFqvtllac2vtgyT7FZQPHfRg5Csa3KnPcUAN-g0AuDZERitgYNcQgyMczzKbaN3f-NK1zjglVAtmGJVWJcKGaXcf6fN-GK8zSLcoAWKxTS3gP4-lt_F0-61Z9K72JJYSZZ9vaSqi-3"
            />
          </div>
          <div className="hidden md:block text-xs truncate">ALEX_DEV.SYS</div>
        </div>
      </div>
    </aside>
  )
}
