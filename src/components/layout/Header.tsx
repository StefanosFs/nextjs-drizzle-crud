import { User } from "lucide-react";
import { SearchInput } from '../ui/SearchInput';
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
      
      {/* 1. This is the SMART search bar that actually works */}
      <Suspense fallback={<div className="w-full max-w-sm h-10 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" />}>
        <SearchInput />
      </Suspense>
      
      {/* 2. Profile Avatar */}
      <div className="h-9 w-9 shrink-0 rounded-full border-2 border-primary/20 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-950 dark:text-white cursor-pointer hover:border-primary transition-all">
        <User size={18} />
      </div>
    </div>
    
  </header>
);





// import { Search, User } from "lucide-react";
// import { SearchInput } from '../ui/SearchInput';
// import { Suspense } from "react";

// export const Header = () => (
//   <header className="sticky top-0 z-100 flex h-16 shrink-0 items-center justify-between border-b border-border bg-background/80 backdrop-blur-2xl px-8">
//     <Suspense fallback={<div className="w-full max-w-sm h-10 bg-slate-100 rounded-xl animate-pulse" />}>
//     </Suspense>

//     <SearchInput />
    
//     {/* Left Side: Brand */}
//     <div className="flex items-center gap-3">
//       <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
//         <span className="text-white text-sm font-black">U</span>
//       </div>
//       {/* Forced high-contrast text: text-slate-950 (Light) / text-white (Dark) */}
//       <h1 className="hidden md:block text-base font-extrabold tracking-tight text-slate-950 dark:text-white"> 
//         User Management
//       </h1>
//     </div>

//     {/* Center/Right Side: Search & Profile */}
//     <div className="flex items-center gap-6 flex-1 justify-end">
      
//       {/* High-Contrast Search Bar */}
//       <div className="relative group w-full max-w-sm">
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 dark:text-slate-400 group-focus-within:text-primary transition-colors" />
//         <input
//           type="text"
//           placeholder="Search users..."
//           className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-950 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm"
//         />
//       </div>
      
//       {/* Profile Avatar */}
//       <div className="h-9 w-9 shrink-0 rounded-full border-2 border-primary/20 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-950 dark:text-white cursor-pointer hover:border-primary transition-all">
//         <User size={18} />
//       </div>
//     </div>
    
//   </header>
// );


// export const Header = () => (
//   <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center border-b border-border bg-background/70 backdrop-blur-2xl px-8">
//     <div className="flex items-center gap-3">
//       {/* Brand Icon */}
//       <div className="h-8 w-8 shrink-0 rounded-lg bg-primary flex items-center justify-center shadow-md">
//         <span className="text-white text-xs font-black">U</span>
//       </div>
      
//       {/* Forced high-contrast text */}
//       <h1 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white"> 
//         User Management
//       </h1>
//     </div>
//   </header>
// );


// export const Header = () => (
//   <header className="sticky top-0 z-50 flex h-16 items-center border-b border-border bg-background/80 px-8 backdrop-blur-md transition-colors">
//     <div className="flex items-center gap-2">
//       {/* A simple logo icon adds a professional touch */}
//       <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
//         <span className="text-white text-xs font-black">U</span>
//       </div>
//       <h1 className="text-lg font-bold tracking-tight text-foreground"> 
//         User Management
//       </h1>
//     </div>
//   </header>
// );




// export const Header = () => (
//   <header className="flex h-16 items-center border-b border-neutral-200 bg-white px-8 dark:border-neutral-800 dark:bg-neutral-900">
//     <h1 className="text-lg font-bold text-brand"> 
//       User Management
//     </h1>
//   </header>
// );


