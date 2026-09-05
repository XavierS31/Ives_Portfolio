function Navbar() {
  const links = [
    ['OVERVIEW', '#overview'],
    ['PROJECTS', '#performance'],
    ['SKILLS', '#design'],
    ['EXPERIENCE', '#legacy'],
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-20 px-5 py-5 sm:px-8 lg:px-10">
      <nav className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-y-4 border-b border-white/20 pb-4" aria-label="Primary navigation">
        <a href="#top" className="font-mono text-[11px] font-bold tracking-[0.28em] text-white transition-colors hover:text-redline focus-visible:outline focus-visible:outline-2 focus-visible:outline-redline">
          IVES / SI
        </a>
        <div className="order-3 flex w-full items-center justify-between gap-2 text-[9px] font-semibold tracking-[0.12em] text-zinc-300 md:order-none md:w-auto md:gap-7 md:text-[10px] md:tracking-[0.24em]">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-redline">
              {label}
            </a>
          ))}
        </div>
        <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-400">UCF / MECHANICAL</span>
      </nav>
    </header>
  )
}

export default Navbar
