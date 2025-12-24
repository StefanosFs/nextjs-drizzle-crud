import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className="antialiased bg-background">
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col">
              <Header />
              <main className="flex-1 p-4 md:p-10 bg-neutral-50/50">
                <div className="mx-auto max-w-5xl">
                  {children}
                </div>
              </main>
            </div>
          </div>
      </body>
    </html>
  );
}
