export type ProjectTone = 'coral' | 'teal' | 'gold'

export interface Project {
  number: string
  type: string
  title: string
  slug: string
  description: string
  tone: ProjectTone
  year: string
  role: string
  tools: string
  statement: string
}

export const projectToneClasses: Record<ProjectTone, string> = {
  coral: 'bg-coral',
  teal: 'bg-teal',
  gold: 'bg-gold text-ink',
}

/**
 * Type-checks a project while preserving its exact values.
 * Copy an entry in projects.ts and fill in every field to add a new card/page.
 */
export function defineProject(project: Project): Project {
  return project
}
