'use client'

import { skillCategories, skillItems } from "../../constants/skills";

export default function Skills(props: any) {
  return (
    <div {...props}>
      <h2 id="menu-item-3" className="mb-6 px-1 text-2xl font-semibold sm:text-3xl">
        Technical Skills
      </h2>
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <section key={category}>
            <h3 className="mb-3 text-xl font-semibold">{category}</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {skillItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-neutral-200/70 bg-white/60 px-4 py-3 shadow-sm transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900/40 dark:hover:border-neutral-500"
                  >
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {item.label}
                    </h4>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
