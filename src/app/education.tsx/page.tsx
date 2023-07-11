import { EducationItem, educationItems } from "../constants/education";

export default function Education() {
  return (
    <>
      <h2 className="mb-3 text-2xl font-semibold">Education</h2>
      {educationItems.map((item: EducationItem, i: number) => (
        <div key={`education-item-${i}`} className={["group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30", i < educationItems.length - 1 ? null : "mb-6"].join(" ")}>
          <h4>{item.label}</h4>
          <h6 className="text-sm opacity-70">{item.grade}</h6>
          <p className="m-0 text-sm opacity-50">{item.description}</p>
        </div>
      ))}
    </>
  )
}