import { db } from "./db";
import { users } from "./schema";

const main = async () => {
  console.log("🌱 Seeding database...");

  const sampleUsers = [
    {
      name: "Alex Rivera",
      email: "alex@example.com",
    },
    {
      name: "Sarah Chen",
      email: "sarah.c@dev.io",
    },
    {
      name: "Jordan Smith",
      email: "j.smith@company.org",
    },
  ];

  try {
    await db.insert(users).values(sampleUsers);
    console.log("✅ Database seeded successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  }
};

main();