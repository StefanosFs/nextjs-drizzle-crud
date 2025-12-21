// src/app/page.tsx
import { getAllUsers, createUser } from "@/lib/user";

export default async function HomePage() {
  try {
    let users = await getAllUsers();

    // Insert a test user if table is empty
    if (users.length === 0) {
      await createUser("Alice");
      users = await getAllUsers(); // refresh after insert
    }

    return (
      <main className="p-4">
        <h1>Users</h1>
        {users.map((u) => (
          <div key={u.id}>{u.name}</div>
        ))}
      </main>
    );
  } catch (err) {
    console.error("Database error:", err);
    return <p>Failed to connect to database.</p>;
  }
}


































// src/app/page.tsx
// import db from "@/lib/db"; // Import your DB helper directly

// export default async function Page() {
//   // ✅ DO THIS: Call the logic directly from the server
//   const user = await db.findUserById("789");
  
//   return <div>{user.name}</div>;
// }






// export default async function Page() {
//   const res = await fetch('http://localhost:3000/api/users/278');
//   const user = await res.json();

//   return (
//     <div>
//       <h1>Hello</h1>
//       <pre className="code-block">{JSON.stringify(user, null, 2)}</pre>
//     </div>
//   );
// }
