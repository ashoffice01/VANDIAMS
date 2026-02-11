"use client";

import { useRef } from "react";
import Link from "next/link";

const shapes = [
  { name: "Round", image: "/diamonds/round.png", link: "/" },  
  { name: "Oval", image: "/diamonds/oval.png", link: "/" },
  { name: "Cushion", image: "/diamonds/cushion.png", link: "/" },
  { name: "Pear", image: "/diamonds/pear.png", link: "/" },
  { name: "Emerald", image: "/diamonds/emerald.png", link: "/" },
  { name: "Radiant", image: "/diamonds/radiant.png", link: "/" },
  { name: "Princess", image: "/diamonds/princess.png", link: "/" },
  { name: "Marquise", image: "/diamonds/marquise.png", link: "/" },
  { name: "Asscher", image: "/diamonds/asscher.png", link: "/" },
  { name: "Heart", image: "/diamonds/heart.png", link: "/" },
];

export default function LabGrownDiamonds() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 300;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide">
          LAB GROWN DIAMONDS
        </h2>

        <p className="mt-4 text-gray-600 max-w-0xl mx-auto">
          Modern luxury, reimagined with lab grown diamonds. It's not brilliance unless it's Grown Brilliance.
        </p>

        {/* Slider */}
        <div className="relative mt-12">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            ←
          </button>

          {/* Scroll Container */}
          <div
            ref={sliderRef}
            className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar px-10"
          >
            {shapes.map((shape) => (
              <Link
                key={shape.name}
                href={shape.link}
                className="flex flex-col items-center min-w-[100px] group"
              >
                <img
                  src={shape.image}
                  alt={shape.name}
                  className="h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="mt-4 text-sm text-gray-700 group-hover:text-black">
                  {shape.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
