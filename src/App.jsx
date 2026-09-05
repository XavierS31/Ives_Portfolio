import InteractiveCarHero from './components/InteractiveCarHero'
import Navbar from './components/Navbar'
import PerformanceSection from './components/PerformanceSection'
import DesignSection from './components/DesignSection'
import LegacySection from './components/LegacySection'
import Footer from './components/Footer'

function Introduction() {
  return (
    <section id="overview" className="section-shell border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-[1.2fr_0.8fr] md:px-10 lg:py-40">
        <h2 className="display-title max-w-4xl text-5xl sm:text-7xl lg:text-[8.5rem]">Built to be driven.</h2>
        <div className="self-end border-l border-redline pl-6 text-sm leading-7 text-zinc-400 md:mb-3">
          <p>The Nissan Silvia S15 distilled a lightweight, rear-drive formula into one of Japan's most enduring performance cars.</p>
          <p className="mt-6 text-zinc-600">Compact proportions. Immediate response. A platform made to be shaped by its driver.</p>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-white">
      <Navbar />
      <main>
        <InteractiveCarHero />
        <Introduction />
        <PerformanceSection />
        <DesignSection />
        <LegacySection />
      </main>
      <Footer />
    </div>
  )
}

export default App
