export default function AboutPage() {
  return (
    <section
      className=" text-center relative bg-neutral-50"
      style={{
        backgroundImage: "url('/images/vandiams-about-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[0px]" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-32">
        {/* Intro */}
        <div className="text-center">
          <span className="block text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
            Our Story
          </span>

          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Modern Diamond Luxury
            <br />
            Responsibly Created
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 text-[15px] leading-relaxed">
            Where refined design meets innovation, craftsmanship, and conscious
            luxury.
          </p>
        </div>

        {/* Story Content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-sm p-10 md:p-16 shadow-sm space-y-10 text-gray-700 leading-relaxed text-[15px]">
          <p>
            VANDIAMS was born from a meeting of vision and design — where
            entrepreneurship meets artistry.
          </p>

          <p>
            Hanna Vu was born in Hanoi, Vietnam and moved to Miami more than ten
            years ago, building her international business journey. As a global
            entrepreneur, she is passionate about creating brands that combine
            beauty, quality, and accessibility.
          </p>

          <p>
            In Miami, she met French jewelry designer Vanessa Kakon and fell in
            love with her refined, contemporary design style. Her elegant and
            modern aesthetic became the creative foundation of the brand.
          </p>

          <p>
            Together, they created VANDIAMS to bring a new generation of diamond
            luxury to the market — through elevated design, certified lab-grown
            diamonds, and responsible craftsmanship.
          </p>

          <p className="font-medium text-gray-900">
            Modern Diamond Luxury · Responsibly Created
          </p>

          {/* Signature */}
          <div className="pt-10 text-sm text-gray-700">
            <p className="font-medium">Hanna Vu</p>
            <p className="font-medium">Vanessa Kakon</p>
            <p className="italic text-gray-500">
              Co-Founders · Miami
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            {
              title: "Elevated Design",
              text: "Refined, contemporary jewelry designed with timeless intention.",
            },
            {
              title: "Responsible Luxury",
              text: "Certified lab-grown diamonds with transparency and integrity.",
            },
            {
              title: "Crafted With Purpose",
              text: "Designed to celebrate individuality while honoring the planet.",
            },
          ].map((item) => (
            <div key={item.title} className="max-w-sm mx-auto">
              <h3 className="font-serif text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
