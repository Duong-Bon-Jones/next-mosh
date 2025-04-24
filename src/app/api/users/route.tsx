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

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  return NextResponse.json({ id: 1, ...body }, { status: 201 });
};
