import { useEffect, useState } from 'react'

function CaseStudyCard({ item, children }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <article className="case-study-card engineering-card h-full min-w-0 overflow-hidden">
        <img src={item.image} alt={item.imageAlt} loading="lazy" className="case-study-lead-image w-full" style={{ '--image-position': item.imagePosition ?? '50% 50%' }} />
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">{item.date}</p>
          <h3 className="entry-title mt-4">
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer" className="transition-colors hover:text-redline focus-visible:outline focus-visible:outline-2 focus-visible:outline-redline">
                {item.name}
              </a>
            ) : item.name}
          </h3>
          <p className="mt-3 text-sm text-redline">{item.role}</p>
          {children}
          <button type="button" onClick={() => setIsOpen(true)} className="case-study-button mt-auto pt-8">
            See more
          </button>
        </div>
      </article>

      {isOpen && (
        <div className="case-study-modal" role="dialog" aria-modal="true" aria-label={`${item.name} image gallery`}>
          <div className="case-study-backdrop" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div className="case-study-panel">
            <div className="flex items-start justify-between gap-6 border-b border-white/15 pb-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-redline">Case study</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">{item.name}</h3>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="case-study-close" aria-label="Close gallery">Close</button>
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {item.gallery.map((image, index) => (
                <img key={image} src={image} alt={`${item.name} gallery image ${index + 1}`} className="w-full rounded-xl border border-white/10 bg-zinc-900 object-cover" />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CaseStudyCard