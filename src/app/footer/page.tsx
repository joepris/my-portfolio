import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
    <footer>
      <div className="!fixed !w-full !sm:rounded-none p-1 right-0 bottom-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pl-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800 dark:from-inherit lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800 overflow-x-auto">
        <ul className="flex">
          <li>©JPCC(2023) </li>
          <li className="ml-2">
            <a href="https://www.linkedin.com/in/joe-pris-calpito-6103b1231/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              <i className="fab fa-linkedin">linkedin</i>
            </a>
          </li> 
          <li className="ml-2">
            <a href="https://github.com/joepris/" target="_blank" rel="noopener noreferrer" className="text-stone-100">
              <i className="fab fa-github">github</i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}


