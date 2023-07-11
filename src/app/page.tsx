'use client'

import { useRef, forwardRef } from 'react';
import { MenuItem, menuItems } from './constants/menu'
import Education from './education.tsx/page';
import Work from './work/page';
import Skills from './skills/page';
import Contact from './contactLink/page';
import PortfolioLink from './portfolioLink/page';

export default function Home() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const menuRef = useRef<HTMLDivElement>();
  const scrollToSelector = (id: string) => {
    const ref = sectionRefs.current.find((ref: any) => ref.id === id);
    if (ref && menuRef.current) {
      const { top, height } = menuRef.current.getBoundingClientRect();
      const offset = top + height;
      const targetTop = ref.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    }
  }

  const addInputRef = (ref: HTMLInputElement | null) => {
    if (ref) {
      sectionRefs.current.push(ref);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8">
      <div className="max-w-5xl w-full sm:static">
        <div ref={(ref: any) => menuRef.current = ref} className="fixed right-0 top-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 mb-6 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800 z-40 overflow-x-auto">
          <ul className="flex">
            {menuItems.map((item: MenuItem, i: number) => (
              <li key={`menu-item-${i}`} className={["px-5", i < menuItems.length - 1 ? "border-r-2 border-white" : null].join(" ")}>
                <button onClick={() => scrollToSelector(item.to || "")} className="hover:text-blue-500 hover:dark:border-neutral-700 hover:dark:text-blue-500">{item.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 text-center lg:grid-cols-1">
          <section ref={(ref: any) => addInputRef(ref)} id='menu-item-0'>
            <Education />
          </section>

          <section ref={(ref: any) => addInputRef(ref)} id='menu-item-1'>
            <Work />
          </section>
          
          <section ref={(ref: any) => addInputRef(ref)} id='menu-item-3'>
            <Skills />
          </section>     

          <section ref={(ref: any) => addInputRef(ref)} id='menu-item-2'>
            <PortfolioLink />
          </section>

          <section ref={(ref: any) => addInputRef(ref)} id='menu-item-4'>
            <Contact />
          </section> 

          <footer>

          </footer>
        </div>
      </div>
    </main>
  )
}
