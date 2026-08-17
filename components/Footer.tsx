import React from 'react'

interface FooterLink {
  label: string
  href: string
}

const footerLinks: FooterLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-lg mb-2">SKETCH</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              A philosophy and lifestyle brand about consciously examining the life you're drawing.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-wide mb-4">Navigate</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-wide mb-4">Newsletter</p>
            <p className="text-sm text-gray-600 mb-3">
              One idea. One question. One line worth redrawing.
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-wide mb-4">Follow</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 text-center">
            © {currentYear} SKETCH. All rights reserved. Keep sketching.
          </p>
        </div>
      </div>
    </footer>
  )
}
