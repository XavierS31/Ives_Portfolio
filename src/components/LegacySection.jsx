import CaseStudyCard from './CaseStudyCard'

const labExperience = {
  name: 'Mechanical Properties & Characterization Lab @ UCF',
  role: 'Undergraduate Research Assistant',
  date: 'March 2026 - Present',
  image: '/assets/MPCL/solidworks.jpg',
  imageAlt: 'SolidWorks model for the Mechanical Properties and Characterization Lab',
  imagePosition: '50% 50%',
  gallery: ['/assets/MPCL/solidworks.webp', '/assets/MPCL/machine.webp', '/assets/MPCL/machine2.webp', '/assets/MPCL/parts.webp', '/assets/MPCL/parts2.webp', '/assets/MPCL/tools.webp'],
}

const experience = [
  { organization: 'Bolivian Student Association @ UCF', role: 'Co-Founder & Treasurer', date: 'August 2025 - February 2026', description: 'Co-founded a cultural organization supporting Bolivian students at UCF. Built and managed financial tracking for budgets, ledgers, reimbursements, and transaction records.', detail: 'Coordinated event logistics and budgeting for cultural and community gatherings.' },
  { organization: 'Aramark @ UCF', role: 'Student Worker', date: 'August 2025 - Present', description: 'Support food preparation and service in a high-volume environment serving approximately 500-1,000+ students per shift.', detail: 'Follow safety, sanitation, and HACCP standards while collaborating with the service team.' },
]

function LegacySection() {
  return (
    <section id="legacy" className="section-shell relative overflow-hidden border-t border-white/10">
      <img src="/assets/nissan3.png" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center opacity-45 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 lg:py-40">
        <div className="mb-16"><h2 className="silvia-section-mark text-redline">Experience</h2></div>
        <div className="grid gap-8 lg:items-stretch lg:grid-cols-2">
          <CaseStudyCard item={labExperience}>
            <p className="section-copy mt-6">Design, fabricate, and assemble custom test rigs with the Rig Team. Conduct tensile testing on MTS machines following ASTM standards.</p>
            <p className="section-copy mt-3">Currently modernizing a column buckling machine with microcontrollers, load cells, LVDT sensors, and a stepper motor for automated testing.</p>
          </CaseStudyCard>
          <div className="grid gap-8 lg:grid-rows-2">
            {experience.map((item) => (
              <article key={item.organization} className="engineering-card min-w-0 p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400">{item.date}</p>
                <h3 className="entry-title mt-3">{item.organization}</h3>
                <p className="mt-2 text-sm text-redline">{item.role}</p>
                <p className="section-copy mt-5">{item.description}</p>
                <p className="section-copy mt-3">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegacySection