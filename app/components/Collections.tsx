import CollectionCard from "./CollectionCard";

export default function Collections() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="font-serif text-4xl text-center mb-16">
        Shop by Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CollectionCard
          title="Rings"
          image="/collections/rings.jpg"
        />
        <CollectionCard
          title="Earrings"
          image="/collections/earrings.jpg"
        />
        <CollectionCard
          title="Bracelets"
          image="/collections/bracelets.jpg"
        />
      </div>
    </section>
  );
}
