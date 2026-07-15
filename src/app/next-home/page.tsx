 'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { educationItems } from '../constants/education';
import { projectItems } from '../constants/projects';
import { skillItems } from '../constants/skills';
import { workItems } from '../constants/work';

export default function NextHomePage() {
  const sectionLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-30% 0px -45% 0px', threshold: [0.2, 0.5, 0.8] }
    );

    sectionLinks.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const jumpToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const highlights = [
    { label: 'Education entries', value: `${educationItems.length}` },
    { label: 'Work experiences', value: `${workItems.length}` },
    { label: 'Skills listed', value: `${skillItems.length}` },
    { label: 'Portfolio projects', value: `${projectItems.length}` },
  ];

  const topSkills = skillItems.slice(0, 8);
  const featuredProjects = projectItems.slice(0, 3);

  return (
    <main className={`${styles.page} scroll-smooth`}>
      <div className={styles.gridOverlay} />
      <div className={`${styles.aurora} ${styles.a1}`} />
      <div className={`${styles.aurora} ${styles.a2}`} />
      <div className={`${styles.aurora} ${styles.a3}`} />

      <nav className="fixed top-4 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-xl -translate-x-1/2 rounded-2xl border border-slate-500/60 bg-slate-900/70 p-2 shadow-2xl shadow-black/35 backdrop-blur-xl">
        <ul className="grid grid-cols-4 gap-1">
          {sectionLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => jumpToSection(item.id)}
                  className={[
                    'w-full rounded-xl px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] transition-all duration-300 sm:text-sm',
                    isActive
                      ? 'bg-cyan-300 text-slate-900 shadow-lg shadow-cyan-600/35'
                      : 'text-slate-200/90 hover:bg-slate-800/80 hover:text-cyan-200',
                  ].join(' ')}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-28 md:px-10 md:pt-32">
        <section id="hero" className="scroll-mt-24 grid items-center gap-14 md:grid-cols-2">
          <div className={`${styles.reveal} ${styles.delay1}`}>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-cyan-200">
              New Homepage Concept
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-5xl md:text-6xl">
              Joe Pris Calpito
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
              Software developer with a background spanning web development, game development, and
              engineering problem-solving. This modern homepage keeps your real portfolio content,
              re-framed with cleaner visuals and animation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                View Current Homepage
              </Link>
              <a
                href="#projects"
                className="rounded-lg border border-slate-500/60 bg-slate-800/50 px-5 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-cyan-300/70"
              >
                Jump to Projects
              </a>
            </div>
          </div>

          <div className={`${styles.reveal} ${styles.delay2}`}>
            <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur-xl">
              <div className={styles.pulseRing} />
              <p className="mb-3 text-xs uppercase tracking-[0.12em] text-slate-400">Live UI Preview</p>
              <div className="space-y-3 rounded-xl border border-slate-700/40 bg-slate-950/70 p-4">
                <div className="h-3 w-32 rounded-full bg-cyan-300/70" />
                <div className="h-2 w-full rounded-full bg-slate-700/80" />
                <div className="h-2 w-5/6 rounded-full bg-slate-700/80" />
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="h-14 rounded-lg bg-cyan-400/20" />
                  <div className="h-14 rounded-lg bg-fuchsia-400/20" />
                  <div className="h-14 rounded-lg bg-emerald-400/20" />
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300">
                Based on your existing homepage content: Education, Work Experience, Technical Skills,
                and Portfolio projects.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.reveal} ${styles.delay3} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-slate-700/50 bg-slate-900/55 p-5 backdrop-blur"
            >
              <p className="text-3xl font-bold text-cyan-200">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </article>
          ))}
        </section>

        <section id="work" className={`${styles.reveal} ${styles.delay4} scroll-mt-24`}>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Work Experience</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {workItems.slice(0, 4).map((item) => (
              <article
                key={`${item.label}-${item.job_name}`}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/55 p-5"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-cyan-200/80">{item.job_name}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className={`${styles.reveal} scroll-mt-24`}>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Technical Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {topSkills.map((skill) => (
              <div
                key={skill.label}
                className="rounded-full border border-slate-600/60 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
              >
                {skill.label}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className={`${styles.reveal} scroll-mt-24`}>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Featured Work</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-slate-700/50 bg-slate-900/55 p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-slate-900/80"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-cyan-200/80">{project.technology}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
                {project.repository ? (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-cyan-200 transition hover:text-cyan-100"
                  >
                    View Source
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
