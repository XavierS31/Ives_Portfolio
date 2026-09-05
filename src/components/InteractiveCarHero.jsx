import { useEffect, useRef } from 'react'

function InteractiveCarHero() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const targetTimeRef = useRef(0)
  const currentTimeRef = useRef(0)
  const frameRef = useRef(null)
  const isReadyRef = useRef(false)
  const dragRef = useRef({ active: false, startX: 0, startTime: 0 })

  useEffect(() => {
    const video = videoRef.current
    const hero = heroRef.current
    if (!video || !hero) return undefined

    const revealAtEnd = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return
      currentTimeRef.current = video.duration
      targetTimeRef.current = video.duration
      video.currentTime = video.duration
      isReadyRef.current = true
    }

    const revealVisual = () => {
      if (isReadyRef.current) video.parentElement?.classList.add('is-ready')
    }

    const onLoadedData = () => {
      if (!isReadyRef.current) revealAtEnd()
      if (video.currentTime >= video.duration - 0.05) revealVisual()
    }

    const animate = () => {
      if (isReadyRef.current && Number.isFinite(video.duration)) {
        const delta = targetTimeRef.current - currentTimeRef.current
        currentTimeRef.current += delta * 0.12
        if (Math.abs(delta) < 0.001) currentTimeRef.current = targetTimeRef.current
        if (Math.abs(video.currentTime - currentTimeRef.current) > 0.001) {
          video.currentTime = currentTimeRef.current
        }
      }
      frameRef.current = requestAnimationFrame(animate)
    }

    const setTargetFromX = (x) => {
      if (!Number.isFinite(video.duration)) return
      const normalized = Math.min(1, Math.max(0, x / window.innerWidth))
      targetTimeRef.current = normalized * video.duration
    }

    const onPointerMove = (event) => {
      if (event.pointerType === 'mouse') {
        setTargetFromX(event.clientX)
      } else if (dragRef.current.active) {
        const travel = (event.clientX - dragRef.current.startX) / window.innerWidth
        targetTimeRef.current = Math.min(video.duration, Math.max(0, dragRef.current.startTime + travel * video.duration))
      }
    }

    const onPointerDown = (event) => {
      if (event.pointerType !== 'mouse') {
        dragRef.current = { active: true, startX: event.clientX, startTime: targetTimeRef.current }
        hero.setPointerCapture?.(event.pointerId)
      }
    }

    const onPointerUp = () => {
      dragRef.current.active = false
    }

    video.addEventListener('loadedmetadata', revealAtEnd)
    video.addEventListener('loadeddata', onLoadedData)
    video.addEventListener('seeked', revealVisual)
    hero.addEventListener('pointermove', onPointerMove, { passive: true })
    hero.addEventListener('pointerdown', onPointerDown)
    hero.addEventListener('pointerup', onPointerUp)
    hero.addEventListener('pointercancel', onPointerUp)
    frameRef.current = requestAnimationFrame(animate)

    if (video.readyState >= 1) revealAtEnd()

    return () => {
      cancelAnimationFrame(frameRef.current)
      video.removeEventListener('loadedmetadata', revealAtEnd)
      video.removeEventListener('loadeddata', onLoadedData)
      video.removeEventListener('seeked', revealVisual)
      hero.removeEventListener('pointermove', onPointerMove)
      hero.removeEventListener('pointerdown', onPointerDown)
      hero.removeEventListener('pointerup', onPointerUp)
      hero.removeEventListener('pointercancel', onPointerUp)
    }
  }, [])

  return (
    <section ref={heroRef} id="top" className="hero-shell relative isolate min-h-[100dvh] touch-pan-y overflow-hidden" aria-label="Interactive Nissan S15 hero">
      <div className="hero-video-wrap absolute inset-0 -z-10 bg-[#111]">
        <video ref={videoRef} className="h-full w-full object-cover object-center" muted playsInline preload="auto" poster="/assets/nissan3.png" aria-label="Nissan S15 rotating through a studio shot">
          <source src="/assets/nissanVid.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-scrim absolute inset-0 -z-[5]" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-6 pb-9 pt-24 sm:px-8 lg:px-10 lg:pb-12">
        <div className="max-w-[600px]">
          <p className="eyebrow mb-5 text-[10px] font-semibold tracking-[0.35em] text-zinc-300">Nissan Silvia</p>
          <h1 className="display-title text-[clamp(5.5rem,20vw,17rem)] leading-[0.76] tracking-[-0.09em] text-white">S15</h1>
          <p className="mt-8 max-w-xs text-xs uppercase tracking-[0.3em] text-zinc-300">Move to explore<br />1999 / 2002</p>
        </div>
        <div className="mt-16 flex items-end justify-between border-t border-white/20 pt-4 font-mono text-[9px] tracking-[0.2em] text-zinc-400">
          <span className="hidden sm:inline">CURSOR CONTROL</span>
          <span className="sm:hidden">DRAG TO EXPLORE</span>
          <span className="hidden sm:inline">REAR / SIDE / RESPONSE</span>
        </div>
      </div>
    </section>
  )
}

export default InteractiveCarHero
