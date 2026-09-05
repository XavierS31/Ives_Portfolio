function Navbar() {
  const links = [
    ['OVERVIEW', '#overview'],
    ['PERFORMANCE', '#performance'],
    ['DESIGN', '#design'],
    ['LEGACY', '#legacy'],
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-20 px-5 py-5 sm:px-8 lg:px-10">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-white/20 pb-4" aria-label="Primary navigation">
        <a href="#top" className="font-mono text-[11px] font-bold tracking-[0.28em] text-white transition-colors hover:text-redline focus-visible:outline focus-visible:outline-2 focus-visible:outline-redline">
          SILVIA / S15
        </a>
        <div className="hidden items-center gap-7 text-[10px] font-semibold tracking-[0.24em] text-zinc-400 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-redline">
              {label}
            </a>
          ))}
        </div>
        <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-500">1999 / 2002</span>
      </nav>
    </header>
  )
}

export default Navbar
