import { User } from "@/lib/types/user";

type Props = {
  users: User[];
};

export default function UserList({ users }: Props) {
  return (
    <div className="space-y-4">
      {users.map(user => (
        <div key={user.id} className="border rounded-lg p-4">
          <p className="font-medium">{user.name ?? "—"}</p>
          <p className="text-sm text-gray-500">{user.email ?? "—"}</p>
          <p className="text-xs text-gray-400">
            Joined: {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "—"}
          </p>
        </div>
      ))}
    </div>
  );
}


