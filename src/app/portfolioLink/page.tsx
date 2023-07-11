export default function PortfolioLink() {
  return (
    <a
      href="/portfolio"
      className="flex group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 items-center flex-col mt-12"
      target="_self"
      rel="noopener noreferrer"
    >
      <h2 id='menu-item-2' className={`mb-3 text-2xl font-semibold`}>
        My Portfolio{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Check out some sample Codes and Apps I have done
      </p>
    </a>
  )
}