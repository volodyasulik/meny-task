import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes App",
  description: "List of meals and recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#fffaf7] text-[#3b3b3b]">
        <nav className="w-full px-6 py-4 border-b border-[#e0cfc3] shadow-sm bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link
              href="/"
              className="text-xl font-bold text-[#772f1a] hover:opacity-80 transition"
            >
              🍽 Recipes
            </Link>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
