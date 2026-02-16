'use client'

import { useState } from 'react'

export default function UplinkSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="space-y-6" id="contact">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-neon-purple">05_Uplink</h2>
        <div className="h-px flex-1 bg-border-dim"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="terminal-window p-6 space-y-6">
          <div className="text-sm uppercase tracking-widest text-neon-purple">Connection_Params</div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="material-symbols-outlined text-neon-green">alternate_email</span>
              <span className="text-xs group-hover:text-white transition-colors">ALEX.DEV@SYS.LOCAL</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="material-symbols-outlined text-neon-green">location_on</span>
              <span className="text-xs group-hover:text-white transition-colors">SF_NODE // CA_REGION</span>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a className="w-10 h-10 border border-border-dim flex items-center justify-center hover:bg-neon-green hover:text-cyber-darker transition-all" href="#">
              <i className="fab fa-github"></i>
            </a>
            <a className="w-10 h-10 border border-border-dim flex items-center justify-center hover:bg-neon-purple hover:text-white transition-all" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="terminal-window p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] uppercase mb-1 opacity-50">Identity_Input</label>
              <input
                className="w-full bg-cyber-darker border border-border-dim p-2 text-xs focus:ring-1 focus:ring-neon-green focus:outline-none placeholder-neon-green/20"
                name="name"
                onChange={handleChange}
                placeholder="NAME_HERE"
                type="text"
                value={formData.name}
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase mb-1 opacity-50">Email_Address</label>
              <input
                className="w-full bg-cyber-darker border border-border-dim p-2 text-xs focus:ring-1 focus:ring-neon-green focus:outline-none placeholder-neon-green/20"
                name="email"
                onChange={handleChange}
                placeholder="USER@HOST.COM"
                type="email"
                value={formData.email}
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase mb-1 opacity-50">Data_Payload</label>
              <textarea
                className="w-full bg-cyber-darker border border-border-dim p-2 text-xs focus:ring-1 focus:ring-neon-green focus:outline-none placeholder-neon-green/20"
                name="message"
                onChange={handleChange}
                placeholder="ENTER_MESSAGE..."
                rows={4}
                value={formData.message}
              ></textarea>
            </div>
            <button className="w-full bg-neon-green text-cyber-darker font-bold py-2 text-xs uppercase tracking-widest hover:bg-white transition-colors">
              Transmit_Signal
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
