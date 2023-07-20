import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <div className="!fixed !w-full !sm:rounded-none py-4 right-0 bottom-0 block justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pl-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800 dark:from-inherit lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800 overflow-x-auto !z-10">
      <div className="w-full flex flex-wrap">
        <div className="w-full justify-center gap-x-4 inline-flex text-xs">
          <a href="https://github.com/joepris/" target="_blank" rel="noopener noreferrer" className="text-stone-100">
            <i className="fab fa-github"> github</i>
          </a>
          <a href="https://www.linkedin.com/in/joe-pris-calpito-6103b1231/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            <i className="fab fa-linkedin"> linkedin</i>
          </a>
        </div>
        <div className="w-full flex justify-center mt-2 text-xs font-light">
          Joe Pris Calpito &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}


