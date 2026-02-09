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
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    href: "/custom",
  },
];

export default function Collections() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-center mb-16">
          Explore Our Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {collections.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group block"
            >
              <div className="overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  width={600}
                  height={800}
                  className="object-cover w-full h-[420px] group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="mt-6 text-center font-serif text-xl">
                {c.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
