import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import Menu from "/assets/navbar/menu.svg";
import Cancel from "/assets/navbar/cancel.svg";
import Ellipse from "/assets/navbar/ellipse.svg";
import { useModal } from "../context/ModalContext";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { hash } = useLocation();
  const { openModal } = useModal();

  // --- DRAG TO CLOSE STATE ---
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartY = useRef(0);

  // Track the active section in state, defaulting to the URL hash or '#work'
  const [activeSection, setActiveSection] = useState(hash || "#work");

  const navLinks = [
    { name: "Work", path: "#work" },
    { name: "Templates", path: "#templates" },
    { name: "About", path: "#about" },
    { name: "FAQs", path: "#faqs" },
  ];

  // --- LOCK BACKGROUND SCROLL ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // --- THE SCROLL HANDLER ---
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ): void => {
    e.preventDefault();
    setActiveSection(path);

    const targetId = path.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Force the browser to smoothly scroll to the section
      element.scrollIntoView({ behavior: "smooth" });
      // Update the URL so users can copy/paste it
      window.history.pushState(null, "", path);
    }
  };

  // --- INTERSECTION OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newHash = `#${entry.target.id}`;
            setActiveSection(newHash);
            window.history.replaceState(null, "", newHash);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    navLinks.forEach((link) => {
      const id = link.path.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#000000]">
      <div className="max-w-280 2xl:max-w-300 mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="">
          <a href="/">
          <img
            src="/assets/navbar/logo.svg"
            alt="Logo"
            className="w-10 h-10 md:w-11 md:h-11"
          />
          </a>
        </div>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8 text-[16px]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className={`relative text-sm 2xl:text-base font-display flex flex-col items-center transition-opacity hover:opacity-100 cursor-pointer ${
                  isActive
                    ? "opacity-100 font-medium"
                    : "opacity-60 font-normal"
                }`}
              >
                {link.name}
                {isActive && (
                  <img
                    src={Ellipse}
                    alt=""
                    className="w-2 h-2 absolute -bottom-3"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 bg-linear-to-r from-[#FFFFFF] to-[#B3B3B3] text-black px-2 md:px-5 py-2 rounded-full text-xs md:text-sm 2xl:text-base font-display font-medium cursor-pointer">
            Get in touch
            <img
              src="./assets/navbar/arrow-black.svg"
              alt="Arrow Right"
              className="w-4 h-4 md:w-6 md:h-6"
            />
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <img src={Cancel} alt="cancel-btn" className="w-6 h-6" />
            ) : (
              <img src={Menu} alt="menu-btn" className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slides up from bottom */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      >
        <div
        // Removed Tailwind's translate/transition classes here, we handle it completely in the style prop now
          className="absolute bottom-0 left-0 w-full bg-[#0A0A0A] rounded-t-2xl p-4"
          style={{
            transform: isOpen ? `translateY(${dragY}px)` : "translateY(100%)",
            // If dragging, remove transition so it sticks to finger. If released, snap it nicely.
            transition: isDragging ? "none" : "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
          }}
          onClick={(e) => e.stopPropagation()}
          
          // --- FLUID SWIPE LOGIC ---
          onTouchStart={(e) => {
            touchStartY.current = e.touches[0].clientY;
            setIsDragging(true);
          }}
          onTouchMove={(e) => {
            const currentY = e.touches[0].clientY;
            const diff = currentY - touchStartY.current;
            // Only allow dragging downwards
            if (diff > 0) {
              setDragY(diff);
            } else {
              setDragY(0);
            }
          }}
          onTouchEnd={() => {
            setIsDragging(false);
            // If they dragged down more than 100 pixels, consider it a close action
            if (dragY > 100) {
              setIsOpen(false);
            }
            // Always reset drag pixel count on release so it snaps back to 0
            setDragY(0);
          }}
        >
          {/* menu handle */}
          <div className="w-12 h-1 bg-[#2A2A2A] rounded-full mx-auto mb-8" />
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleScroll(e, link.path);
                  }}
                  className={`text-xl font-medium font-display ${isActive ? "opacity-100 font-medium" : "opacity-60 font-normal"}`}
                >
                  {link.name}
                  {isActive && (
                  <img
                    src={Ellipse}
                    alt=""
                    className="w-2 h-2 absolute -bottom-3"
                  />
                )}
                </Link>
              );
            })}
            <div className="mt-4 space-y-1">
              <p className="font-display font-normal text-sm">Connect</p>
              <p className="text-[#B3B3B3] font-display font-normal text-sm">Email</p>
              <p className="text-[#B3B3B3] font-display font-normal text-sm">X/Twiter</p>
              <p className="text-[#B3B3B3] font-display font-normal text-sm">Telegram</p>
            </div>
            <button onClick={openModal} className="mt-4 cursor-pointer flex justify-center items-center gap-3 bg-white text-black px-3 py-3 rounded-full text-sm md:text-base font-display font-medium hover:bg-gray-200 transition-colors">
              <span className="w-2 h-2 rounded-full animate-colorblink"></span>
              Book a consultation
            </button>

            <div className="flex items-center justify-between my-4 pt-6 border-t border-dashed border-[#1E1E1E]">
              <span>
                <p className="font-display font-regular text-xs text-[#B3B3B3]">
                  &copy; {new Date().getFullYear()} Layouts
                </p>
                <p className="font-display font-regular text-xs text-[#B3B3B3]">
                  All rights reserved
                </p>
              </span>

              <span>
                <p className="font-display font-regular text-xs text-[#B3B3B3]">
                  Created with &hearts; in Web3
                </p>
                <p className="text-end font-display font-regular text-xs text-[#B3B3B3]">
                  Designed on Figma
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
