"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <form
        onSubmit={submit}
        className="w-full max-w-sm border bg-white p-8 space-y-6"
      >
        <h1 className="font-serif text-2xl text-center">
          VANDIAMS Admin
        </h1>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full py-3 bg-black text-white uppercase tracking-widest text-sm">
          Login
        </button>
      </form>
    </div>
  );
}
