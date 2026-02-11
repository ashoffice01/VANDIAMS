import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await prisma.product.update({
    where: { id: product.id },
    data: { featured: !product.featured },
  });

  return NextResponse.redirect(
    new URL("/admin/products", req.url)
  );
}
