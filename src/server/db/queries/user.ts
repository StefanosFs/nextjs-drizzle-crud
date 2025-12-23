// src/lib/user.ts
import { db } from "../db";
import { users } from "../schema/schema";

export const createUser = async (name: string, email: string) => {
  return db.insert(users).values({ name, email }).returning();
};

export const getAllUsers = async () => {
  return db.select().from(users);
};
