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
    <nav className="fixed top-0 w-full z-40 transition-all duration-300 bg-black/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo1.png"
                alt="JIVO ENERGY"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden relative z-50 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex items-center justify-center`}>
              <FaTimes size={24} className="text-white" />
            </div>
            <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
              <FaBars size={24} className="text-white" />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/about') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              JIVO ENERGY
            </Link>
            <Link 
              href="/projects" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/projects') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/esg" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/esg') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              ESG
            </Link>
            <Link 
              href="/csr" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/csr') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              CSR
            </Link>
            <Link 
              href="/media" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/media') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Media
            </Link>
            <Link 
              href="/gallery" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/gallery') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Gallery
            </Link>
            <Link 
              href="/careers" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/careers') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/contact') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="flex flex-col space-y-1">
            <Link 
              href="/" 
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/about') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMobileMenu}
            >
              JIVO ENERGY
            </Link>
            <Link 
              href="/projects" 
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/projects') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link 
              href="/esg" 
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/esg') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMobileMenu}
            >
              ESG
            </Link>
            <Link 
              href="/csr" 
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/csr') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMobileMenu}
            >
              CSR
            </Link>
            <Link 
              href="/media" 
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/media') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMobileMenu}
            >
              Media
            </Link>
            <Link 
              href="/gallery" 
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/gallery') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
            <Link 
              href="/careers" 
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/careers') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMobileMenu}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/contact') ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 