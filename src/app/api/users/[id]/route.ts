import schema from "@/app/api/users/schema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) => {
  const { id } = await params;
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json([
    {
      id: 1,
      name: "Bon",
    },
  ]);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) => {
  const body = await req.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const { id } = await params;

  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name });
};

export const DELETE = async (
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: number }>;
  }
) => {
  const { id } = await params;

  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({});
};
