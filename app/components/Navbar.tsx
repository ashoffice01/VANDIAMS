"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const { items } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-serif tracking-wide hover:opacity-80 transition"
        >
          VANDIAMS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <Link href="/" className="hover:text-gray-600 transition">
            Home
          </Link>

          <Link href="/products" className="hover:text-gray-600 transition">
            Shop
          </Link>

          <Link href="/custom" className="hover:text-gray-600 transition">
            AI Design Studio
          </Link>

          <Link href="/how-it-works" className="hover:text-gray-600 transition">
            How It Works
          </Link>

          <Link href="/sustainability" className="hover:text-gray-600 transition">
            Sustainability
          </Link>

          <Link href="/reviews" className="hover:text-gray-600 transition">
            Reviews
          </Link>

          <Link href="/faq" className="hover:text-gray-600 transition">
            FAQ
          </Link>

          <Link href="/contact" className="hover:text-gray-600 transition">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/account"
            className="hidden md:block text-sm hover:text-gray-600 transition"
          >
            Account
          </Link>

          <Link
            href="/cart"
            className="relative hidden md:block text-sm hover:text-gray-600 transition"
          >
            Cart
            {items.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col text-sm uppercase tracking-widest">
            {[
              ["Home", "/"],
              ["Shop", "/products"],
              ["AI Design Studio", "/custom"],
              ["How It Works", "/how-it-works"],
              ["Sustainability", "/sustainability"],
              ["Reviews", "/reviews"],
              ["FAQ", "/faq"],
              ["Contact / Book Consultation", "/contact"],
              ["Account", "/account"],
              ["Cart", "/cart"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="px-6 py-4 border-b hover:bg-gray-50"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
