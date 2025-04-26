import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json([
    {
      id: 1,
      name: "Milk",
      price: 2.5,
    },
    {
      id: 2,
      name: "Bread",
      price: 3.5,
    },
  ]);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
};
