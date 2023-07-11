import { WorkItem, workItems } from "../constants/work";

export default function Work() {
  return (
    <>
      <h2 className="mb-3 text-2xl font-semibold">Work Experience</h2>
      {workItems.map((item: WorkItem, i: number) => (
        <div key={`work-item-${i}`} className={["group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30", i < workItems.length - 1 ? null : "mb-6"].join(" ")}>
          <h4>{item.label}</h4>
          <h6 className="text-sm opacity-70">{item.job_name}</h6>
          <p className="m-0 text-sm opacity-50">{item.description}</p>
        </div>
      ))}
    </>
  )
}