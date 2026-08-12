export function Footer() {
  return (
    <footer className="grid grid-cols-[2fr_1fr_1fr] gap-8 bg-ink px-[clamp(22px,6vw,110px)] pb-9 pt-17.5 text-paper max-md:grid-cols-1">
      <strong className="font-display text-[clamp(22px,3vw,40px)] font-bold tracking-[.14em]">
        ASTROLYGON
      </strong>
      <p className="mt-3 font-mono text-[11px] text-white/60">
        Art for the next dimension.
      </p>
      <div className="flex flex-col gap-3.5 font-mono text-[11px] uppercase">
        <a className="hover:text-gold" href="https://instagram.com">
          Instagram ↗
        </a>
        <a className="hover:text-gold" href="https://x.com">
          X ↗
        </a>
        <a className="hover:text-gold" href="https://linkedin.com">
          LinkedIn ↗
        </a>
      </div>
    </footer>
  )
}
