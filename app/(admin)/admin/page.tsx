import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const contactCount = await prisma.contactSubmission.count();
  const designCount = await prisma.customDesign.count();

  return (
    <div className="space-y-10">
      <h1 className="font-serif text-3xl">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border p-6">
          <p className="text-sm text-gray-500">Contact Messages</p>
          <p className="text-4xl font-serif mt-2">{contactCount}</p>
        </div>

        <div className="bg-white border p-6">
          <p className="text-sm text-gray-500">Custom Design Requests</p>
          <p className="text-4xl font-serif mt-2">{designCount}</p>
        </div>
      </div>
    </div>
  );
}
