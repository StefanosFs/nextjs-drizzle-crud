import { Settings } from "lucide-react";

export const Sidebar = () => (
  <aside className="sticky top-0 h-screen w-64 border-r border-border bg-card/60 backdrop-blur-xl p-6 hidden md:block">
    <nav className="relative z-30 flex flex-col gap-8">
      <div className="space-y-4">
        <h2 className="px-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          General
        </h2>

        <ul className="space-y-1">
          <li>
            <div className="flex cursor-pointer items-center gap-3 rounded-xl bg-primary px-3 py-2.5 text-sm font-bold text-white shadow-lg">
              <div className="h-1.5 w-1.5 rounded-full bg-white" />
              Dashboard
            </div>
          </li>

          <li>
            <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-900 dark:text-white hover:bg-white/10 transition-all">
              <div className="h-1.5 w-1.5 rounded-full bg-transparent" />
              Users
            </div>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3 px-3 py-2 text-slate-400 cursor-not-allowed group">
        <Settings size={20} />
        <span className="text-sm font-medium">Settings (Coming Soon)</span>
      </div>
    </nav>
  </aside>
);
