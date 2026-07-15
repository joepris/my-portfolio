import { WorkItem, workItems } from "../../constants/work";

export default function Work(props: any) {
  return (
    <div {...props}>
      <h2 className="mb-6 px-1 text-2xl font-semibold sm:text-3xl">Work Experience</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {workItems.map((item: WorkItem, i: number) => (
          <div
            key={`work-item-${i}`}
            className="group rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h4 className="text-lg font-medium">{item.label}</h4>
            <h6 className="text-sm opacity-70">{item.job_name}</h6>
            <p className="m-0 mt-2 text-sm leading-relaxed opacity-50">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
