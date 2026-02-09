import {
  Sparkles,
  Leaf,
  Box,
  DollarSign,
} from "lucide-react";

const items = [
  {
    title: "Client-Created Designs",
    text: "Every piece starts with your vision, refined by AI and perfected by artisans.",
    icon: Sparkles,
  },
  {
    title: "Ethically Sourced",
    text: "Lab-grown diamonds with full transparency and sustainability.",
    icon: Leaf,
  },
  {
    title: "Real-Time 3D Design",
    text: "Visualize your jewelry instantly with AI-powered previews.",
    icon: Box,
  },
  {
    title: "Transparent Pricing",
    text: "No middlemen. No markups. Just honest luxury.",
    icon: DollarSign,
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="text-center">
              <div className="flex justify-center mb-6">
                <Icon size={36} strokeWidth={1.25} />
              </div>
              <h3 className="font-serif text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
