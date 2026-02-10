"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    celebrity: "Selena Gomez",
    subtitle: "Wearing Cluster Huggies",
    productName: "Cluster Huggies",
    productImage: "/images/cel1_item.jpg",
    heroImage:
      "/images/cel1.jpg",
    href: "/products",
  },
   {
    celebrity: "Selena 2",
    subtitle: "Wearing Cluster Huggies",
    productName: "Cluster Huggies",
    productImage: "/images/cel2_item.jpg",
    heroImage:
      "/images/cel2.jpg",
    href: "/products",
  },
   {
    celebrity: "Selena 3",
    subtitle: "Wearing Cluster Huggies",
    productName: "Cluster Huggies",
    productImage: "/images/cel1_item.jpg",
    heroImage:
      "/images/cel1.jpg",
    href: "/products",
  },
  // You can add more slides later
];

export default function CelebrityFeature() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <section className="bg-[#faf9f7] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* 12-column grid */}
        <div className="grid grid-cols-12 gap-16 items-center">
          
          {/* Left – 4 columns */}
          <div className="col-span-12 md:col-span-3 space-y-12">
            <div>
              <h2 className="font-serif text-3xl mb-2">
                {slide.celebrity}
              </h2>
              <p className="text-gray-500 text-sm">
                {slide.subtitle}
              </p>
            </div>

            {/* Product */}
            <div className="space-y-6">
              <Image
                src={slide.productImage}
                alt={slide.productName}
                width={200}
                height={200}
                className="object-contain"
              />

              <div>
                <p className="text-sm mb-2">
                  {slide.productName}
                </p>
                <Link
                  href={slide.href}
                  className="text-xs tracking-widest uppercase border-b border-black pb-1"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right – 8 columns */}
          <div className="col-span-12 md:col-span-9 relative">
            <Image
              src={slide.heroImage}
              alt={slide.celebrity}
              width={1200}
              height={800}
              className="object-cover w-full h-auto"
              priority
            />

            {/* Navigation */}
            <div className="absolute bottom-6 right-6 flex gap-4">
              <button
                onClick={() =>
                  setIndex((prev) =>
                    prev === 0 ? slides.length - 1 : prev - 1
                  )
                }
                className="w-10 h-10 border border-black flex items-center justify-center bg-white/80"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setIndex((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-10 h-10 border border-black flex items-center justify-center bg-white/80"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}