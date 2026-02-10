import { prisma } from "@/lib/prisma";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default async function CustomDesignAdmin() {
  const designs = await prisma.customDesign.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <h1 className="font-serif text-2xl mb-8">Custom Design Requests</h1>

      <div className="bg-white border">
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Budget</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {designs.map((d: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; email: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; jewelryType: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; budget: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; createdAt: string | number | Date; }) => (
              <tr key={d.id} className="border-b">
                <td className="p-4">{d.name}</td>
                <td>{d.email}</td>
                <td>{d.jewelryType}</td>
                <td>{d.budget}</td>
                <td>
                  {new Date(d.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
