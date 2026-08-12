interface ResumeButtonProps {
  href?: string
}

export function ResumeButton({ href = '/resume.pdf' }: ResumeButtonProps) {
  return (
    <a
      className="bg-gold px-[18px] py-[13px] text-ink hover:bg-coral max-md:px-3 max-md:py-2.5"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      Résumé ↗
    </a>
  )
}
