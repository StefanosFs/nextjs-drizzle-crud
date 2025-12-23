"use server";

import { db } from "@/server/db/db";
import { users } from "@/server/db/schema/index";
import { revalidatePath } from "next/cache";

export async function createUserAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  if (!name || !email) throw new Error("Name and email are required");

  await db.insert(users).values({ name, email }).returning();

  revalidatePath("/");
}
