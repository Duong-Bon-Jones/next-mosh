import schema from "@/app/api/users/schema";
import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json([
    {
      id: 1,
      name: "Bon",
    },
    {
      id: 2,
      name: "Marci",
    },
  ]);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: 1, ...body }, { status: 201 });
};
