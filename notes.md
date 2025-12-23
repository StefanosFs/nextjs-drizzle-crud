this project is for db setup and tailwindcss clerk and other setting learning purposes


@theme {
  /* 2. Change it in one place here */
  --color-text-main: var(--text-main);
  --color-background: var(--background);
  --color-brand: var(--brand); /* New variable */
}

:root {
  /* Light Mode: Softer than pure black (Neutral 800) */
  
  --text-main: #262626;
  --background: #ffffff;
  color-scheme: light;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark Mode: Clean off-white (Neutral 100) - No blue tint */
    --text-main: #f3f4f6; 
    --background: #0a0a0a;
    --brand: #2563eb; 
    color-scheme: light;
  }
}

/* If you are forcing the .dark class manually */
.dark {
  --text-main: #f5f5f5;
  --brand: #60a5fa; 
  color-scheme: dark;
  text-shadow: 0 0 15px rgba(96, 165, 250, 0.3);
}