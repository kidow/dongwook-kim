interface Props {
  title: string
  description: string
}

function Header({ title, description }: Props): React.ReactElement {
  return (
    <header className="mb-20">
      <h1 className="font-medium text-light-primary">{title}</h1>
      <h2 className="font-medium text-light-secondary">{description}</h2>
    </header>
  )
}

export default Header
