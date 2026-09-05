const skills = [
  ['CAD & Engineering', 'SolidWorks · Assemblies · ANSYS'],
  ['Manufacturing', '3D Printing · Laser Cutting · Soldering · Mechanical Assembly'],
  ['Electronics & Embedded Systems', 'Arduino · ESP32 · Schematics · Circuits · Sensors'],
  ['Programming', 'Python · C · MATLAB · PyTorch'],
  ['Engineering Documentation', 'Bill of Materials · Technical Reports · Microsoft Excel · LaTeX'],
  ['Professional Skills', 'Leadership · Teamwork · Problem Solving · Adaptability · Critical Thinking · Conflict Resolution'],
]

function DesignSection() {
  return (
    <section id="design" className="relative min-h-[82dvh] overflow-hidden border-t border-white/10">
      <img src="/assets/nissan1.png" alt="Nissan Silvia S15 front three-quarter design" className="absolute inset-0 h-full w-full object-cover object-center opacity-45 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[82dvh] max-w-7xl items-end gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="eyebrow mb-6 text-[10px] font-semibold tracking-[0.35em] text-redline">Technical skills</p>
          <h2 className="display-title max-w-3xl text-6xl sm:text-8xl lg:text-[7rem]">Design.<br /><span className="text-zinc-400">Build.</span><br />Refine.</h2>
        </div>
        <dl className="border-t border-white/20 bg-ink/70 px-6">
          {skills.map(([category, tools]) => (
            <div key={category} className="border-b border-white/15 py-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300">{category}</dt>
              <dd className="mt-2 text-sm leading-7 text-zinc-300">{tools}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default DesignSection
