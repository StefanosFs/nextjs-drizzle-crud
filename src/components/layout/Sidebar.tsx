export const Sidebar = () => (
  <aside className="hidden w-64 border-r border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 md:block">
    <nav className="space-y-8">
      <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">Menu</div>
      <ul className="space-y-2">
        <li className="cursor-pointer rounded-lg bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-white">Dashboard</li>
        <li className="cursor-pointer px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Users</li>
        <li className="cursor-pointer px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Settings</li>
      </ul>
    </nav>
  </aside>
);


