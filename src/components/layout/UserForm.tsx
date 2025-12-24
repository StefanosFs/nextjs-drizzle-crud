"use client";

import { createUserAction } from "@/server/actions/user-actions";
import { useState, useTransition, useRef } from "react";
import { Button } from "@/components/ui/buttons";

export default function UserForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    startTransition(async () => {
      try {
        await createUserAction(formData);
        formRef.current?.reset();
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
              <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
                {error}
              </p>
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
