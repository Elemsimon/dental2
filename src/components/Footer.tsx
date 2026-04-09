import { Shield } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Services", href: "#" },
      { label: "Appointment", href: "#" },
    ],
  },
  {
    heading: "Socials",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    heading: "Our Services",
    links: [
      { label: "General Dentistry", href: "#" },
      { label: "Cosmetic Dentistry", href: "#" },
      { label: "Restorative Dentistry", href: "#" },
      { label: "Routine Cleanings And Exams", href: "#" },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { label: "Term & Condition", href: "#" },
  { label: "Support", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const Footer = () => {
    return (
      <footer className="relative footer overflow-hidden bg-linear-to-b from-[#0a0e2e] to-[#080c28] font-inter">
      
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 py-16 sm:py-20 lg:py-24 pb-12 sm:pb-14 lg:pb-[56px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-10 sm:gap-12 lg:gap-[60px] items-start">
      
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
      
            <div className="flex items-center gap-2.5 mb-6">
              <Shield size={34} className="text-indigo-500 lg:w-10 lg:h-10" strokeWidth={1.8} />
              <span className="text-2xl lg:text-3xl font-extrabold text-white tracking-[-0.01em]">
                Prime<span className="text-[#6b6ef5] font-normal italic">care</span>
              </span>
            </div>
      
            <p className="text-[#8b93b8] text-sm sm:text-base leading-[1.7] mb-7 max-w-[480px] lg:max-w-[600px]">
              Lorem ipsum is a placeholder text commonly used to demonstrate
              the visual form of a document
            </p>
      
            <div className="flex flex-col gap-2">
              <a href="mailto:support@domain.com" className="text-white font-semibold text-sm sm:text-base">
                support@domain.com
              </a>
              <a href="tel:+0789345601" className="text-white font-semibold text-sm sm:text-base">
                (+0)789345601
              </a>
            </div>
      
          </div>
      
          {/* LINK COLUMNS */}
          {columns.map((col) => (
            <div key={col.heading}>
      
              <h3 className="text-white font-bold text-lg sm:text-xl mb-5 sm:mb-6">
                {col.heading}
              </h3>
      
              <ul className="flex flex-col gap-3 sm:gap-4">
                {col.links.map((link) => (
                  <li key={link.label} className="list-none">
                    <a
                      href={link.href}
                      className="text-[#8b93b8] text-sm sm:text-base flex items-center gap-2.5 hover:text-white transition-colors"
                    >
                      <span className="w-[6px] h-[6px] rounded-full bg-[#5b52e8] inline-block shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
      
            </div>
          ))}
      
        </div>
      
        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 py-7 sm:py-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-0">
      
          <p className="text-[#8b93b8] text-sm sm:text-base text-center sm:text-left">
            Copyright © 2026 All Rights Reserved.
          </p>
      
          <div className="flex flex-wrap justify-center sm:justify-end gap-5 sm:gap-9">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#8b93b8] text-sm sm:text-base hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
      
        </div>
      
      </footer>
    )
}

export default Footer