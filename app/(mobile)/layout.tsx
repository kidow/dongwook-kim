export default function Layout({ children }: ReactProps): React.ReactElement {
  return (
    <main className="dark:bg-dark dark:text-neutral-100">
      <article className="mx-auto min-h-screen max-w-screen-sm px-6 py-12 sm:px-0 sm:shadow-xl dark:shadow-none">
        {children}
      </article>
    </main>
  )
}
