'use client'

import { SkillItem, skillItems } from "../../constants/skills";
import { useRef, useState } from "react";

export default function Skills(props: any) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4; // Number of slides to show at a time

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide + 1) % Math.ceil(skillItems.length / slidesToShow)
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? Math.ceil(skillItems.length / slidesToShow) - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative" {...props}>
      <h2 id="menu-item-3" className="mb-3 text-2xl font-semibold text-center">
        Technical Skills
      </h2>
      <div className="relative mt-16">
        <div className="flex overflow-hidden">
          {skillItems.map((item: SkillItem, i: number) => {
            const slideIndex = Math.floor(i / slidesToShow);
            const transformClass = slideIndex === currentSlide ? "translate-x-0" : "translate-x-full";
            const itemIndex = i % slidesToShow;
            const positionClass =
              slideIndex === currentSlide
                ? itemIndex === 0
                  ? "bottom-0 left-1/4 -translate-x-1/4 opacity-100"
                  : itemIndex === 1
                  ? "top-0 right-1/4 translate-x-1/4 opacity-100"
                  : itemIndex === 2
                  ? "top-0 left-1/4 -translate-x-1/4 opacity-100"
                  : "bottom-0 right-1/4 translate-x-1/4 opacity-100"
                : itemIndex === 0
                  ? "bottom-0 left-1/4 -translate-x-1/4 opacity-0"
                  : itemIndex === 1
                  ? "top-0 right-1/4 translate-x-1/4 opacity-0"
                  : itemIndex === 2
                  ? "top-0 left-1/4 -translate-x-1/4 opacity-0"
                  : "bottom-0 right-1/4 translate-x-1/4 opacity-0";

            return (
              <div
                key={`skill-item-${i}`}
                className={`transform ${transformClass} transition-all duration-500 absolute ${positionClass}`}
              >
                <div className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                  <h4>{item.label}</h4>
                  <p className="m-0 text-sm opacity-50">{item.duration}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 mx-2 px-2 py-1 z-40 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 mx-2 px-2 py-1 z-40 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}