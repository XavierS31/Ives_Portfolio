import ContactLinks from './ContactLinks'

function Navbar() {
  const links = [
    ['INTRODUCTION', '#overview'],
    ['PROJECTS', '#performance'],
    ['EXPERIENCE', '#legacy'],
    ['SKILLS', '#design'],
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-ink/95 px-5 py-4 sm:px-8 lg:px-10">
      <nav className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-y-4 border-b border-white/20 pb-4" aria-label="Primary navigation">
        <a href="#top" className="nav-brand transition-colors hover:text-redline focus-visible:outline focus-visible:outline-2 focus-visible:outline-redline">
          <span className="silvia-script">Ives Sanjines Iriarte Portfolio</span>
          <img src="/assets/nissanLogo.png" alt="Nissan" className="nav-nissan-logo" />
        </a>
        <div className="order-3 flex w-full items-center justify-between gap-2 text-[9px] font-semibold tracking-[0.1em] text-zinc-300 lg:order-none lg:w-auto lg:gap-6 lg:text-[10px] lg:tracking-[0.16em]">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-redline">
              {label}
            </a>
          ))}
        </div>
        <ContactLinks />
      </nav>
    </header>
  )
}

export default Navbar
