'use client'

import { useRef, useState, useEffect } from 'react';
import { MenuItem, menuItems } from './constants/menu'
import Education from './components/sections/home';
import Work from './components/sections/work';
import Skills from './components/sections/skills';
import Portfolio from './components/sections/portfolio';

export default function Home() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const menuRef = useRef<HTMLDivElement | null>(null);
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

  // Wide enough for large screens without stretching edge-to-edge.
  const sectionStandard = "w-full max-w-6xl mx-auto";

  return (
    <main className={`dark transition-colors duration-1000 flex min-h-0 flex-1 flex-col ${colors.background || 'bg-slate-800'}`.trim()}>
      <nav
        ref={(ref: any) => { menuRef.current = ref; }}
        className="sticky top-0 z-10 w-full shrink-0 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800"
      >
        <ul className="flex mb-3 mt-4 justify-center">
          {menuItems.map((item: MenuItem, i: number) => (
            <li key={`menu-item-${i}`} className={["px-5", i < menuItems.length - 1 ? "border-r-2 border-white" : null].join(" ")}>
              <button onClick={() => setSelected(item.to || "")} className="text-xs sm:text-normal hover:text-yellow-500 hover:dark:border-neutral-700 hover:dark:text-yellow-500">
                {item.label.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-full flex-1 px-4 sm:px-8 lg:px-12 py-8 overflow-x-hidden">
        {selected === 'menu-item-0' && (
          <section ref={(ref: any) => addRef(ref)} id="menu-item-0" className="w-full">
            <Education
              onPortfolioLinkClick={() => setSelected('menu-item-3')}
              onOtherPortfolioLinkClick={() => {
                window.location.href = 'https://joepris.github.io/webportfolio/';
              }}
              className={sectionStandard}
            />
          </section>
        )}

        {selected === 'menu-item-1' && (
          <section ref={(ref: any) => addRef(ref)} id="menu-item-1" className="w-full">
            <Work className={sectionStandard} />
          </section>
        )}

        {selected === 'menu-item-2' && (
          <section ref={(ref: any) => addRef(ref)} id="menu-item-2" className="w-full">
            <Skills className={sectionStandard} />
          </section>
        )}

        {selected === 'menu-item-3' && (
          <section ref={(ref: any) => addRef(ref)} id="menu-item-3" className="w-full">
            <Portfolio className={sectionStandard} />
          </section>
        )}
      </div>
    </main>
  )
}
