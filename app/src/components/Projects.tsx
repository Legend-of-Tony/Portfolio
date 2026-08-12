import type { Project } from '../data/projectTemplate'
import { ProjectCard } from './ProjectCard'

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-paper px-[clamp(22px,6vw,110px)] py-[130px] text-ink max-md:py-24" id="works">
      <header className="mb-20 grid grid-cols-[1fr_2fr_1fr] items-end gap-8 max-md:block">
        <p className="text-teal label-style">[ SELECTED WORK ]</p>
        <h2 className="text-[clamp(44px,6vw,92px)] leading-[.92] max-md:my-8 display-style">Experiments in<br />digital matter.</h2>
        <p className="max-w-[300px] text-[13px] leading-relaxed text-ink/65">A selection of worlds, objects, and interfaces built at the edge of art and technology.</p>
      </header>
      <div className="grid grid-cols-4 gap-5 border-t border-ink/25 pt-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
      </div>
    </section>
  )
}
