import { User } from "lucide-react";
import { SearchInput } from "@/components/ui/SearchInput";
import { Suspense } from "react";

export const Header = () => (
  <header className="sticky top-0 z-100 flex h-16 shrink-0 items-center justify-between border-b border-border bg-background/80 backdrop-blur-2xl px-8 gap-8">
    {/* Left Side: Brand */}
    <div className="flex items-center gap-3 shrink-0">
      <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
        <span className="text-white text-sm font-black">U</span>
      </div>
      <h1 className="hidden md:block text-base font-extrabold tracking-tight text-slate-950 dark:text-white">
        User Management
      </h1>
    </div>

    {/* Center/Right Side: Search & Profile */}
    <div className="flex items-center gap-6 flex-1 justify-end">
      <Suspense
        fallback={
          <div className="w-full max-w-sm h-10 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" />
        }
      >
      <SearchInput />
      </Suspense>

      {/* 2. Profile Avatar */}
      <div className="h-9 w-9 shrink-0 rounded-full border-2 border-primary/20 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-950 dark:text-white cursor-pointer hover:border-primary transition-all">
        <User size={18} />
      </div>
    </div>
  </header>
);
