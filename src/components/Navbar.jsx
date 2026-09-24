import React, { useState, useEffect } from 'react';
import { Menu, X, Wallet, ChevronRight, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'AI PLATFORM', href: '#ai-platform' },
    { name: 'ECOSYSTEM', href: '#ecosystem' },
    { name: 'FAQ', href: '#faq' },
    { name: 'PRESALE', href: '#presale' },
    { name: 'STAKING', href: '#staking' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link tracker
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#05030D]/90 backdrop-blur-xl border-b border-[#8B2CFF]/20 py-3 shadow-lg shadow-black/50'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/assets/expose-logo.png"
                alt="EXPOSE Logo"
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback visual if image fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-2 font-['Outfit'] font-extrabold text-2xl tracking-wider text-white">
                <span className="text-[#8B2CFF]">E</span>XPOSE
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 glass-panel px-5 py-2 rounded-full border border-[#8B2CFF]/20">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 rounded-full ${isActive
                    ? 'text-white bg-[#8B2CFF]/30 border border-[#B84CFF]/40 shadow-[0_0_12px_rgba(139,44,255,0.4)]'
                    : 'text-[#A8A5B8] hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Connect Wallet Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => alert("Wallet connection modal initialized.")}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider text-white bg-gradient-purple-btn border border-[#B84CFF]/40 shadow-[0_0_20px_rgba(139,44,255,0.35)] hover:shadow-[0_0_30px_rgba(184,76,255,0.6)] transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <Wallet className="w-4 h-4 text-purple-200" />
              <span>Connect Wallet</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => alert("Wallet connection modal initialized.")}
              className="sm:hidden p-2 rounded-lg bg-[#8B2CFF]/20 border border-[#8B2CFF]/40 text-purple-300"
              aria-label="Connect Wallet Mobile"
            >
              <Wallet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl glass-panel text-white hover:text-[#B84CFF] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[70px] left-4 right-4 z-50 glass-panel rounded-2xl border border-[#8B2CFF]/30 p-6 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-semibold tracking-wider text-gray-200 hover:text-white rounded-xl hover:bg-[#8B2CFF]/20 transition-all border border-transparent hover:border-[#8B2CFF]/30"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#B84CFF]" />
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-purple-500/20">
              <button
                onClick={() => { setMobileMenuOpen(false); alert("Wallet connection modal initialized."); }}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold tracking-wider text-white bg-gradient-purple-btn shadow-[0_0_20px_rgba(139,44,255,0.4)]"
              >
                <Wallet className="w-4 h-4" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
