import { useState } from 'react';
import { NavLink } from 'react-router';
import Menu from "/assets/navbar/menu.svg";
import Ellipse from "/assets/navbar/ellipse.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Work', path: '/' },
    { name: 'Templates', path: '/templates' },
    { name: 'About', path: '/about' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#000000]">
      <div className="max-w-300 mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="">
          <img src="/assets/navbar/logo.svg" alt="Logo" className="w-3 h-3 md:w-11 md:h-11" />
        </div>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8 text-[16px]">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
            className={({ isActive }) => 
                `relative text-base font-display flex flex-col items-center transition-opacity hover:opacity-100 ${
                  isActive ? 'opacity-100 font-medium' : 'opacity-60 font-normal'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <img 
                      src={Ellipse} 
                      alt="" 
                      className="w-2 h-2 absolute -bottom-3" 
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-linear-to-r from-[#FFFFFF] to-[#B3B3B3] text-black px-5 py-2 rounded-full text-base font-display font-medium">
            Get in touch
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? 
            <p className='w-6 h-6 text-white'>X</p>
            : 
            <img src={Menu} alt="Menu" className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slides up from bottom */}
      <div className={`fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}>
        <div 
          className={`absolute bottom-0 left-0 w-full bg-[#0d0d0d] rounded-t-[32px] p-8 transition-transform duration-500 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag Handle Decoration */}
          <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-8" />
          
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-[clamp(16px,5vw,18px)] font-medium opacity-80"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="h-px bg-white/10 my-4" />
            <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold">
              Book a consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
