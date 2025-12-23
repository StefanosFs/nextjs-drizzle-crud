"use client";

import { Search, Loader2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useDebouncedCallback } from "use-debounce"; // Option: npm install use-debounce

export const SearchInput = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // This function handles the actual URL update
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }, 300); // 300ms delay: wait for user to stop typing

  return (
    <div className="relative group w-full max-w-sm">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
        ) : (
          <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        )}
      </div>
      
      <input
        type="text"
        placeholder="Search users..."
        defaultValue={searchParams.get("search")?.toString()}
        // 1. We use onChange for real-time results
        onChange={(e) => handleSearch(e.target.value)}
        // 2. We prevent Enter from refreshing the page
        onKeyDown={(e) => {
          if (e.key === 'Enter') e.preventDefault();
        }}
        className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm" />
    </div>
  );
};


// "use client"; // Important: This must be at the top!

// import { Search, Loader2 } from "lucide-react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useTransition } from "react";

// export const SearchInput = () => {
//   const { replace } = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();

//   const handleSearch = (term: string) => {
//     const params = new URLSearchParams(searchParams);
//     if (term) {
//       params.set("search", term);
//     } else {
//       params.delete("search");
//     }

//     startTransition(() => {
//       // This updates the URL, triggering page.tsx to re-run the query
//       replace(`${pathname}?${params.toString()}`);
//     });
//   };

//   return (
//     <div className="relative group w-full max-w-sm">
//       <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//         {/* If searching, show a spinner. Otherwise, show the Search icon */}
//         {isPending ? (
//           <Loader2 className="h-4 w-4 animate-spin text-primary" />
//         ) : (
//           <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
//         )}
//       </div>
      
//       <input
//         type="text"
//         placeholder="Search users..."
//         defaultValue={searchParams.get("search")?.toString()}
//         onChange={(e) => handleSearch(e.target.value)} // <--- THIS triggers the search
//         className="w-full bg-slate-200/20 dark:bg-white/5 border border-border/50 rounded-xl py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-background/80 transition-all backdrop-blur-sm"
//       />
//     </div>
//   );
// };