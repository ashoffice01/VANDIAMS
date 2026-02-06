"use client";

import { useState, DragEvent, useEffect } from "react";
import Image from "next/image";

export default function CustomDesignPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  // form state
  const [jewelryType, setJewelryType] = useState("Ring");
  const [metal, setMetal] = useState("White Gold");
  const [budget, setBudget] = useState("$2,000 – $4,000");
  const [notes, setNotes] = useState("");

  // AI state
  const [loading, setLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);

  const handleFile = (file: File) => {
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // clean up object URL
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const generateDesign = async () => {
    setLoading(true);
    setAiSuggestion(null);

    try {
      const res = await fetch("/api/design-suggestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jewelryType,
          metal,
          budget,
          notes,
        }),
      });

      const data = await res.json();
      setAiSuggestion(data.suggestion);
    } catch (err) {
      setAiSuggestion("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-serif text-4xl text-center mb-6">
        Design Your Own Jewelry
      </h1>

      <p className="text-center text-gray-600 mb-16">
        Share your vision. Our designers will craft a one-of-a-kind piece made just for you.
      </p>

      <form
        className="space-y-10"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Upload */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-3">
            Upload Inspiration
          </label>

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            className={`border-2 border-dashed p-10 text-center cursor-pointer transition
              ${dragging ? "border-black bg-neutral-50" : "border-gray-300"}
            `}
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="upload"
              onChange={(e) =>
                e.target.files && handleFile(e.target.files[0])
              }
            />

            {!preview ? (
              <label htmlFor="upload" className="text-sm text-gray-600">
                Drag & drop an image here, or click to upload
              </label>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={preview}
                  alt="Preview"
                  width={300}
                  height={300}
                  className="object-cover"
                />
                <button
                  type="button"
                  className="text-xs uppercase tracking-widest text-gray-500 hover:text-black"
                  onClick={() => {
                    setFile(null);
                    setPreview(null);
                  }}
                >
                  Remove image
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Jewelry Type */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-3">
            Jewelry Type
          </label>
          <select
            className="w-full border px-4 py-3"
            value={jewelryType}
            onChange={(e) => setJewelryType(e.target.value)}
          >
            <option>Ring</option>
            <option>Necklace</option>
            <option>Earrings</option>
            <option>Bracelet</option>
          </select>
        </div>

        {/* Metal */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-3">
            Metal Preference
          </label>
          <select
            className="w-full border px-4 py-3"
            value={metal}
            onChange={(e) => setMetal(e.target.value)}
          >
            <option>White Gold</option>
            <option>Yellow Gold</option>
            <option>Rose Gold</option>
            <option>Platinum</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-3">
            Estimated Budget
          </label>
          <select
            className="w-full border px-4 py-3"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option>$1,000 – $2,000</option>
            <option>$2,000 – $4,000</option>
            <option>$4,000 – $6,000</option>
            <option>$6,000+</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-3">
            Additional Notes
          </label>
          <textarea
            rows={4}
            className="w-full border px-4 py-3"
            placeholder="Tell us about the occasion, stone shape, or inspiration..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* AI Button */}
        <button
          type="button"
          onClick={generateDesign}
          className="w-full py-4 border border-black text-sm tracking-widest uppercase"
        >
          {loading ? "Designing with AI..." : "Generate AI Design Suggestion"}
        </button>

        {/* AI Result */}
        {aiSuggestion && (
          <div className="border p-8 bg-neutral-50">
            <h3 className="font-serif text-2xl mb-4">
              AI Design Suggestion
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {aiSuggestion}
            </p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 bg-black text-white text-sm tracking-widest uppercase"
        >
          Submit Design Request
        </button>
      </form>
    </section>
  );
}
