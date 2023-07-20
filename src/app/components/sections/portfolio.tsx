/* eslint-disable @next/next/no-img-element */
import { ProjectItem, projectItems } from "@/app/constants/projects";
import { useState } from "react";

export default function Portfolio({
  className = '',
  ...props
}: any) {
  const [selected, setSelected] = useState<any>(projectItems[0].title);
  const [selectedImage, setSelectedImage] = useState<any>();
  const handleImageClicked = (e: any, i: number, j: number) => {
    e.stopPropagation();
    console.log('selected', i, j);
    setSelectedImage(`project-item-${i}-image-${j}`)
  }

  return (
    <div className={`w-full h-full overflow-y-auto ${className}`.trim()} {...props}>
      <div className="inline-flex justify-center gap-x-3 w-full mx-auto">
        {projectItems.map((item: ProjectItem, i: number) => {
          return (
            <div key={`project-item-${i}`} className="">
              <button 
                className="rounded-full border-slate-200 border-2 w-8 h-8 text-xs"
                onClick={() => setSelected(item.title)}>
                {i + 1}
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        {projectItems.map((item: ProjectItem, i: number) => {
          return (
            <div key={`project-content-${i}`} className={['fixed w-full h-full sm:w-2/3 transition-opacity duration-1000', selected === item.title ? 'opacity-100' : `opacity-0 left - 0 bottom-0 w-0 h-0 ${i % 2 === 0 ? '-translate-x-full' : 'translate-x-full'}`].join(' ')}>
              <h1 className="font-light pt-5 pl-5 text-center text-xl">
                {item.title}
              </h1>
              <h4 className="p-1 pl-5">Technologies used: {item.technology}</h4>
              <h6 className="flex pl-5 text-center text-sm w-auto justify-center opacity-70">{item.description} <br /><br />(click images to enlarge)</h6>
              
              {item.images && item.images.length > 0 && (
                <div className={`flex flex-wrap p-5`}>
                  {item.images.map((image: string, j: number) => (
                    <div 
                      key={`project-item-${i}-image-${j}`}
                      className={['flex flex-wrap w-1/3 transition-transform duration-500', selectedImage === `project-item-${i}-image-${j}` ? 'fixed bg-black/40 left-0 top-0 w-screen h-screen z-50 flex justify-center items-center': ''].join(' ')}
                      onClick={() => setSelectedImage(null)}>
                      <img 
                        className={['transition-all duration-200', selectedImage === `project-item-${i}-image-${j}` ? 'px-2 w-3/4 h-auto': ''].join(' ')}
                        width={500}
                        height={500}
                        src={`/images/${image}`}
                        alt={`${item.title} image ${j + 1}`}
                        onClick={(e: any) => handleImageClicked(e, i, j)} />
                    </div>
                  ))}
                </div>
                
              )}<a href={[item.repository != undefined ? item.repository : "#"].join()} target="blank" rel="noopener noreferrer" className="text-stone-100">
              <i className="!flex !flex-row !justify-center fab fa-github pl-5 p-2">github repository</i>
            </a>
            </div>
            
          )
        })}
      </div>
    </div>
  )
}