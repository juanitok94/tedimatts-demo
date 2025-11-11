// components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="bg-white rounded-full p-1">
              <Image 
                src="/tedimatts-logo-v2.png" 
                alt="TediMatts Logo" 
                width={50} 
                height={50}
                className="rounded-full"
              />
            </div>
            <span className="text-2xl font-bold">TediMatts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/services" className="hover:text-yellow-400 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-yellow-400 transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="/faq" className="hover:text-yellow-400 transition-colors">
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/services" className="block hover:text-yellow-400 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="block hover:text-yellow-400 transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="block hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="/faq" className="block hover:text-yellow-400 transition-colors">
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="block bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}