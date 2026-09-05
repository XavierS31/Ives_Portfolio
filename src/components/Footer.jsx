import ContactLinks from './ContactLinks'

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 font-mono text-[9px] tracking-[0.2em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-white">IVES SANJINES IRIARTE PORTFOLIO</span>
        <ContactLinks showEmail />
      </div>
    </footer>
  )
}

export default Footer
