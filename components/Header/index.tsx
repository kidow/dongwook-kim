interface Props {
  title: string
  description: string
}

function Header({ title, description }: Props): React.ReactElement {
  return (
    <header>
      <h1 className="text-light-primary font-semibold">{title}</h1>
      <h2 className="text-light-secondary font-medium">{description}</h2>
    </header>
  )
}

export default Header
