## 🛠️ Local Development (Docker)

To run this project locally with a containerized PostgreSQL database:

1. **Clone the repo:** `git clone <your-url>`
2. **Install dependencies:** `npm install`
3. **Start the containers:** `docker-compose up -d`
4. **Push the schema:** `npx drizzle-kit push`
5. **Run the app:** `npm run dev`

The app will be available at `http://localhost:3000`.


🚀 Tech Stack

    Framework: Next.js 15 (App Router, Server Actions)

    Database: PostgreSQL

    ORM: Drizzle ORM

    Styling: Tailwind CSS

    Icons: Lucide React

    Validation & Logic: use-debounce for optimized API pressure.

✨ Key Features

    Full CRUD Operations: Seamlessly create, read, update, and delete users with instant UI feedback via Server Actions.

    URL-State Synchronized Search: A global search engine that keeps the UI in sync with the browser URL, making results shareable and refresh-persistent.

    Optimized Performance: Implementation of "Debouncing" on search inputs to minimize database load and improve user experience.

    Responsive & Accessible UI: A high-contrast, mobile-first design system supporting dark mode and utilizing frosted-glass aesthetics.

    Robust Database Architecture: Type-safe database queries with Drizzle ORM, featuring case-insensitive ILike filtering.