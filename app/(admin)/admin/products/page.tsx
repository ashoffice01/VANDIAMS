import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default async function ProductsPage() {
    const products = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="font-serif text-3xl">Products</h1>
                <Link
                    href="/admin/products/new"
                    className="px-4 py-2 bg-black text-white text-sm uppercase tracking-widest"
                >
                    Add Product
                </Link>
            </div>

            <div className="bg-white border">
                <table className="w-full text-sm">
                    <thead className="border-b bg-neutral-50">
                        <tr>
                            <th className="text-left p-4">Name</th>
                            <th className="text-left p-4">Category</th>
                            <th className="text-left p-4">Image</th>
                            <th className="text-left p-4">Price</th>
                            <th className="text-left p-4">Featured</th>
                            <th className="p-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; category: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; imageUrl: string | Blob | undefined; price: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; featured: any; }) => (
                            <tr key={p.id} className="border-b">
                                <td className="p-4">{p.name}</td>
                                <td className="p-4">{p.category}</td>
                                <td className="p-4">
                                    <img
                                        src={p.imageUrl}
                                        className="w-16 h-16 object-cover border"
                                    />
                                </td>

                                <td className="p-4">${p.price}</td>
                                <td className="p-4">
                                    {p.featured ? (
                                        <span className="text-green-600 font-medium">Yes</span>
                                    ) : (
                                        "No"
                                    )}
                                </td>

                                <td className="p-4 text-right">
                                    <form action={`/api/admin/products/${p.id}`} method="POST">
                                        <button
                                            type="submit"
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                        <form
                                            action={`/api/admin/products/feature/${p.id}`}
                                            method="POST"
                                            className="inline"
                                        >
                                            <button
                                                type="submit"
                                                className="text-blue-600 hover:underline mr-4"
                                            >
                                                {p.featured ? "Unfeature" : "Feature"}
                                            </button>
                                        </form>

                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {products.length === 0 && (
                    <div className="p-10 text-center text-gray-500">
                        No products yet.
                    </div>
                )}
            </div>
        </div>
    );
}
