/* eslint-disable @next/next/no-img-element */
import { ProjectItem, projectItems } from "@/app/constants/projects";
import { useEffect, useState } from "react";

export default function Portfolio({
  className = '',
  ...props
}: any) {
  const [selected, setSelected] = useState<any>(projectItems[0].title);
  const [selectedImage, setSelectedImage] = useState<any>();
  const handleImageClicked = (e: any, i: number, j: number) => {
    e.stopPropagation();
    const image = projectItems[i].images[j] ?? null;
    setSelectedImage(image);
  }

  const handleOutsideClicked = async (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    await setSelectedImage((prev: any) => null);
  }

  useEffect(() => {
    console.log(selectedImage)
  }, [selectedImage])

  return (
    <div className={`w-full h-full ${className}`.trim()} {...props}>
      <div className="inline-flex justify-center gap-x-3 w-full mx-auto shadow-lg shadow-slate-800 pb-4">
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
        {/* lightbox */}
        {selectedImage && (
          <div
            key={selectedImage}
            className={['flex flex-wrap w-1/3 transition-opacity duration-500 pb-20', selectedImage ? 'fixed bg-black left-0 top-0 w-screen h-screen z-[200] flex justify-center items-center' : 'hidden'].join(' ')}
            onClick={handleOutsideClicked}>
            <img
              className={['transition-all duration-200', selectedImage ? 'px-2 w-3/4 h-auto' : ''].join(' ')}
              alt={selectedImage}
              src={`/images/${selectedImage}`} />
          </div>
        )}
        {projectItems.map((item: ProjectItem, i: number) => {
          return (
            <div key={`project-content-${i}`} className={['fixed w-full h-full left-1/2 -translate-x-1/2 sm:w-2/3 transition-opacity duration-1000 overflow-y-auto pb-60', selected === item.title ? 'opacity-100 z-40' : `opacity-0`].join(' ')}>
              <h1 className="font-light pt-5 px-5 text-center text-xl">
                {item.title}
              </h1>
              <h4 className="p-1 px-5 text-sm text-center">Technologies used: {item.technology}</h4>
              <h6 className="flex px-5 text-center text-sm w-auto justify-center opacity-70">{item.description} <br /><br />(click images to enlarge)</h6>

              {item.images && item.images.length > 0 && (
                <div className={`flex flex-wrap p-5 justify-self-center justify-center`}>
                  {item.images.map((image: string, j: number) => (
                    <div
                      key={`project-item-${i}-image-${j}`}
                      className={['flex flex-wrap w-1/3 p-1 md:w-1/4 '].join(' ')}>
                      <img
                        className="w-full"
                        src={`/images/${image}`}
                        alt={`${item.title} image ${j + 1}`}
                        onClick={(e: any) => handleImageClicked(e, i, j)} />
                    </div>
                  ))}
                </div>

              )}
              <a href={[item.repository != undefined ? item.repository : "#"].join()} target="blank" rel="noopener noreferrer" className="text-stone-100">
                <i className="!flex !flex-row !justify-center fab fa-github px-5 p-2">github repository</i>
              </a>
            </div>

          )
        })}
      </div>
    </div>
  )
}