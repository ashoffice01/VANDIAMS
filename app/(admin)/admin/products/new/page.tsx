"use client";

import { useState } from "react";

export default function NewProductPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
const [preview, setPreview] = useState<string | null>(null);
const [featured, setFeatured] = useState(false);

const uploadImage = async () => {
  if (!imageFile) return null;

  const formData = new FormData();
  formData.append("file", imageFile);

  const res = await fetch("/api/admin/products/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.imageUrl;
};

const submit = async (e: React.FormEvent) => {
  e.preventDefault();

  const imageUrl = await uploadImage();

await fetch("/api/admin/products", {
  method: "POST",
  body: JSON.stringify({
    ...form,
    imageUrl,
    featured,
    price: parseFloat(form.price),
  }),
});


  window.location.href = "/admin/products";
};


  return (
    <div className="max-w-xl space-y-8">
      <h1 className="font-serif text-3xl">Add Product</h1>

      <form onSubmit={submit} className="space-y-6">
        <input
          placeholder="Product Name"
          className="w-full border px-4 py-3"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="w-full border px-4 py-3"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          type="number"
          step="0.01"
          placeholder="Price"
          className="w-full border px-4 py-3"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          placeholder="Category"
          className="w-full border px-4 py-3"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

       <input
  type="file"
  accept="image/*"
  className="w-full border px-4 py-3"
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  }}
/>

{preview && (
  <img
    src={preview}
    alt="Preview"
    className="w-40 h-40 object-cover border"
  />
)}

<label className="flex items-center gap-3 text-sm">
  <input
    type="checkbox"
    checked={featured}
    onChange={(e) => setFeatured(e.target.checked)}
  />
  Mark as Featured Product
</label>

        <button className="w-full py-3 bg-black text-white uppercase tracking-widest text-sm">
          Save Product
        </button>
      </form>
    </div>
  );
}
