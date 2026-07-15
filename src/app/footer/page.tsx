import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="w-full shrink-0 border-t border-zinc-700 bg-zinc-800 py-4">
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
    </footer>
  )
}
