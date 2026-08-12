import resumePdf from '../assets/resume/Antony Angoco - Resume - 2026.pdf'

interface ResumeButtonProps {
  href?: string
}

export function ResumeButton({ href = resumePdf }: ResumeButtonProps) {
  return (
    <a
      className="bg-gold px-4.5 py-3.25 text-ink hover:bg-coral max-md:px-3 max-md:py-2.5"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      Résumé ↗
    </a>
  )
}
