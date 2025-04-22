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

  return NextResponse.json(body);
};
