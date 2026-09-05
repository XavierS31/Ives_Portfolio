function DesignSection() {
  return (
    <section id="design" className="relative min-h-[82dvh] overflow-hidden border-t border-white/10">
      <img src="/assets/nissan1.png" alt="Nissan Silvia S15 front three-quarter design" className="absolute inset-0 h-full w-full object-cover object-center opacity-45 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[82dvh] max-w-7xl items-end px-6 py-20 md:px-10 lg:py-28">
        <h2 className="display-title max-w-3xl text-6xl sm:text-8xl lg:text-[9rem]">Form<br /><span className="text-zinc-500">follows</span><br />motion.</h2>
      </div>
    </section>
  )
}

export default DesignSection
