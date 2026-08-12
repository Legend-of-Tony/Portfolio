import { projects } from '../data/projects'
import { projectToneClasses } from '../data/projectTemplate'
import type { Project } from '../data/projectTemplate'
import { Artifact } from './Artifact'
import { Footer } from './Footer'
import { Nav } from './Nav'

interface ProjectPageProps {
  project: Project
}

export function ProjectPage({ project }: ProjectPageProps) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length]

  return <main className="overflow-hidden bg-paper text-ink antialiased">
    <Nav />
    <header className={`relative flex min-h-[680px] h-[min(900px,100svh)] flex-col justify-between overflow-hidden px-[clamp(22px,6vw,110px)] pb-16 pt-[150px] text-paper ${projectToneClasses[project.tone]}`}>
      <div className="label-style z-10 flex justify-between"><span>{project.number} / {String(projects.length).padStart(2, '0')}</span><span>{project.type}</span></div>
      <h1 className="display-style z-10 my-auto max-w-[90%] text-[clamp(76px,13vw,210px)] font-semibold leading-[.78]">{project.title}</h1>
      <div className="absolute right-[6vw] top-1/2 size-[clamp(260px,36vw,560px)] -translate-y-[42%] rotate-12 text-gold opacity-80"><Artifact large /></div>
      <a className="label-style z-10 w-fit border-b pb-2" href="/#works">← All work</a>
    </header>
    <section className="grid grid-cols-[1fr_3fr] gap-12 px-[clamp(22px,6vw,110px)] py-[130px] max-md:grid-cols-1 max-md:py-20">
      <p className="label-style text-teal">[ PROJECT OVERVIEW ]</p>
      <h2 className="display-style m-0 text-[clamp(42px,5.5vw,86px)] leading-[.95]">{project.description}</h2>
      <div className="col-start-2 mt-14 grid grid-cols-3 gap-6 border-t border-ink/25 pt-6 max-md:col-start-1 max-md:grid-cols-1">{[['Year', project.year], ['Role', project.role], ['Tools', project.tools]].map(([key, value]) => <div className="flex flex-col gap-2.5" key={key}><span className="label-style text-teal">{key}</span><strong className="text-[13px] font-medium">{value}</strong></div>)}</div>
    </section>
    <section className="px-[clamp(22px,6vw,110px)] pb-[130px]">
      <div className={`relative grid min-h-[430px] h-[70vw] max-h-[850px] place-items-center overflow-hidden ${projectToneClasses[project.tone]}`}><Artifact large /><span className="label-style absolute bottom-6 left-6">01 / FORM STUDY</span></div>
      <div className="mt-6 grid grid-cols-2 gap-6 max-md:gap-3"><div className="h-[35vw] max-h-[490px] bg-violet" /><div className="h-[35vw] max-h-[490px] bg-teal" /></div>
    </section>
    <section className="grid grid-cols-[1fr_3fr] gap-12 bg-ink px-[clamp(22px,12vw,220px)] py-[120px] text-paper max-md:grid-cols-1 max-md:py-20"><p className="label-style text-coral">[ THE IDEA ]</p><p className="font-display text-[clamp(30px,4vw,60px)] leading-[1.15] tracking-[-.035em]">{project.statement}</p></section>
    <a className="grid grid-cols-[1fr_auto] items-end bg-coral px-[clamp(22px,6vw,110px)] py-[90px] text-ink" href={`/projects/${next.slug}`}><span className="label-style col-span-2 mb-8">Next project / {next.number}</span><strong className="display-style text-[clamp(50px,8vw,120px)] leading-[.9]">{next.title}</strong><b className="text-4xl">↗</b></a>
    <Footer />
  </main>
}
