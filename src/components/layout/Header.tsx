import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/careers/", label: "Careers" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur-md">
      <div className="header-inner mx-auto max-w-[calc(100vw-40px)] flex h-16 items-center justify-between px-6">
        <Link
          to="/"
          className="brand-lockup inline-flex items-center gap-3 text-decoration-none"
          aria-label="Gradmint Technologies home"
        >
          <img
            className="brand-logo h-auto w-auto h-[34px]"
            src="/assets/logo.jpg"
            alt="Gradmint Technologies logo"
          />
          <span className="brand-name flex flex-col items-start justify-center gap-[2px] m-0">
            <span className="brand-gradmint block text-[19px] font-800 tracking-[-0.04em] leading-none text-[#005A8F]">
              gradmint
            </span>
            <span className="brand-technologies block text-[8px] font-700 tracking-[0.18em] uppercase leading-none text-[#44D4B4]">
              technologies
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-[26px] text-sm font-600 text-[#687184]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-[#687184] hover:text-[#0078C0] transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact/"
            className="navcta px-4 py-1.5 bg-[#44D4B4] text-white rounded-[6px] text-[12px] font-700 hover:bg-[#158563] transition-colors duration-150"
          >
            Let&rsquo;s talk &rarr;
          </Link>
        </nav>

        <button
          className="menu md:hidden border border-line bg-white text-[#303747] px-3 py-1 rounded-[6px] text-xs font-600 hover:border-[#0078C0]"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <nav
          className="fixed top-16 left-0 right-0 z-45 flex flex-col border-b border-line-soft bg-white p-6 transform transition-transform duration-220 ease-in-out opacity-100 visibility-visible"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-0 py-3 text-sm border-b border-line-soft hover:text-[#0078C0]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact/"
            className="mt-2 block text-center text-sm bg-transparent text-[#0078C0] text-center"
            onClick={() => setIsOpen(false)}
          >
            Let&rsquo;s talk &rarr;
          </Link>
        </nav>
      )}
    </header>
  );
}