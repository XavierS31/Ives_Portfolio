const specs = [
  ['ENGINE', 'SR20DET'],
  ['LAYOUT', 'FR'],
  ['TRANSMISSION', '6-SPEED MANUAL'],
  ['POWER', '250 PS'],
]

function PerformanceSection() {
  return (
    <section id="performance" className="section-shell border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:py-40">
        <div className="mb-20 max-w-xl">
          <p className="eyebrow mb-6 text-[10px] font-semibold tracking-[0.35em] text-redline">The machine</p>
          <h2 className="display-title text-5xl sm:text-7xl">Response, measured.</h2>
        </div>
        <dl className="grid border-t border-white/20 md:grid-cols-2">
          {specs.map(([label, value]) => (
            <div key={label} className="group flex items-center justify-between border-b border-white/15 py-6 md:mr-10">
              <dt className="font-mono text-[10px] tracking-[0.25em] text-zinc-500">{label}</dt>
              <dd className="text-right text-lg tracking-[0.08em] text-zinc-100 transition-colors group-hover:text-redline">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default PerformanceSection
