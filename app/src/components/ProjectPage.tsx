import { projects } from '../data/projects'
import { projectToneClasses } from '../data/projectTemplate'
import type { Project } from '../data/projectTemplate'
import { Footer } from './Footer'
import { Nav } from './Nav'

interface ProjectPageProps {
  project: Project
}

export function ProjectPage({ project }: ProjectPageProps) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <main className="overflow-hidden bg-paper text-ink antialiased">
      <Nav />
      <header className={`relative flex min-h-170 h-[min(900px,100svh)] flex-col justify-between overflow-hidden px-[clamp(22px,6vw,110px)] pb-16 pt-37.5 text-paper ${projectToneClasses[project.tone]}`}>
        <img className="absolute inset-0 size-full object-cover" src={project.image} alt="" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/80" />
        <div className="label-style z-10 flex justify-between">
          <span>
            {project.number} / {String(projects.length).padStart(2, '0')}
          </span>
          <span>
            {project.type}
          </span>
        </div>
        <h1 className="display-style z-10 my-auto max-w-[90%] text-[clamp(64px,11vw,180px)] font-semibold leading-[.82] drop-shadow-lg">
          {project.title}
        </h1>
        <a className="label-style z-10 w-fit border-b pb-2" href="/#works">
          ← All work
        </a>
      </header>

      <section className="grid grid-cols-[1fr_3fr] gap-12 px-[clamp(22px,6vw,110px)] py-32.5 max-md:grid-cols-1 max-md:py-20">
        <p className="label-style text-teal">
          [ PROJECT OVERVIEW ]
        </p>
        <h2 className="display-style m-0 text-[clamp(42px,5.5vw,86px)] leading-[.95]">
          {project.description}
        </h2>
        <div className="col-start-2 mt-14 grid grid-cols-3 gap-6 border-t border-ink/25 pt-6 max-md:col-start-1 max-md:grid-cols-1">
          {[
            ['Year', project.year],
            ['Role', project.role],
            ['Tools', project.tools],
          ].map(([key, value]) => (
            <div className="flex flex-col gap-2.5" key={key}>
              <span className="label-style text-teal">
                {key}
              </span>
              <strong className="text-[13px] font-medium">
                {value}
              </strong>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[clamp(22px,6vw,110px)] pb-32.5">
        <figure className="relative m-0 overflow-hidden bg-ink py-12">
          <img className="mx-auto block max-h-[calc(75svh-6rem)] max-w-full object-contain" src={project.image} alt={project.imageAlt} />
          <figcaption className="label-style absolute bottom-0 left-0 px-6 py-5 text-paper">
            01 / FINAL RENDER
          </figcaption>
        </figure>
      </section>

      <section className="grid grid-cols-[1fr_3fr] gap-12 bg-ink px-[clamp(22px,12vw,220px)] py-30 text-paper max-md:grid-cols-1 max-md:py-20">
        <p className="label-style text-coral">
          [ THE IDEA ]
        </p>
        <p className="font-display text-[clamp(30px,4vw,60px)] leading-[1.15] tracking-[-.035em]">
          {project.statement}
        </p>
      </section>

      <section className="grid grid-cols-[1fr_3fr] gap-12 bg-paper px-[clamp(22px,12vw,220px)] py-30 text-ink max-md:grid-cols-1 max-md:py-20">
        <p className="label-style text-teal">
          [ THE BREAKDOWN ]
        </p>
        <p className="max-w-225 text-[clamp(20px,2.4vw,36px)] leading-[1.45] tracking-[-.02em]">
          {project.breakdown}
        </p>
      </section>

      <a className="grid grid-cols-[1fr_auto] items-end bg-coral px-[clamp(22px,6vw,110px)] py-22.5 text-ink" href={`/projects/${next.slug}`}>
        <span className="label-style col-span-2 mb-8">
          Next project / {next.number}
        </span>
        <strong className="display-style text-[clamp(50px,8vw,120px)] leading-[.9]">
          {next.title}
        </strong>
        <b className="text-4xl">
          ↗
        </b>
      </a>
      <Footer />
    </main>
  )
}
