"use client";

import { createUserAction } from "@/server/actions/user-actions";
import { useState, useTransition, useRef } from "react";
import { Button } from "../ui/buttons"; // Import our master recipe

export default function UserForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    startTransition(async () => {
      try {
        await createUserAction(formData);
        formRef.current?.reset(); // Clear the table after a successful order!
      } catch (err) {
        setError("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-xl transition-all">
      <div className="px-6 py-8 sm:px-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your details below to get started.
          </p>
        </div>

        <form ref={formRef} action={handleSubmit} className="space-y-6">
          {/* Input Group: Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              className="block w-full rounded-xl bg-slate-50 dark:bg-slate-900 border-none ring-1 ring-border p-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>

          {/* Input Group: Email */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="jane@example.com"
              className="block w-full rounded-xl bg-slate-50 dark:bg-slate-900 border-none ring-1 ring-border p-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-rose-50 dark:bg-rose-950/30 p-3 border border-rose-100 dark:border-rose-900/50">
              <p className="text-sm font-medium text-rose-600 dark:text-rose-400">{error}</p>
            </div>
          )}

          <Button 
            type="submit" 
            disabled={isPending} 
            className="w-full py-6 text-base"
          >
            {isPending ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                <span>Creating...</span>
              </div>
            ) : (
              "Create User"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}





// "use client";

// import { createUserAction } from "@/server/actions/user-actions";
// import { useState, useTransition } from "react";

// export default function UserForm() {
//   const [isPending, startTransition] = useTransition();
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (formData: FormData) => {
//     setError(null); // Reset error state on new attempt
//     startTransition(async () => {
//       try {
//         const result = await createUserAction(formData);
//         // If your action returns an error object, handle it here:
//         // if (result?.error) setError(result.error);
//       } catch (err) {
//         setError("Something went wrong. Please try again.");
//         console.error(err);
//       }
//     });
//   };

//    return (
//     <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
//       <div className="px-6 py-8 sm:px-10">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
//             Create Account
//           </h2>
//           <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
//             Enter your details below to get started.
//           </p>
//         </div>

//         <form action={handleSubmit} className="space-y-5">
//           <div className="group relative">
//             <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 transition-colors group-focus-within:text-black dark:group-focus-within:text-white">
//               Full Name
//             </label>
//             <input
//               name="name"
//               type="text"
//               required
//               placeholder="Jane Doe"
//               className="mt-1 block w-full border-b-2 border-neutral-200 bg-transparent py-2 text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-black dark:border-neutral-800 dark:text-white dark:focus:border-white sm:text-sm"
//             />
//           </div>

//           <div className="group relative">
//             <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 transition-colors group-focus-within:text-black dark:group-focus-within:text-white">
//               Email Address
//             </label>
//             <input
//               name="email"
//               type="email"
//               required
//               placeholder="jane@example.com"
//               className="mt-1 block w-full border-b-2 border-neutral-200 bg-transparent py-2 text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-black dark:border-neutral-800 dark:text-white dark:focus:border-white sm:text-sm"
//             />
//           </div>

//           {error && (
//             <div className="rounded-md bg-red-50 p-3 dark:bg-red-900/20">
//               <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={isPending}
//             className="relative w-full overflow-hidden rounded-lg bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
//           >
//             <span className={isPending ? "opacity-0" : "opacity-100"}>
//               Create User
//             </span>
//             {isPending && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-black" />
//               </div>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



