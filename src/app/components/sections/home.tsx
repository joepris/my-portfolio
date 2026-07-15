'use Client'

import { EducationItem, educationItems } from "../../constants/education";

export default function Home({
  onPortfolioLinkClick,
  onOtherPortfolioLinkClick,
  ...props
}: any) {
  return (
    <div {...props}>
      <h2 className="mb-3 px-5 text-2xl font-semibold">Education</h2>
      {educationItems.map((item: EducationItem, i: number) => (
        <div key={`education-item-${i}`} className={["group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30", i < educationItems.length - 1 ? null : "mb-6"].join(" ")}>
          <h4>{item.label}</h4>
          <h6 className="text-sm opacity-70">{item.grade}</h6>
          <p className="m-0 text-sm opacity-50">{item.description}</p>
        </div>
      ))}
      <div className="container">
        <div
        onClick={onPortfolioLinkClick}
          className="flex group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 items-center flex-col mt-12"
        >
          <h2 id='menu-item-2' className={`mb-3 text-2xl font-semibold`}>
            My Projects{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check out some Codes and Apps I have done
          </p>
        </div>
        <div
          onClick={onOtherPortfolioLinkClick}
          className="flex group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 items-center flex-col mt-12 cursor-pointer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            My Other Portfolio{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check out my other portfolio
          </p>
        </div>
        
      </div>
      
    </div>
  )
}
