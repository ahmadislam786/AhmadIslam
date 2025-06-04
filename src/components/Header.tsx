import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 border-b border-cyan-500/10 backdrop-blur-lg
        ${
          isScrolled
            ? "bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 shadow-xl"
            : "bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60"
        }
      `}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 flex items-center justify-center animate-pulse-glow animate-float shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <span className="text-xl font-bold ai-gradient-text group-hover:underline underline-offset-4 transition-all">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 font-medium px-3 py-1 rounded-lg hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-blue-500/20 hover:text-emerald-400 transition-all duration-300 hover-lift hover-glow"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Resume_AhmadIslam.pdf"
              download
              className="btn btn-primary flex items-center space-x-2 shadow-md hover:shadow-lg hover-lift hover-glow"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass rounded-lg border border-cyan-500/20 shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-200 font-medium px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-blue-500/20 hover:text-emerald-400 transition-all duration-300 hover-lift hover-glow"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Resume_AhmadIslam.pdf"
                download
                className="btn btn-primary flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover-lift hover-glow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download size={18} />
                <span>Resume</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
