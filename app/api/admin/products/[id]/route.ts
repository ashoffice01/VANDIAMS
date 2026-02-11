import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await prisma.product.delete({
    where: { id: Number(id) },
  });

  return NextResponse.redirect(
    new URL("/admin/products", req.url)
  );
}
