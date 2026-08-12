import { ResumeButton } from './ResumeButton'

export function Nav() {
  return <nav className="absolute z-20 flex h-[88px] w-full items-center justify-between border-b border-white/20 px-[clamp(22px,4vw,68px)] max-md:h-[72px] max-md:px-4">
    <a className="font-display text-[clamp(15px,1.4vw,20px)] font-bold tracking-[.14em]" href="/#top">ASTROLYGON</a>
    <div className="flex items-center gap-[clamp(12px,3vw,44px)] font-mono text-xs uppercase tracking-[.08em]"><a className="border-b border-transparent py-3 hover:border-gold" href="/#works">Works</a><a className="border-b border-transparent py-3 hover:border-gold" href="/#about">About</a><ResumeButton /></div>
  </nav>
}
