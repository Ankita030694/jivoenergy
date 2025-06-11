'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if the current path matches the link
  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when window is resized beyond mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 transition-all duration-300 bg-gradient-to-r from-[#0A5C35] via-[#0D7A4A] to-[#0A5C35] backdrop-blur-sm border-b border-[#4ADE80]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Link href="/" className="relative block transition-transform duration-300 hover:scale-105">
              <Image
                src="/translogo.png"
                alt="JIVO ENERGY"
                width={200}
                height={100}
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'JIVO ENERGY' },
                { href: '/projects', label: 'Projects' },
                { href: '/esg', label: 'ESG' },
                { href: '/csr', label: 'CSR' },
                { href: '/media', label: 'Media' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/careers', label: 'Careers' }
              ].map(({ href, label }) => (
                <Link 
                  key={href}
                  href={href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive(href) 
                      ? 'text-[#4ADE80]' 
                      : 'text-[#E2E8F0] hover:text-[#4ADE80]'
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  <span className={`absolute inset-0 rounded-lg transition-all duration-200 ${
                    isActive(href)
                      ? 'bg-[#4ADE80]/10'
                      : 'bg-transparent group-hover:bg-[#4ADE80]/5'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/contact')
                  ? 'text-white bg-[#4ADE80] shadow-lg shadow-[#4ADE80]/20'
                  : 'text-[#4ADE80] border-2 border-[#4ADE80] hover:bg-[#4ADE80]/10 hover:shadow-lg hover:shadow-[#4ADE80]/10'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden relative z-50 p-2 rounded-lg hover:bg-[#4ADE80]/10 transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex items-center justify-center`}>
              <FaTimes size={24} className="text-[#4ADE80]" />
            </div>
            <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
              <FaBars size={24} className="text-[#4ADE80]" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0A5C35]/95 backdrop-blur-md transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="flex flex-col space-y-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'JIVO ENERGY' },
              { href: '/projects', label: 'Projects' },
              { href: '/esg', label: 'ESG' },
              { href: '/csr', label: 'CSR' },
              { href: '/media', label: 'Media' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/careers', label: 'Careers' },
              { href: '/contact', label: 'Contact Us' }
            ].map(({ href, label }) => (
              <Link 
                key={href}
                href={href}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(href)
                    ? 'text-[#4ADE80] bg-[#4ADE80]/10'
                    : 'text-[#E2E8F0] hover:text-[#4ADE80] hover:bg-[#4ADE80]/5'
                }`}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 