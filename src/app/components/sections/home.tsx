'use Client'

import { EducationItem, educationItems } from "../../constants/education";

export default function Home({
  onPortfolioLinkClick,
  onOtherPortfolioLinkClick,
  ...props
}: any) {
  return (
    <div {...props}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16 lg:items-start">
        <div>
          <h2 className="mb-4 px-1 text-2xl font-semibold sm:text-3xl">Education</h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
            {educationItems.map((item: EducationItem, i: number) => (
              <div
                key={`education-item-${i}`}
                className="group rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <h4 className="text-lg font-medium">{item.label}</h4>
                <h6 className="text-sm opacity-70">{item.grade}</h6>
                <p className="m-0 mt-1 text-sm leading-relaxed opacity-50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="flex flex-col gap-3 lg:sticky lg:top-24">
          <p className="px-1 text-sm opacity-60 lg:mb-2">
            Explore my work and other sites I have built.
          </p>
          <button
            type="button"
            onClick={onPortfolioLinkClick}
            className="group flex w-full flex-col items-start rounded-lg border border-white/10 bg-white/5 px-5 py-5 text-left transition-colors hover:border-neutral-500 hover:bg-neutral-800/40"
          >
            <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
              My Projects{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 text-sm opacity-50">
              Sample codes and apps I have done
            </p>
          </button>
          <button
            type="button"
            onClick={onOtherPortfolioLinkClick}
            className="group flex w-full flex-col items-start rounded-lg border border-white/10 bg-white/5 px-5 py-5 text-left transition-colors hover:border-neutral-500 hover:bg-neutral-800/40"
          >
            <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
              My Other Portfolio{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 text-sm opacity-50">
              Check out my other portfolio
            </p>
          </button>
        </aside>
      </div>
    </div>
  )
}
