'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-sb-brown text-sb-cream">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Street Beans</Link>
        <button 
          className="text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <nav className="container mx-auto px-4 py-2">
          <ul className="space-y-2">
            <li><Link href="/" className="block py-1 hover:text-sb-orange">Domů</Link></li>
            <li><Link href="/menu" className="block py-1 hover:text-sb-orange">Nabídka</Link></li>
            <li><Link href="/events" className="block py-1 hover:text-sb-orange">Akce</Link></li>
            <li><Link href="/about" className="block py-1 hover:text-sb-orange">O nás</Link></li>
            <li><Link href="/account" className="block py-1 hover:text-sb-orange">Zákaznický účet</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}