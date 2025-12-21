// src/app/api/users/[id]/route.ts
import { NextResponse } from "next/server";
import db from "@/lib/db";
import { findUserById } from "@/lib/db";

export const dynamic = "force-dynamic"; // Opts out of static caching

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: userId } = await params;
    console.log("Fetching data for ID:", userId);

    if (!userId) {
      return NextResponse.json(
        { message: "Please provide a user ID" },
        { status: 400 }
      );
    }

    const users: Record<string, {id: string, name: string}> = {
      "123": { id: "123", name: "Test User" },
      "456": { id: "456", name: "Another User" },
    };

    const userFromMock = users[userId];
    if (userFromMock) return NextResponse.json(userFromMock, { status: 200 });

    const user = await db.findUserById(userId);

    if (!user) {
      return NextResponse.json(
        { message: "Sorry we couldn't find that user" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

