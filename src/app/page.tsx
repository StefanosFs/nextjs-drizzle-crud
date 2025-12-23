import UserForm from "@/components/layout/UserForm";
import UserList from "@/components/layout/UserList";
import { User } from "@/lib/types/user";
import { getAllUsers } from "@/server/db/queries/user";

export default async function HomePage() {
  let users: User[] = [];

  try {
    users = await getAllUsers();
  } catch (error) {
    console.error("Database error:", error);
  }

  return (
    <main className="flex-1 p-6 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Users
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage application users and view their details
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-1 bg-white dark:bg-neutral-800 rounded-xl shadow p-6">
            <h2 className="text-lg font-medium mb-4">Add User</h2>
            <UserForm />
          </section>
          <section className="lg:col-span-2 bg-white dark:bg-neutral-800 rounded-xl shadow p-6">
            <UserList users={users} />
          </section>
        </div>
      </div>
    </main>
  );
}
