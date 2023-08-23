'use client'

import { useRef, forwardRef, useState, useEffect } from 'react';
import { MenuItem, menuItems } from './constants/menu'
import Education from './components/sections/home';
import Work from './components/sections/work';
import Skills from './components/sections/skills';
import Footer from './footer/page';
import Portfolio from './components/sections/portfolio';

export default function Home() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const menuRef = useRef<HTMLDivElement>();
  const [selected, setSelected] = useState<any>('menu-item-0');

  const [colors, setColors] = useState<any>({});

  const addRef = (ref: HTMLInputElement | null) => {
    if (ref) {
      sectionRefs.current.push(ref);
    }
  };

  useEffect(() => {
    if (selected) {
      setColors((prev: any) => {
        let bgColor;
        switch (selected) {
          case 'menu-item-1':
            bgColor = 'bg-cyan-800';
            break;
          case 'menu-item-2':
            bgColor = 'bg-emerald-700';
            break;
          default:
            bgColor = 'bg-slate-800';
            break;
        }

        return {
          ...prev,
          background: bgColor
        }
      })
    }
  }, [selected])

  const sectionClassName = "transition-all duration-1000 fixed w-full h-full left-0 overflow-y-auto pb-40 sm:justify-center sm:flex sm:items-center";
  const sectionStandard = "w-full sm:w-2/3 md:w-1/2 sm:mx-auto ";

  return (
    <main className={`transition-colors duration-1000 flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 ${colors.background || ''}`.trim()}>
      <div className="max-w-5xl w-full sm:static">
        <div ref={(ref: any) => menuRef.current = ref} className="fixed block right-0 top-0 w-full justify-between sm:justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800 z-1 overflow-x-auto">
          <ul className="flex mb-3 mt-4 justify-center">
            {menuItems.map((item: MenuItem, i: number) => (
              <li key={`menu-item-${i}`} className={["px-5", i < menuItems.length - 1 ? "border-r-2 border-white" : null].join(" ")}>
                <button onClick={() => setSelected(item.to || "")} className="text-xs sm:text-normal hover:text-yellow-500 hover:dark:border-neutral-700 hover:dark:text-yellow-500">{item.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className={`relative mt-12 sm:mt-8`}>
          <section ref={(ref: any) => addRef(ref)} id='menu-item-0' className={[sectionClassName, selected === 'menu-item-0' ? 'opacity-100' : 'opacity-0 -translate-x-full'].join(' ')}>
            <Education onPortfolioLinkClick={() => setSelected('menu-item-3')} className={sectionStandard} />
          </section>

          <section ref={(ref: any) => addRef(ref)} id='menu-item-1' className={[sectionClassName, selected === 'menu-item-1' ? 'opacity-100' : 'opacity-0 translate-x-full'].join(' ')}>
            <Work className={sectionStandard} />
          </section>

          <section ref={(ref: any) => addRef(ref)} id='menu-item-2' className={[sectionClassName, selected === 'menu-item-2' ? 'opacity-100' : 'opacity-0 -translate-x-full'].join(' ')}>
            <Skills className={sectionStandard} />
          </section>

          <section ref={(ref: any) => addRef(ref)} id='menu-item-3' className={[sectionClassName, selected === 'menu-item-3' ? 'opacity-100' : 'opacity-0 translate-x-full'].join(' ')}>
            <Portfolio className="w-full sm:w-3/4 sm:mx-auto" />
          </section>

        </div>
      </div>
    </main>
  )
}
