"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const { items } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Fixed-height navbar */}
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-serif tracking-wide hover:opacity-80 transition"
        >
           <Image
                      src="/brand.jpeg"
                      alt="VANDIAMS"
                      width={160}
                      height={50}
                     
                    />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          {/* <Link href="/">Home</Link> */}
          <Link href="/about">ABOUT</Link>
          {/* Shop Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="hover:text-gray-600 transition">
              Shop
            </button>

            {shopOpen && (
              <div className="absolute left-0 top-full w-[720px] bg-white border shadow-xl p-10 grid grid-cols-3 gap-8">
                {/* Engagement Rings */}
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest mb-4">
                    Engagement Rings
                  </h4>
                  <ul className="space-y-3 text-sm normal-case">
                    <li><Link href="/products?category=solitaire">Solitaire</Link></li>
                    <li><Link href="/products?category=halo">Halo</Link></li>
                    <li><Link href="/products?category=oval">Oval Cut</Link></li>
                    <li>
                      <Link href="/products" className="text-xs uppercase tracking-widest">
                        View All →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Fine Jewelry */}
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest mb-4">
                    Fine Jewelry
                  </h4>
                  <ul className="space-y-3 text-sm normal-case">
                    <li><Link href="/earrings">Earrings</Link></li>
                    <li><Link href="/bracelets">Bracelets</Link></li>
                    <li><Link href="/necklaces">Necklaces</Link></li>
                  </ul>
                </div>

                {/* Featured */}
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest mb-4">
                    Featured
                  </h4>
                  <ul className="space-y-3 text-sm normal-case">
                    <li><Link href="/products?tag=best-sellers">Best Sellers</Link></li>
                    <li><Link href="/products?tag=new">New Arrivals</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link href="/custom">AI Design Studio</Link>
          <Link href="#">How It Works</Link>
          <Link href="#">Sustainability</Link>
          <Link href="#">Reviews</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:block">
            Account
          </Link>

          <Link href="/cart" className="relative hidden md:block">
            Cart
            {items.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          {[
            // ["Home", "/"],
            ["About", "/about"],
            ["Shop", "/products"],
            ["AI Design Studio", "/custom"],
            ["How It Works", "#"],
            ["Sustainability", "#"],
            ["Reviews", "#"],
            ["FAQ", "#"],
            ["Contact", "#"],
            ["Account", "#"],
            ["Cart", "/cart"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b uppercase tracking-widest text-sm"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
