import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Street Beans",
  description: "Mobilní kavárna s duší ulice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.className} bg-sb-cream text-sb-black`}>
        <Header />
        {children}
        <footer className="bg-sb-brown text-sb-cream p-6 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-2xl hover:text-sb-orange">📷</a>
            <a href="#" className="text-2xl hover:text-sb-orange">👍</a>
            <a href="#" className="text-2xl hover:text-sb-orange">🎵</a>
          </div>
          <p>© 2024 Street Beans</p>
        </footer>
      </body>
    </html>
  );
}
