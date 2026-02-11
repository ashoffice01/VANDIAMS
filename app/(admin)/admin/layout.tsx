"use client";

import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };


  return (
    <div className="min-h-screen flex bg-neutral-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="p-6 border-b">
          <h1 className="font-serif text-xl">VANDIAMS</h1>
          <p className="text-xs text-gray-500">Admin Panel</p>
        </div>

        <nav className="p-4 space-y-2 text-sm flex-1">
          <Link
            href="/admin"
            className="block px-4 py-2 rounded hover:bg-neutral-100"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/products"
            className="block px-4 py-2 rounded hover:bg-neutral-100"
          >
            Products
          </Link>


          <Link
            href="/admin/custom-designs"
            className="block px-4 py-2 rounded hover:bg-neutral-100"
          >
            Custom Designs
          </Link>

          <Link
            href="/admin/contacts"
            className="block px-4 py-2 rounded hover:bg-neutral-100"
          >
            Contact Messages
          </Link>

          <Link
            href="/admin/settings"
            className="block px-4 py-2 rounded hover:bg-neutral-100"
          >
            Site Settings
          </Link>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t">
          <button
            onClick={logout}
            className="w-full text-left text-sm uppercase tracking-widest text-gray-600 hover:text-black"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
