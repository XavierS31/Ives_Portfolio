const experience = [
  {
    organization: 'Mechanical Properties & Characterization Lab @ UCF',
    role: 'Undergraduate Research Assistant',
    date: 'March 2026 – Present',
    description: 'Design, fabricate, and assemble custom test rigs with the Rig Team. Conduct tensile testing on MTS machines following ASTM standards.',
    detail: 'Currently modernizing a column buckling machine with microcontrollers, load cells, LVDT sensors, and a stepper motor for automated testing.',
  },
  {
    organization: 'Bolivian Student Association @ UCF',
    role: 'Co-Founder & Treasurer',
    date: 'August 2025 – February 2026',
    description: 'Co-founded a cultural organization supporting Bolivian students at UCF. Built and managed financial tracking for budgets, ledgers, reimbursements, and transaction records.',
    detail: 'Coordinated event logistics and budgeting for cultural and community gatherings.',
  },
  {
    organization: 'Aramark @ UCF',
    role: 'Student Worker',
    date: 'August 2025 – Present',
    description: 'Support food preparation and service in a high-volume environment serving approximately 500–1,000+ students per shift.',
    detail: 'Follow safety, sanitation, and HACCP standards while collaborating with the service team.',
  },
]

function LegacySection() {
  return (
    <section id="legacy" className="section-shell relative overflow-hidden border-t border-white/10">
      <img src="/assets/nissan3.png" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center opacity-45 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-[0.8fr_1.2fr] md:px-10 lg:py-40">
        <div>
          <p className="eyebrow text-[10px] font-semibold tracking-[0.35em] text-redline">Experience & leadership</p>
        </div>
        <div>
          <h2 className="display-title max-w-3xl text-5xl sm:text-7xl">Research. Teamwork. Impact.</h2>
          <div className="mt-12 space-y-10">
            {experience.map((item) => (
              <article key={item.organization} className="max-w-xl border-l border-redline pl-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400">{item.date}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.organization}</h3>
                <p className="mt-2 text-sm text-redline">{item.role}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegacySection
