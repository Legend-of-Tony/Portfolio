import { projectToneClasses } from '../data/projectTemplate'
import type { Project } from '../data/projectTemplate'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <a className={`group relative block aspect-4/5 overflow-hidden outline-none ${projectToneClasses[project.tone]}`} href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        <span className="label-style absolute left-4 top-4 z-20 transition-colors group-hover:text-paper group-focus-visible:text-paper">
          {project.number}
        </span>
        <img className="size-full object-cover transition duration-500 group-hover:scale-105 group-focus-visible:scale-105" src={project.image} alt="" />
        <div className="absolute inset-0 z-10 bg-black/10 transition-colors duration-300 group-hover:bg-black/75 group-focus-visible:bg-black/75" />
        <div className="absolute inset-0 z-20 flex translate-y-4 flex-col justify-end p-5 text-paper opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <div className="mb-auto flex justify-end">
            <span className="label-style">
              {project.year}
            </span>
          </div>
          <p className="label-style mb-3 text-coral">
            {project.type}
          </p>
          <h3 className="display-style text-[clamp(30px,2.7vw,48px)] leading-[.92]">
            {project.title}
          </h3>
          <p className="mt-4 line-clamp-3 text-[13px] leading-relaxed text-paper/75">
            {project.description}
          </p>
          <span className="label-style mt-7 border-t border-paper/40 pt-4">
            View project ↗
          </span>
        </div>
      </a>
    </article>
  )
}
