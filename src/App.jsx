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
        <h2 className="display-title max-w-4xl text-5xl sm:text-7xl lg:text-[8.5rem]">Concept to creation.</h2>
        <div className="self-end border-l border-redline pl-6 text-sm leading-7 text-zinc-400 md:mb-3">
          <p>I’m Ives Sanjines Iriarte, a Mechanical Engineering student at the University of Central Florida in Orlando. My experience spans CAD, manufacturing, electronics integration, embedded systems, autonomous vehicles, AI, and engineering research.</p>
          <p className="mt-6">I take projects from concept and CAD through prototyping, manufacturing, integration, testing, and optimization.</p>
          <p className="mt-6 text-zinc-300">University of Central Florida<br />Bachelor of Science in Mechanical Engineering<br />Expected December 2027 · GPA 3.5</p>
          <p className="mt-6 text-zinc-400">Orlando, Florida · English &amp; Spanish</p>
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
