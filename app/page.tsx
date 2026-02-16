'use client'

import Sidebar from '@/components/sidebar'
import HeroSection from '@/components/hero-section'
import ManifestSection from '@/components/manifest-section'
import ToolkitSection from '@/components/toolkit-section'
import OperationsSection from '@/components/operations-section'
import LogsSection from '@/components/logs-section'
import UplinkSection from '@/components/uplink-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <>
      <div className="scanline"></div>
      <Sidebar />
      <main className="ml-20 md:ml-64 flex-1 p-4 md:p-8 space-y-12 pb-24">
        <HeroSection />
        <ManifestSection />
        <ToolkitSection />
        <OperationsSection />
        <LogsSection />
        <UplinkSection />
        <Footer />
      </main>
    </>
  )
}
