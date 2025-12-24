export const dynamic = 'force-dynamic';
import UserForm from "@/components/layout/UserForm";
import UserList from "@/components/layout/UserList";
import { User } from "@/lib/types/user";
import { getAllUsers } from "@/server/db/queries/user";

// Define the type for searchParams as a Promise
type Props = {
  searchParams: Promise<{ search?: string }>;
};

export default async function HomePage({ searchParams }: Props) {
  // Await the searchParams promise to get the search term
  const { search } = await searchParams;

  let users: User[] = [];

  try {
    // Pass the search term to your query function
    users = await getAllUsers(search);
  } catch (error) {
    console.error("Database error:", error);
  }

  return (
    <main className="min-h-screen bg-background p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Page Header */}
        <header className="space-y-1">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
            Community
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your members and their account permissions.
          </p>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Area: User Form */}
          <section className="lg:col-span-4 space-y-4">
            <div className="sticky top-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 ml-1">
                New Member
              </h2>
              <UserForm />
            </div>
          </section>

          {/* Main Area: User List */}
          <section className="lg:col-span-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 ml-1">
              {search ? `Results for "${search}"` : "Active Users"} (
              {users.length})
            </h2>
            <div className="rounded-2xl border border-border bg-card p-2 sm:p-6 shadow-sm">
              <UserList users={users} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
