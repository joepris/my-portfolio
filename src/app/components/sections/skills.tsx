'use client'

import { SkillItem, skillItems } from "../../constants/skills";

export default function Skills(props: any) {
  return (
    <div {...props}>
      <h2 id="menu-item-3" className="mb-3 text-2xl font-semibold text-center">
        Technical Skills
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillItems.map((item: SkillItem, i: number) => (
          <div
            key={`skill-item-${i}`}
            className="rounded-lg border border-neutral-200/70 bg-white/60 px-4 py-3 shadow-sm transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900/40 dark:hover:border-neutral-500"
          >
            <h4 className="font-medium text-neutral-900 dark:text-neutral-100">{item.label}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}