// Placeholder navigation component
// Will be built out in Stage 3

import React from 'react'

export const Navigation: React.FC = () => {
  return (
    <nav className="border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        <div className="text-2xl font-display font-bold">SKETCH</div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="/">Home</a></li>
          <li><a href="/philosophy">Philosophy</a></li>
          <li><a href="/journal">Journal</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  )
}
