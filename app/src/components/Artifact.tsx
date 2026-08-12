interface ArtifactProps {
  large?: boolean
}

export function Artifact({ large = false }: ArtifactProps) {
  return (
    <div className={`artifact ${large ? 'size-[clamp(220px,35vw,530px)]' : 'size-50'}`}>
      <i />
      <b />
      <em />
    </div>
  )
}
