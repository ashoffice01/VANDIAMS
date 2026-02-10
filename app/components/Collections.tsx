"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    title: "Engagement Rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    href: "/products?category=engagement",
  },
  {
    title: "Fine Jewelry",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    href: "/products?category=fine-jewelry",
  },
  {
    title: "Custom Designs",
    image:
       "/collections/custom_design.jpg",
    href: "/custom",
  },
];

export default function Collections() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -width * 0.8 : width * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <h2 className="text-center tracking-widest text-xl mb-5">
          COLLECTIONS
        </h2>
        <p className="text-center tracking-widest text-md mb-5">
          “Discover thoughtfully curated collections, designed to celebrate modern elegance and personal expression.”
        </p>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-black flex items-center justify-center bg-white"
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-black flex items-center justify-center bg-white"
          >
            →
          </button>

          {/* Slides */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {collections.map((c, i) => (
              <Link
                key={c.title}
                href={c.href}
                className={`relative flex-shrink-0 snap-start group
                  ${i === 0 ? "w-[75%]" : "w-[45%]"}
                `}
              >
                {/* Image */}
                <div className="relative w-full h-[520px] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="font-serif text-3xl mb-4">
                    {c.title}
                  </h3>
                  <span className="text-sm tracking-widest border-b border-white pb-1">
                    SHOP NOW
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
