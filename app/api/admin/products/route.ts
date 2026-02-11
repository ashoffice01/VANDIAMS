import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  await prisma.product.create({
    data: body,
  });

  return NextResponse.json({ success: true });
}
