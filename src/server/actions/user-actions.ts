"use server";

import { db } from "@/server/db/db";
import { users } from "@/server/db/schema";
import { revalidatePath } from "next/cache";
import { deleteUserById, updateUserById } from "@/server/db/queries/user";

export async function createUserAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  if (!name || !email) throw new Error("Name and email are required");

  await db.insert(users).values({ name, email }).returning();

  revalidatePath("/");
}

export async function updateUserAction(id: string, formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;

  if (!id) {
    throw new Error("User id is required");
  }

  await updateUserById(id, {
    ...(name && { name }),
    ...(email && { email }),
  });

  revalidatePath("/");
}

export async function deleteUserAction(id: string) {
  if (!id) {
    throw new Error("User id is required");
  }

  await deleteUserById(id);

  revalidatePath("/");
}
