export default function Hero() {
  return (
    <section className="relative bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl md:text-6xl leading-tight">
          Lab-Grown Diamonds
          <br />
          Designed for Forever
        </h1>

        <p className="mt-6 text-gray-600 max-w-xl mx-auto">
          Discover ethically crafted fine jewelry with brilliance that lasts a lifetime.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3 bg-black text-white text-sm tracking-widest uppercase">
            Shop Rings
          </button>
          <button className="px-8 py-3 border border-black text-sm tracking-widest uppercase">
            Custom Design
          </button>
        </div>
      </div>
    </section>
  );
}
