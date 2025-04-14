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
          <div className={`${isOpen ? '' : 'nav-item-1'} px-3 py-2 bg-neutral-800/25 text-xs font-light rounded-sm transition-transform duration-500`}>
            <span>HOME</span>
          </div>
          <div className={`${isOpen ? '' : 'nav-item-2'} px-3 py-2 bg-neutral-800/25 text-xs font-light rounded-sm transition-transform duration-500`}>
            <span>SKILLS</span>
          </div>
          <div className={`${isOpen ? '' : 'nav-item-3'} px-3 py-2 bg-neutral-800/25 text-xs font-light rounded-sm transition-transform duration-500`}>
            <span>CONTACT</span>
          </div>
        </div>
        <button
          className="nav-button flex justify-center items-center w-8 h-8 bg-neutral-300 rounded-sm text-neutral-950"
          onClick={() => setIsOpen(!isOpen)}
          type="submit">
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>
    </>
  );
}
