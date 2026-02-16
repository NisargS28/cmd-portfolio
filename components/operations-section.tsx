export default function OperationsSection() {
  return (
    <section className="space-y-6" id="projects">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-neon-purple">03_Operations</h2>
        <div className="h-px flex-1 bg-border-dim"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="terminal-window group">
          <div className="terminal-header flex justify-between">
            <span className="text-[10px]">PROJECT_ID: AI_CLASSIFIER</span>
            <div className="flex gap-2">
              <a className="hover:text-white" href="#"><i className="fab fa-github"></i></a>
              <a className="hover:text-white" href="#"><span className="material-icons-outlined text-xs">open_in_new</span></a>
            </div>
          </div>
          <div className="relative h-48 overflow-hidden">
            <img
              alt="Code"
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaeTmwArhqiwd1_leG9GRXB-uFoed3vVNAD-W6RHmTvEtLruErRsPy3nWe47LXiuY4iDI2eAFuE6_T0vJCfuuWCSTvpZOPzWQxaqMSVqEwdq3jRcdt8p6PbWwazSeRZ4fVUboitX67isgrUXKjDF6Nw6K1aV3Co7sICWUbWrg6xJi-c9wlSAvqGXMDEkHLoeQ2SZsamFz8ia6WsiLaNIAI84mtg1P4P4YU6f2evbW9nXzztgQP5I3dvho0mVFeMnSgOJitIUxggXKb"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple to-transparent"></div>
          </div>
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-bold">IMAGE_RECOGNITION_NODE</h3>
            <p className="text-xs text-neon-green/70">Neural network for 100+ category classification. Deployed via high-performance REST API. 98.2% accuracy on validation sets.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-[10px] px-1.5 border border-neon-purple text-neon-purple">TENSORFLOW</span>
              <span className="text-[10px] px-1.5 border border-neon-purple text-neon-purple">PYTHON</span>
              <span className="text-[10px] px-1.5 border border-neon-purple text-neon-purple">FASTAPI</span>
            </div>
          </div>
        </div>
        <div className="terminal-window group">
          <div className="terminal-header flex justify-between">
            <span className="text-[10px]">PROJECT_ID: ECOM_DASH</span>
            <div className="flex gap-2">
              <a className="hover:text-white" href="#"><i className="fab fa-github"></i></a>
              <a className="hover:text-white" href="#"><span className="material-icons-outlined text-xs">open_in_new</span></a>
            </div>
          </div>
          <div className="relative h-48 overflow-hidden">
            <img
              alt="Dashboard"
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMUkjUQVgsBYTFU4ISgYEmERTheb0EfvwXHBZxG5WeI_BntKSQB6x8JlGTCheJvW3OBy9O3dH1plhiyNVXOx1ra8lvRaKu0pG8rWxY004PN2eCJmHg9ZuSWyAc3BBIKZBguYILDbOW9jPUgidJwhOOl2NE6KbJk1P4sQPFSoO9zioMXNdmP5FeWidgovbs8gz90oWdVepS0KUW5DTi0gbGolIyYUfiWzl6SFLv0B2NMS_l02JzKzWj3Nshp7XEzIZcIecSlpIanl27"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple to-transparent"></div>
          </div>
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-bold">ANALYTICS_CONTROL_PANEL</h3>
            <p className="text-xs text-neon-green/70">Real-time data visualization suite. Proprietary inventory management logic with 500ms sync latency.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-[10px] px-1.5 border border-neon-purple text-neon-purple">REACT</span>
              <span className="text-[10px] px-1.5 border border-neon-purple text-neon-purple">NODE.JS</span>
              <span className="text-[10px] px-1.5 border border-neon-purple text-neon-purple">MONGODB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
