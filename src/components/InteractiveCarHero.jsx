import { useEffect, useRef } from 'react'

function InteractiveCarHero() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const targetTimeRef = useRef(0)
  const currentTimeRef = useRef(0)
  const frameRef = useRef(null)
  const isReadyRef = useRef(false)
  const dragRef = useRef({ pointerId: null })
  const scrubberRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const hero = heroRef.current
    if (!video || !hero) return undefined
    let lastFrameTime = 0
    const frameTolerance = 1 / 60
    const endTime = () => Math.max(0, video.duration - frameTolerance)

    const revealAtEnd = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return
      currentTimeRef.current = endTime()
      targetTimeRef.current = endTime()
      video.currentTime = endTime()
      if (scrubberRef.current) scrubberRef.current.value = '1000'
      isReadyRef.current = true
    }

    const revealVisual = () => {
      if (isReadyRef.current) video.parentElement?.classList.add('is-ready')
    }

    const onLoadedData = () => {
      if (!isReadyRef.current) revealAtEnd()
      if (video.currentTime >= video.duration - 0.05) revealVisual()
    }

    const animate = (timestamp) => {
      const elapsed = lastFrameTime ? Math.min(timestamp - lastFrameTime, 50) : 16.67
      lastFrameTime = timestamp
      if (isReadyRef.current && Number.isFinite(video.duration)) {
        const delta = targetTimeRef.current - currentTimeRef.current
        // Time-based easing feels consistent across refresh rates.
        currentTimeRef.current += delta * (1 - Math.exp(-elapsed / 320))
        if (Math.abs(delta) < frameTolerance) currentTimeRef.current = targetTimeRef.current
        // Let the decoder finish before requesting another frame. Repeatedly
        // interrupting an active seek can prevent frames from being displayed.
        const settled = currentTimeRef.current === targetTimeRef.current
        const difference = Math.abs(video.currentTime - currentTimeRef.current)
        if (!video.seeking && difference > (settled ? 0.001 : frameTolerance)) {
          video.currentTime = currentTimeRef.current
        }
      }
      frameRef.current = requestAnimationFrame(animate)
    }

    const setTargetFromX = (x) => {
      if (!Number.isFinite(video.duration)) return
      const bounds = hero.getBoundingClientRect()
      const normalized = Math.min(1, Math.max(0, (x - bounds.left) / Math.max(1, bounds.width)))
      targetTimeRef.current = normalized * endTime()
      if (scrubberRef.current) scrubberRef.current.value = String(Math.round(normalized * 1000))
    }

    const onPointerMove = (event) => {
      if (!isReadyRef.current) return
      if (event.pointerType === 'mouse') {
        setTargetFromX(event.clientX)
      } else if (dragRef.current.pointerId === event.pointerId) {
        setTargetFromX(event.clientX)
      }
    }

    const onPointerDown = (event) => {
      // Keep the range control in charge of its own touch drag.
      if (event.target === scrubberRef.current) return
      if (isReadyRef.current && event.pointerType !== 'mouse' && event.isPrimary) {
        dragRef.current.pointerId = event.pointerId
        setTargetFromX(event.clientX)
        hero.setPointerCapture?.(event.pointerId)
      }
    }

    const onPointerUp = (event) => {
      if (dragRef.current.pointerId === event.pointerId) {
        dragRef.current.pointerId = null
      }
    }

    const onScrub = (event) => {
      if (!isReadyRef.current || !Number.isFinite(video.duration)) return
      const nextTime = (Number(event.currentTarget.value) / 1000) * endTime()
      // Seeking immediately keeps short mobile slider drags visibly responsive.
      targetTimeRef.current = nextTime
      currentTimeRef.current = nextTime
      if (!video.seeking) video.currentTime = nextTime
    }

    video.addEventListener('loadedmetadata', revealAtEnd)
    video.addEventListener('loadeddata', onLoadedData)
    video.addEventListener('seeked', revealVisual)
    hero.addEventListener('pointermove', onPointerMove, { passive: true })
    hero.addEventListener('pointerdown', onPointerDown)
    hero.addEventListener('pointerup', onPointerUp)
    hero.addEventListener('pointercancel', onPointerUp)
    hero.addEventListener('lostpointercapture', onPointerUp)
    scrubberRef.current?.addEventListener('input', onScrub)
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
      hero.removeEventListener('lostpointercapture', onPointerUp)
      scrubberRef.current?.removeEventListener('input', onScrub)
    }
  }, [])

  return (
    <section ref={heroRef} id="top" className="hero-shell relative isolate min-h-[100dvh] touch-pan-y overflow-hidden" aria-label="Interactive Nissan S15 hero">
      <div className="hero-video-wrap absolute inset-0 -z-10 bg-[#111]">
        <video ref={videoRef} className="hero-video h-full w-full object-cover" muted playsInline preload="auto" poster="/assets/nissan3.png" aria-label="Nissan S15 rotating through a studio shot">
          <source src="/assets/nissanVid.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-scrim absolute inset-0 -z-[5]" aria-hidden="true" />
      <div className="watermark-card" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-5 pb-7 pt-28 sm:px-8 lg:px-10 lg:pb-12">
        <div className="max-w-[600px]">
          <p className="hero-role eyebrow mb-4 text-[11px] font-bold tracking-[0.22em] text-white sm:mb-5 sm:text-[13px] sm:tracking-[0.3em]">Mechanical Engineering Student</p>
          <h1 className="hero-name silvia-script display-title text-[clamp(2.8rem,11vw,5.75rem)] leading-[0.76] tracking-[-0.06em] text-white">Ives<br />Sanjines<br />Iriarte</h1>
          <p className="mt-6 max-w-xs text-[10px] uppercase tracking-[0.22em] sm:mt-8 sm:text-xs sm:tracking-[0.3em] text-zinc-300">University of Central Florida<br />Orlando, Florida</p>
        </div>
        <div className="mt-12 border-t border-white/20 pt-4 sm:mt-16">
          <label className="hero-mobile-scrubber mb-5 block sm:hidden" htmlFor="car-scrubber">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-300">Swipe or slide to rotate</span>
            <input ref={scrubberRef} id="car-scrubber" className="block w-full" type="range" min="0" max="1000" defaultValue="1000" aria-label="Rotate Nissan studio view" />
          </label>
          <div className="flex items-end justify-between font-mono text-[10px] tracking-[0.16em] text-zinc-400 sm:text-[12px] sm:tracking-[0.2em]">
            <span className="hidden sm:inline">CAR ENTHUSIAST</span>
            <span className="sm:hidden">INTERACTIVE VIEW</span>
            <span className="hidden sm:inline">DESIGN / BUILD / TEST</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default InteractiveCarHero
