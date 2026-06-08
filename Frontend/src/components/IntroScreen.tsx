import { useState, useEffect, useRef } from 'react'

interface IntroScreenProps {
  onFinish: () => void
}

const LOADING_LABELS = [
  'Initializing systems…',
  'Loading modules…',
  'Verifying access…',
  'Starting engine…',
]

export default function IntroScreen({ onFinish }: IntroScreenProps) {
  const [loading, setLoading] = useState(false)
  const [labelIdx, setLabelIdx] = useState(0)
  const [accessGranted, setAccessGranted] = useState(false)
  const finishedRef = useRef(false)

  useEffect(() => {
    if (!loading || accessGranted) return
    const t = setInterval(() => {
      setLabelIdx(i => (i + 1) % LOADING_LABELS.length)
    }, 420)
    return () => clearInterval(t)
  }, [loading, accessGranted])

  const finish = () => {
    if (finishedRef.current) return
    finishedRef.current = true
    setAccessGranted(true)
    setTimeout(onFinish, 900)
  }

  const handleEnter = async () => {
    setLoading(true)
    try {
      const audio = new Audio('/sounds/startup.mp3')
      audio.volume = 0.35
      await audio.play()
      audio.onended = finish
    } catch {
      // audio blocked or missing
    }
    setTimeout(finish, 1600)
  }

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0a0a0f] overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none sew-grid" />

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px pointer-events-none sew-scanline" />

      {/* Corner brackets */}
      <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-amber-400/40" />
      <div className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-amber-400/40" />
      <div className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-amber-400/40" />
      <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-amber-400/40" />

      {!loading ? (
        /* ── IDLE STATE ── */
        <div className="flex flex-col items-center">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-7 font-mono text-[11px] tracking-[0.3em] text-amber-400/50 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 sew-blink" />
            System Ready
          </div>

          {/* Gears */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl text-amber-400/25 inline-block sew-spin">⚙</span>
            <div className="w-9 h-px bg-amber-400/15" />
            <span className="text-[26px] text-amber-400/25 inline-block sew-spin-rev">⚙</span>
            <div className="w-9 h-px bg-amber-400/15" />
            <span className="text-xl text-amber-400/25 inline-block sew-spin">⚙</span>
          </div>

          {/* Title — clamp() is the only valid inline style here */}
          <h1
            className="font-bold text-amber-400 text-center leading-tight tracking-wide mb-1.5 sew-title"
            style={{ fontSize: 'clamp(32px, 6vw, 52px)' }}
          >
            Shreya Engineering<br />Works
          </h1>

          <p className="font-mono text-xs text-[#f0ece4]/30 tracking-[0.15em] uppercase mb-11">
            Precision Engineering · Est. 2025
          </p>

          {/* CTA — clipPath has no Tailwind utility */}
          <button
            onClick={handleEnter}
            className="font-mono text-[13px] tracking-[0.25em] uppercase text-[#0a0a0f] bg-amber-400 px-11 py-3.5 border-0 cursor-pointer transition-all duration-200 hover:bg-amber-300 active:translate-y-px"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
          >
            ↳ Enter Website
          </button>

          <p className="font-mono text-[10px] tracking-[0.2em] text-amber-400/20 uppercase mt-5">
            Authorized personnel only
          </p>
        </div>

      ) : (
        /* ── LOADING STATE ── */
        <div className="flex flex-col items-center">

          {/* Ring spinner */}
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border border-amber-400/10" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-400 sew-spin" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400/40 sew-blink" />
          </div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-amber-400/10 mt-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-amber-400 sew-progress" />
          </div>

          {/* Status label */}
          <p className={`font-mono text-[11px] tracking-[0.3em] uppercase mt-3.5 transition-colors duration-300 ${
            accessGranted ? 'text-green-400/80' : 'text-amber-400/60'
          }`}>
            {accessGranted ? 'Access granted ✓' : LOADING_LABELS[labelIdx]}
          </p>
        </div>
      )}

      
    </div>
  )
}