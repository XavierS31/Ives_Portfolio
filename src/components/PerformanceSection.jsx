import CaseStudyCard from './CaseStudyCard'

const specs = [
  ['SHPE UCF COMPETITION', '1st Place'],
  ['TELEMETRY SAMPLES', '1,000+'],
  ['DRIVING LEVELS CLASSIFIED', '10'],
  ['BATTERY RUNTIME', '2-3x Longer'],
]

const projects = [
  {
    name: 'Scuderia SHPE AI Racer Competition',
    link: 'https://lnkd.in/p/e-ETAQmM',
    date: 'Spring 2026',
    role: 'Mechanical & Integration Project Lead',
    image: '/assets/ScuderiaShpe/design.jpg',
    imageAlt: 'Scuderia SHPE design work',
    imagePosition: '50% 42%',
    gallery: ['/assets/ScuderiaShpe/design.jpg', '/assets/ScuderiaShpe/car2.jpg', '/assets/ScuderiaShpe/car3.jpg', '/assets/ScuderiaShpe/car.jpg', '/assets/ScuderiaShpe/team1.jpg'],
    highlight: '15 engineering students led through mechanical design and integration.',
    description: 'Reverse engineered a chassis from an STL scan in SolidWorks and designed custom sensor and computing mounts. Integrated Raspberry Pi systems, LiDAR, wiring harnesses, and electronics into an autonomous competition vehicle.',
    fabrication: 'Fabricated parts with laser cutting and 3D printing; supported assembly through soldering and welding.',
    technologies: 'SolidWorks | Raspberry Pi | LiDAR | 3D Printing | Laser Cutting | Mechanical Design | Electronics Integration | Soldering | Welding',
  },
  {
    name: 'PowerTrain AI',
    link: 'https://lnkd.in/p/eiqyBBRN',
    results: specs,
    date: 'Fall 2025',
    role: '1st Place - SHPE UCF Projects Competition',
    image: '/assets/PowerTrainAI/car.jpg',
    imageAlt: 'PowerTrain AI autonomous vehicle',
    imagePosition: '50% 45%',
    gallery: ['/assets/PowerTrainAI/car.jpg', '/assets/PowerTrainAI/car2.jpg', '/assets/PowerTrainAI/car4.jpg', '/assets/PowerTrainAI/certificate.jpg', '/assets/PowerTrainAI/solidworks.jpg', '/assets/PowerTrainAI/team.jpg'],
    highlight: 'Autonomous driving with approximately 2-3x longer battery runtime.',
    description: 'Designed the chassis and assemblies in SolidWorks, maintained the Bill of Materials, and integrated PCBs, wiring, and electronics with fit checks and tolerance studies.',
    fabrication: 'Collected over 1,000 telemetry samples and developed a PyTorch neural network to classify 10 driving levels for battery optimization.',
    technologies: 'SolidWorks | Python | PyTorch | ESP32 | C/C++ | Schematics | Electronics | Machine Learning',
  },
]

function PerformanceSection() {
  return (
    <section id="performance" className="section-shell relative overflow-hidden border-t border-white/10">
      <img src="/assets/nissan2.png" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center opacity-45 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 lg:py-40">
        <div className="mb-20 max-w-xl"><h2 className="silvia-section-mark text-redline">Projects</h2></div>
        <div className="grid items-stretch gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <CaseStudyCard key={project.name} item={project}>
              <p className="mt-6 border-l border-redline pl-5 text-base text-zinc-100">{project.highlight}</p>
              <p className="section-copy mt-6">{project.description}</p>
              <p className="section-copy mt-4">{project.fabrication}</p>
              <p className="mt-6 font-mono text-[10px] leading-6 text-zinc-300">{project.technologies}</p>
              {project.results && (
                <div className="mt-8 mb-8 border-t border-redline/30 pt-6">
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300">PowerTrain AI / Results</p>
                  <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
                    {project.results.map(([label, value]) => <div key={label}><dt className="font-mono text-[9px] leading-5 tracking-[0.12em] text-zinc-400">{label}</dt><dd className="mt-1 text-2xl font-semibold tracking-tight text-zinc-100">{value}</dd></div>)}
                  </dl>
                </div>
              )}
            </CaseStudyCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerformanceSection