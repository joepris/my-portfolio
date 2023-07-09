import { MenuItem, menuItems } from './constants/menu'
import { EducationItem, educationItems } from './constants/education'
import { WorkItem, workItems } from './constants/work'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed right-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 mb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <ul className="inline-flex ">
            { menuItems.map((item: MenuItem, i: number) => {
              return (
                <li key={`menu-item-${i}`} className={["px-5", i < menuItems.length -1 ? "border-r-2 border-white" : null].join(" ")}>
                  <a href={`#menu-item-${i}`} className=' hover:text-blue-500 hover:dark:border-neutral-700 hover:dark:text-blue-500'>{item.label}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="w-1/3 mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
    
          <h2 id='menu-item-0' className={`mb-3 text-2xl font-semibold`}>
            Education
          </h2>
          {educationItems.map((item: EducationItem, i: number) => {
            return (
              <div key={`education-item-${i}`} className={["w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30", i < educationItems.length-1 ? null: "mb-6"].join(" ")}>
                <h4>{item.label}</h4>
                <p className={`m-0 text-sm opacity-50`}>
                  {item.description}
                </p>
                </div>
            )
          })}
        
          <h2 id='menu-item-1' className={`mb-3 text-2xl font-semibold`}>
            Work Experience
          </h2>
          {workItems.map((item: WorkItem, i: number) => {
            return (
              <div key={`work-item-${i}`} className={["group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 min-w-full", i < workItems.length-1 ? null: "mb-6"].join(" ")}>
                <h4>{item.label}</h4>
                <h6 className='text-sm opacity-70'>{item.job_name}</h6>
                <p className={`m-0 text-sm opacity-50`}>
                  {item.description}
                </p>
                </div>
            )
          })}

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 id='menu-item-3'className={`mb-3 text-2xl font-semibold`}>
            Technical Skills{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Here is a list of my skills and my level of confidence for each entry
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 id='menu-item-4' className={`mb-3 text-2xl font-semibold`}>
            Contact {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Here are some ways to contact me
          </p>
        </a>
        <footer>
          
        </footer>
      </div>
    </main>
  )
}
