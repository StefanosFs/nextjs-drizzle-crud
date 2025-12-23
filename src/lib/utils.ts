

<button 
  className={cn(
    "px-4 py-2 rounded-lg transition-all", // Base styles
    variant === 'primary' ? "bg-indigo-600 text-white" : "bg-slate-200", // Conditional styles
    className // Allows you to pass extra classes from the outside
  )}
>
  Click Me
</button>