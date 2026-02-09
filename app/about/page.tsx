import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero / Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image */}
          <div className="relative w-full h-[520px]">
            <Image
              src="/images/about-brand-story.png"
              alt="VANDIAMS Brand Story"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl mb-8">
              Our Story
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                VANDIAMS was born from a meeting of vision and design — where
                entrepreneurship meets artis.
              </p>

              <p>
                Hanna Vu was born in Hanoi, Vietnam and moved to Miami more than
                ten years ago, building her international business journey. As a
                global entrepreneur, she is passionate about creating brands
                that combine beauty, quality, and accessibility.
              </p>

              <p>
                In Miami, she met French jewelry designer Vanessa Kakon and fell
                in love with her refined, contemporary design style. Her elegant
                and modern aesthetic became the creative design foundation of
                the brand.
              </p>

              <p>
                Together, they created VANDIAMS to bring a new generation of
                diamond luxury to the market — through elevated design,
                certified lab-grown diamonds, and responsible craftsmanship.
              </p>

              <p className="font-medium text-gray-900">
                Modern Diamond Luxury · Responsibly Created
              </p>

              <div className="pt-6 text-sm text-gray-600">
                <p>Hanna Vu</p>
                <p>Vanessa Kakon</p>
                <p className="italic">Co-Founders · Miami</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="font-serif text-xl mb-4">
              Elevated Design
            </h3>
            <p className="text-gray-600">
              Refined, contemporary jewelry designed with timeless intention.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4">
              Responsible Luxury
            </h3>
            <p className="text-gray-600">
              Certified lab-grown diamonds with transparency and integrity.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4">
              Crafted With Purpose
            </h3>
            <p className="text-gray-600">
              Designed to celebrate individuality while honoring the planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
