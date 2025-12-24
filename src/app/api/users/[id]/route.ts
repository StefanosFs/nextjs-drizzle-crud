import { db } from "@/server/db/db";
import { users as usersTable } from "@/server/db/schema"; // Import your schema
import { eq } from "drizzle-orm"; // Import the equality helper
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: userId } = await params;
    
    if (!userId) {
      return NextResponse.json(
        { message: "Please provide a user ID" },
        { status: 400 }
      );
    }

    // 1. Drizzle Query (Replaces the broken db.findUserById)
    // We select from the usersTable where the ID matches the one in the URL
    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, userId));

    const user = result[0]; // Take the first result

    if (!user) {
      return NextResponse.json(
        { message: "Sorry we couldn't find that user" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.error("Route Error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}




// import { db } from "@/server/db/db";
// import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic"; // Opts out of static caching

// export async function GET(
//   req: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id: userId } = await params;
//     console.log("Fetching data for ID:", userId);

//     if (!userId) {
//       return NextResponse.json(
//         { message: "Please provide a user ID" },
//         { status: 400 }
//       );
//     }

//     const users: Record<string, { id: string; name: string }> = {
//       "123": { id: "123", name: "Test User" },
//       "456": { id: "456", name: "Another User" },
//     };

//     const userFromMock = users[userId];
//     if (userFromMock) return NextResponse.json(userFromMock, { status: 200 });

//     const user = await db.findUserById(userId);

//     if (!user) {
//       return NextResponse.json(
//         { message: "Sorry we couldn't find that user" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(user, { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
