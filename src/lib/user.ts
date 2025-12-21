// src/lib/user.ts
import { db } from "./db";
import { users } from "./schema";

export const createUser = async (name: string) => {
  return db.insert(users).values({ name }).returning();
};

export const getAllUsers = async () => {
  return db.select().from(users);
};

