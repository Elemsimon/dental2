"use client";

import { useState } from "react";
import { Shield, Phone, Menu, X } from "lucide-react";

interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
  }
  
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/service" },
    { label: "Contact Us", href: "/contact" },
  ];

const Header = () => {
    const [activeLink, setActiveLink] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <header className="bg-[#f5f5fb] border-b border-[#ebebf5] sticky top-0 z-50 font-inter">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 h-[72px] flex items-center justify-between">
 
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 no-underline shrink-0">
          <Shield size={30} className="text-indigo-600 sm:w-[34px] sm:h-[34px]" strokeWidth={1.8} />
          <span className="text-xl sm:text-2xl font-extrabold text-[#0f1240] tracking-[-0.01em]">
            Prime<span className="text-[#6b6ef5] font-normal italic">care</span>
          </span>
        </a>
 
        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setActiveLink(item.label)}
              onMouseLeave={() => setActiveLink(null)}
              className={`flex items-center gap-1 text-base font-bold whitespace-nowrap transition-colors ${
                activeLink === item.label ? "text-indigo-600" : "text-gray-700"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
 
        {/* DESKTOP PHONE CTA */}
        <div className="hidden lg:flex items-end gap-3.5 shrink-0">
          <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
            <Phone size={17} className="text-white" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-gray-500 text-nase">Need Help ?</span>
            <a href="tel:+01789987645" className="text-[#0f1240] font-bold text-base lg:text-[1rem] tracking-[-0.01em]">
              (+01) 789 987 645
            </a>
          </div>
        </div>
 
        {/* MOBILE: phone icon + hamburger */}
        <div className="flex items-center gap-3 sm:hidden">
          <a href="tel:+01789987645" className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
            <Phone size={16} className="text-white" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-[#0f1240]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
 
        {/* TABLET: hamburger only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hidden sm:flex lg:hidden w-10 h-10 rounded-lg border border-gray-200 bg-white items-center justify-center text-[#0f1240]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
 
      </div>
 
      {/* MOBILE / TABLET DROPDOWN MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-[#f5f5fb] border-t border-[#ebebf5] px-5 sm:px-8 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600 font-bold text-base py-2.5 border-b border-[#ebebf5] last:border-0 transition-colors"
            >
              {item.label}
            </a>
          ))}
 
          {/* Phone CTA inside mobile menu */}
          <div className="flex items-center gap-3 pt-3 lg:hidden">
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
              <Phone size={15} className="text-white" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-gray-500 text-base">Need Help ?</span>
              <a href="tel:+01789987645" className="text-[#0f1240] font-bold text-base tracking-[-0.01em]">
                (+01) 789 987 645
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
    )
}

export default Header