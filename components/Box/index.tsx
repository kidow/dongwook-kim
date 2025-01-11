function Box({ children }: ReactProps): React.ReactElement {
  return (
    <div className="rounded-xl border px-4 py-6 dark:border-neutral-800 dark:bg-black">
      {children}
    </div>
  )
}

export default Box
