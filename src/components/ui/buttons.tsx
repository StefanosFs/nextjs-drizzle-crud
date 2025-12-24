// Helper to merge tailwind classes safely
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-600",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-600",
    danger: "bg-white border border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200",
  };

  return (
    <button 
      className={cn(
        "px-4 py-2 rounded-xl text-sm font-medium transition-all active:scale-[0.98] disabled:opacity-50",
        variants[variant],
        className
      )} 
      {...props} 
    />
  );
}