import InteractiveCarHero from './components/InteractiveCarHero'
import Navbar from './components/Navbar'
import PerformanceSection from './components/PerformanceSection'
import DesignSection from './components/DesignSection'
import LegacySection from './components/LegacySection'
import Footer from './components/Footer'

function Introduction() {
  return (
    <section id="overview" className="section-shell border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:py-40">
        <h2 className="display-title intro-title">About<br /><span className="text-zinc-500">ME</span><span className="text-redline">.</span></h2>
        <div className="engineering-card min-w-0 self-end p-6 sm:p-8">
          <p className="intro-lead">I’m Ives Sanjines Iriarte, a <span className="text-white">Mechanical Engineering student</span> at the University of Central Florida.</p>
          <p className="section-copy mt-7">I take engineering projects from concept and CAD through prototyping, manufacturing, integration, testing, and optimization.</p>
          <p className="section-copy mt-5">My experience spans mechanical design, electronics, embedded systems, autonomous vehicles, AI, and engineering research.</p>
          <div className="mt-10 border-t border-white/15 pt-6 text-sm leading-7 text-zinc-400">
            <p className="font-medium text-zinc-200">Bachelor of Science in Mechanical Engineering</p>
            <p>University of Central Florida</p>
            <p>Expected December 2027 · GPA 3.5</p>
            <p className="mt-3">Orlando, Florida · English &amp; Spanish</p>
          </div>
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
        <LegacySection />
        <DesignSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
