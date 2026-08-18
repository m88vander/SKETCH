'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Journal', href: '/journal' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
]

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <Image
            src="/logo.svg"
            alt="SKETCH Logo"
            width={120}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-body font-medium hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-gray-200">
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-sm font-body font-medium hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
