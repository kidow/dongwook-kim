import { Box, Header } from 'components'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function Page(): React.ReactElement {
  return (
    <>
      <Header title="Dongwook Kim" description="Front-end Developer" />

      <section>
        <h3 className="font-medium text-light-primary">저는</h3>
        <p className="mt-5 text-light-secondary">
          온라인 파충류 플랫폼{' '}
          <Link
            className="text-olive-500 hover:underline"
            href="https://www.feedle.me"
            target="_blank"
          >
            feedle.me
          </Link>
          를 개발하고 있습니다. 어떻게 하면 빠르고 이쁜 웹사이트를 만들 수 있을
          지 항상 고민합니다.
        </p>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-light-primary">사이드</h3>
          <Link href="/projects">
            <ArrowRightIcon className="size-6 text-light-secondary" />
          </Link>
        </div>

        <ul className="mt-5 grid grid-cols-2 gap-4">
          {Array.from({ length: 2 }).map((_, key) => (
            <li key={key}>
              <Link href="#">
                <Box>
                  <div className="flex h-40 flex-col justify-end">
                    <div className="font-medium text-light-primary">
                      Project 1
                    </div>
                    <div className="text-light-secondary group-hover:hidden">
                      description 1
                    </div>
                  </div>
                </Box>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-light-primary">블로그</h3>
          <Link href="/blog">
            <ArrowRightIcon className="size-6 text-light-secondary" />
          </Link>
        </div>

        <ul className="mt-5 space-y-5">
          {Array.from({ length: 3 }).map((_, key) => (
            <li key={key}>
              <Link href={`/blog/1`}>
                <div className="-mx-3 rounded-md p-3 duration-150 hover:bg-neutral-900">
                  <div className="font-medium text-light-primary">Title 1</div>
                  <div className="text-light-secondary">Description 1</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mt-16 font-medium text-light-primary">소셜</h3>
        <p className="mt-5 text-light-secondary">
          <Link
            href="https://github.com/kidow"
            target="_blank"
            className="text-olive-500 hover:underline"
          >
            Github
          </Link>
          에 오시면 제 코드를 보실 수 있습니다.
        </p>
      </section>
    </>
  )
}
