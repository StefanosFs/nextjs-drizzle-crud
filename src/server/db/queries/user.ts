// src/lib/user.ts
import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../schema/schema";

export const createUser = async (name: string, email: string) => {
  return db.insert(users).values({ name, email }).returning();
};

export const updateUserById = async (
  id: string,
  data: { name?: string; email?: string }
) => {
  return db
    .update(users)
    .set(data)
    .where(eq(users.id, id))
    .returning();
};

export const deleteUserById = async (id: string) => {
  return db
    .delete(users)
    .where(eq(users.id, id))
    .returning();
};

export const getAllUsers = async () => {
  return db.select().from(users);
};
