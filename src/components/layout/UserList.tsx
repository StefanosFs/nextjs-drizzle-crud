"use client";

import { User } from "@/lib/types/user";
import { deleteUserAction, updateUserAction } from "@/server/actions/user-actions";

type Props = {
  users: User[];
};

export default function UserList({ users }: Props) {
  return (
    <div className="space-y-4">
      {users.map(user => (
        <div key={user.id} className="border rounded-lg p-4">
          {/* User info */}
          <p className="font-medium">{user.name ?? "—"}</p>
          <p className="text-sm text-gray-500">{user.email ?? "—"}</p>
          <p className="text-xs text-gray-400">
            Joined: {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "—"}
          </p>

          {/* Update form */}
          <form
            action={updateUserAction.bind(null, user.id)}
            className="mt-2 flex flex-col gap-2"
          >
            <input
              name="name"
              defaultValue={user.name ?? ""}
              placeholder="Name"
              className="border p-1 rounded"
            />
            <input
              name="email"
              defaultValue={user.email ?? ""}
              placeholder="Email"
              className="border p-1 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              Update
            </button>
          </form>

          {/* Delete button */}
          <form action={deleteUserAction.bind(null, user.id)} className="mt-2">
            <button
              type="submit"
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}
















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


