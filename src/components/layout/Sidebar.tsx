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
               {/* Note: I removed the transparency from the active item to anchor the eye */}
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

          <li>
             <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-900 dark:text-white hover:bg-white/10 transition-all">
               <div className="h-1.5 w-1.5 rounded-full bg-transparent" />
               Settings
             </div>
           </li>
         </ul>
       </div>

       {/* Another Section (e.g., Support) */}
       <div className="space-y-4">
         <h2 className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
           Support
         </h2>
         <ul className="space-y-1">
           <li>
             <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground">
              Help Center
            </div>
           </li>
        </ul>
      </div>
    </nav>
  </aside>
);




// export const Sidebar = () => (
//   <aside className="hidden w-64 border-r border-border bg-card p-6 md:block">
//     <nav className="flex flex-col gap-8">
//       {/* Sidebar Section Label */}
//       <div className="space-y-4">
//         <h2 className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
//           General
//         </h2>
        
//         <ul className="space-y-1">
//           {/* Active Item */}
//           <li>
//             <div className="flex cursor-pointer items-center gap-3 rounded-xl bg-primary/10 px-3 py-2.5 text-sm font-bold text-primary transition-all">
//               <div className="h-1.5 w-1.5 rounded-full bg-primary" />
//               Dashboard
//             </div>
//           </li>

//           {/* Inactive Items */}
//           <li>
//             <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground">
//               <div className="h-1.5 w-1.5 rounded-full bg-transparent" />
//               Users
//             </div>
//           </li>

//           <li>
//             <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground">
//               <div className="h-1.5 w-1.5 rounded-full bg-transparent" />
//               Settings
//             </div>
//           </li>
//         </ul>
//       </div>

//       {/* Another Section (e.g., Support) */}
//       <div className="space-y-4">
//         <h2 className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
//           Support
//         </h2>
//         <ul className="space-y-1">
//           <li>
//             <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground">
//               Help Center
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </aside>
// );






// export const Sidebar = () => (
//   <aside className="hidden w-64 border-r border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 md:block">
//     <nav className="space-y-8">
//       <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">Menu</div>
//       <ul className="space-y-2">
//         <li className="cursor-pointer rounded-lg bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-white">Dashboard</li>
//         <li className="cursor-pointer px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Users</li>
//         <li className="cursor-pointer px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Settings</li>
//       </ul>
//     </nav>
//   </aside>
// );


