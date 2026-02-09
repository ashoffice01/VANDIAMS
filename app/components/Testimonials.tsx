import Image from "next/image";

const testimonials = [
  {
    name: "Emily R.",
    text: "The AI design process was incredible. I saw my ring come to life before it was made.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel M.",
    text: "Unmatched quality and transparency. This is how fine jewelry should be bought.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia L.",
    text: "Sustainable, beautiful, and personal. I’m obsessed with my custom necklace.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <p className="text-gray-600 mb-6">“{t.text}”</p>
              <p className="font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
