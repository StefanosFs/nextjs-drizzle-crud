"use client";

import { User } from "@/lib/types/user";
import { deleteUserAction, updateUserAction } from "@/server/actions/user-actions";
import { Button } from "../ui/buttons"
import { SearchX } from "lucide-react";

// type Props = {
//   users: User[];
// };

export default function UserList({ users }: { users: User[] }) {
  if (users.length === 0) {
    return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-slate-50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
      <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
        <SearchX className="h-8 w-8 text-slate-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">No users found</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mt-2">
        We couldn't find any users matching your search. Try a different name or add a new user!
      </p>
    </div>
  );
  }

  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <div 
          key={user.id} 
          className="group border border-slate-200 dark:border-slate-800 rounded-2xl p-5 bg-white dark:bg-slate-900/50 shadow-sm hover:shadow-md transition-all"
        >
          {/* Header Info */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {user.name || "Anonymous User"}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{user.email}</p>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
              ID: {user.id.slice(0, 8)}
            </span>
          </div>

          {/* Inline Edit Form */}
          <form action={updateUserAction.bind(null, user.id)} className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <input
                name="name"
                defaultValue={user.name ?? ""}
                placeholder="Full Name"
                className="w-full bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 p-2.5 rounded-xl text-sm 
                /* 1. Dim state (default) */
                text-slate-500 dark:text-slate-400 
                /* 2. Focused state (when typing) */
                focus:text-slate-900 dark:focus:text-white focus:ring-2 focus:ring-indigo-500 
                outline-none transition-all"/>
              <input
                name="email"
                defaultValue={user.email ?? ""}
                placeholder="Email Address"
                className="w-full bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 p-2.5 rounded-xl text-sm 
                /* 1. Dim state (default) */
                text-slate-500 dark:text-slate-400 
                /* 2. Focused state (when typing) */
                focus:text-slate-900 dark:focus:text-white focus:ring-2 focus:ring-indigo-500 
                outline-none transition-all"/>
            </div>

            {/* Action Buttons: Side-by-Side */}
            <div className="flex items-center gap-3 pt-2">
              <Button type="submit" className="flex-1">
                Save Changes
              </Button>
              
              <Button 
                formAction={deleteUserAction.bind(null, user.id)}
                variant="danger"
              >
                Delete
              </Button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}

