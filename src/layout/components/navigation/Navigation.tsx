import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-end items-center w-96 h-full bg-amber-9000 overflow-hidden">
        <div className={`nav-drawer flex justify-between items-center overflow-hidden transition-all duration-500 delay-200 ${isOpen ? 'gap-2 mr-2' : 'gap-0 mr-0'}`}>
          <div className={`${isOpen ? '' : 'nav-item-1'} px-4 py-4 bg-neutral-900 text-xs font-light rounded-sm transition-all duration-500 hover:bg-violet-700`}>
            <h2>HOME</h2>
          </div>
          <div className={`${isOpen ? '' : 'nav-item-2'} px-4 py-4 bg-neutral-900 text-xs font-light rounded-sm transition-all duration-500 hover:bg-violet-700`}>
            <h2>SKILLS</h2>
          </div>
          <div className={`${isOpen ? '' : 'nav-item-3'} px-4 py-4 bg-neutral-900 text-xs font-light rounded-sm transition-all duration-500 hover:bg-violet-700`}>
            <h2>CONTACT</h2>
          </div>
        </div>
        <button
          className="nav-button flex justify-center items-center w-12 h-12 bg-neutral-300 rounded-sm text-neutral-950 transition-all duration-500 hover:bg-neutral-50"
          onClick={() => setIsOpen(!isOpen)}
          type="submit">
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>
    </>
  );
}
