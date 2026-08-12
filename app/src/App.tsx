import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { ProjectPage } from './components/ProjectPage'
import { Projects } from './components/Projects'
import { projects } from './data/projects'

export default function App() {
  const slug = window.location.pathname.split('/projects/')[1]?.replace(/\/$/, '')
  const selected = projects.find((project) => project.slug === slug)

  if (selected) return <ProjectPage project={selected} />

  return (
    <main className="overflow-hidden bg-ink text-paper antialiased">
      <Nav />
      <section className="grid min-h-200 h-svh grid-cols-[56%_44%] max-md:block max-md:h-auto" id="top">
        <div className="z-10 px-[6vw] pb-22.5 pt-46.25 max-md:px-6 max-md:pb-20 max-md:pt-36">
          <p className="flex max-w-162.5 justify-between text-white/60 label-style">
            <span>
              ● &nbsp; Independent digital artist
            </span>
            <span className="max-md:hidden">
              Somewhere in orbit
            </span>
          </p>
          <h1 className="my-24 text-[clamp(60px,7.4vw,128px)] font-semibold leading-[.84] max-md:my-16 display-style">
            Strange forms.<br />
            <em className="not-italic text-coral">
              New worlds.
            </em>
          </h1>
          <p className="max-w-117.5 text-[15px] leading-[1.65] text-white/70">
            Astrolygon is a 3D design brand created by{' '}
            <strong className="font-semibold text-paper">
              Antony Angoco
            </strong>
            , focused on character modeling, semi-realistic textures, and immersive environments.
          </p>
          <a className="mt-14 flex max-w-117.5 justify-between border-t border-white/20 py-4 label-style" href="#works">
            Explore selected work
            <span className="text-gold">
              ↓
            </span>
          </a>
        </div>
        <div className="heroArt relative overflow-hidden border-l border-white/20 bg-teal max-md:h-130">
          <div className="orbit one" />
          <div className="orbit two" />
          <div className="singularity" />
          <b className="absolute left-[14%] top-[20%] z-10 text-3xl text-gold">
            ✦
          </b>
          <b className="absolute bottom-[16%] right-[12%] z-10 text-coral">
            ✦
          </b>
          <p className="absolute bottom-8 left-8 z-10 label-style">
            OBJECT 00<br />EVENT HORIZON
          </p>
        </div>
      </section>

      <Projects projects={projects} />

      <section className="grid grid-cols-[1fr_3fr] gap-12 bg-teal px-[clamp(22px,6vw,110px)] py-35 max-md:grid-cols-1 max-md:py-24" id="about">
        <div>
          <p className="text-gold label-style">
            [ ABOUT THE STUDIO ]
          </p>
          <div className="planet mt-56 max-md:hidden" />
        </div>
        <div>
          <h2 className="text-[clamp(44px,6vw,92px)] leading-[.92] display-style">
            Built from curiosity.<br />
            <em className="not-italic text-gold">
              Kept in the unknown.
            </em>
          </h2>
          <div className="my-20 grid grid-cols-2 gap-16 border-t border-white/30 pt-7 text-[15px] leading-relaxed max-md:grid-cols-1 max-md:gap-6">
            <p>
              Astrolygon is Antony Angoco’s personal laboratory for 3D art, digital spaces, and ideas that feel just outside our reality.
            </p>
            <p>
              The practice is evolving through character studies, semi-realistic materials, environment design, and spatial websites.
            </p>
          </div>
          <a className="flex justify-between border-b pb-4 label-style" href="mailto:hello@astrolygon.com">
            Have a strange idea?
            <span className="text-gold">
              Let’s talk ↗
            </span>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
