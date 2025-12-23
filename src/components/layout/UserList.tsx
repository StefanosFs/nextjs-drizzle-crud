"use client";

import { User } from "@/lib/types/user";
import { deleteUserAction, updateUserAction } from "@/server/actions/user-actions";
import { Button } from "../ui/buttons"

type Props = {
  users: User[];
};

export default function UserList({ users }: { users: User[] }) {
  if (users.length === 0) {
    return <p className="text-muted-foreground p-4">No users found.</p>;
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





// "use client";

// import { User } from "@/lib/types/user";
// import { deleteUserAction, updateUserAction } from "@/server/actions/user-actions";

// type Props = {
//   users: User[];
// };

// export default function UserList({ users }: Props) {
//   return (
//     <div className="space-y-4">
//       {users.map((user) => (
//         <div key={user.id} className="border border-slate-200 rounded-xl p-6 bg-white dark:border-neutral-800 dark:bg-neutral-900 shadow-sm transition-all hover:shadow-md">
//           {/* User info */}
//           <div className="mb-4">
//             <p className="font-semibold text-slate-800 text-lg">{user.name ?? "—"}</p>
//             <p className="text-sm text-slate-500">{user.email ?? "—"}</p>
//             <p className="text-xs text-white mt-1">
//               Joined: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "—"}
//             </p>
//           </div>

//           {/* Form Section */}
//           <form action={updateUserAction.bind(null, user.id)} className="space-y-3">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               <input
//                 name="name"
//                 defaultValue={user.name ?? ""}
//                 placeholder="Name"
//                 className="w-full border border-slate-300 p-2 rounded-lg text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
//               />
//               <input
//                 name="email"
//                 defaultValue={user.email ?? ""}
//                 placeholder="Email"
//                 className="w-full border border-slate-300 p-2 rounded-lg text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
//               />
//             </div>

//             {/* Side-by-Side Button Container */}
//             <div className="flex items-center gap-2 pt-2">
//               <button
//                 type="submit"
//                 className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 active:transform active:scale-[0.98] transition-all shadow-sm"
//               >
//                 Update Profile
//               </button>
              
//               {/* Separate form for Delete, but styled to sit inline */}
//               <button
//                 formAction={deleteUserAction.bind(null, user.id)}
//                 type="submit"
//                 className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 active:transform active:scale-[0.98] transition-all"
//               >
//                 Delete
//               </button>
//             </div>
//           </form>
//         </div>
//       ))}
//     </div>
//   );
// }







// "use client";

// import { User } from "@/lib/types/user";
// import { deleteUserAction, updateUserAction } from "@/server/actions/user-actions";

// type Props = {
//   users: User[];
// };

// export default function UserList({ users }: Props) {
//   return (
//     <div className="space-y-4">
//       {users.map(user => (
//         <div key={user.id} className="border rounded-lg p-4">
//           {/* User info */}
//           <p className="font-medium">{user.name ?? "—"}</p>
//           <p className="text-sm text-gray-500">{user.email ?? "—"}</p>
//           <p className="text-xs text-gray-400">
//             Joined: {user.createdAt
//               ? new Date(user.createdAt).toLocaleDateString()
//               : "—"}
//           </p>

//           {/* Update form */}
//           <form
//             action={updateUserAction.bind(null, user.id)}
//             className="mt-2 flex flex-col gap-2"
//           >
//             <input
//               name="name"
//               defaultValue={user.name ?? ""}
//               placeholder="Name"
//               className="border p-1 rounded"
//             />
//             <input
//               name="email"
//               defaultValue={user.email ?? ""}
//               placeholder="Email"
//               className="border p-1 rounded"
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
//             >
//               Update
//             </button>
//           </form>

//           {/* Delete button */}
//           <form action={deleteUserAction.bind(null, user.id)} className="mt-2">
//             <button
//               type="submit"
//               className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//             >
//               Delete
//             </button>
//           </form>
//         </div>
//       ))}
//     </div>
//   );
// }
















// import { User } from "@/lib/types/user";

// type Props = {
//   users: User[];
// };

// export default function UserList({ users }: Props) {
//   return (
//     <div className="space-y-4">
//       {users.map(user => (
//         <div key={user.id} className="border rounded-lg p-4">
//           <p className="font-medium">{user.name ?? "—"}</p>
//           <p className="text-sm text-gray-500">{user.email ?? "—"}</p>
//           <p className="text-xs text-gray-400">
//             Joined: {user.createdAt
//               ? new Date(user.createdAt).toLocaleDateString()
//               : "—"}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }


